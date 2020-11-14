<?php

namespace App;
use Rakit\Validation\Validator;
use Medoo\Medoo;
use Dotenv\Dotenv;
use \Firebase\JWT\JWT;
use ReCaptcha\ReCaptcha;
use Google_Client;
use PHPGangsta_GoogleAuthenticator;
use DB\DB;



class SignupLogin extends \Singleton {
    
    protected $con;

    public function __construct() {
        $db = DB::getInstance();
        $this->con = $db->getConnection();
    }

    public function loginWithGoogle($google_token) {
        $dotenv = \Dotenv\Dotenv::createImmutable('../conf');
        $dotenv->load();
        $CLIENT_ID = $_ENV['YOUR_CLIENT_ID'];
        $client = new Google_Client(['client_id' => $CLIENT_ID]);  // Specify the CLIENT_ID of the app that accesses the backend
        $payload = $client->verifyIdToken($google_token);
        if($payload) {
            $qry = "SELECT EXISTS (SELECT * FROM google_users WHERE email = '".$payload['email']."')";
            $qry_res = $this->con->qry($qry, true);
            if($qry_res) {
                $qry_1 = "DELETE FROM google_users WHERE email = '".$payload['email']."'";
                $this->con->qry($qry_1, true);
            }
            $query = "INSERT INTO google_users(email, name) VALUES('".$payload['email']."', '".$payload['name']."')";
            $this->con->qry($query, true);
            $error=$this->con->error();
            $id=$this->con->id();
            if($error[0] != '0000') {
                $re = ["status"=> "error", "message" => $error[2]];
                return $re;
            } else {
                $new_token = $this->generateToken($id);
                $sess_obj = \Session::createSession($payload, $id, $new_token);
                $re = ["status"=> "success", "message" => "Login get success", "token" => $new_token];
                return $re;
            }
        } else {
            $re = ["status"=> "error", "message" => 'Unauthorized login request.'];
            return $re;
        }
    }

    public function loginAction($data, $token) {
        $dotenv = \Dotenv\Dotenv::createImmutable('../conf');
        $dotenv->load();
        $secret_key = $_ENV['SECRET_KEY'];
        $recaptcha = new \ReCaptcha\ReCaptcha($secret_key);
        $resp = $recaptcha->setExpectedHostname('localhost')
                            ->setExpectedAction('login')
                            ->setScoreThreshold(0.5)
                            ->verify($token, IP);
        if ($resp->isSuccess()) {

        } else {
            $errors = $resp->getErrorCodes();
            $re = ["status"=> "error", "message" => $errors];
            return $re;
        }
        $rules = [
            'email' => 'required',
            'password' => 'required|min:3|max:12'
        ];
        $messages = [
            'required' => ':attribute required.',
            'email' => ':attribute must be valid.',
            'min' => ':attribute must be minimum 8 charactes.',
            'max' => ':attribute must be maximum 12 charactes.'
        ];
        $validator = new Validator;
        
        $v = $validator->make($data, $rules);
        
        $v->setAliases([
            'email' => 'Email',
            'password' => 'Password'
        ]);
        
        $v->setMessages($messages);

        $v->validate();
        if ($v->fails()) {
            $errors = $v->errors();
            $err = $errors->all();
            $re = ["status"=> "error", "message" => $err[0]];
            return $re;
        } else {
            $userStatus = $this->checkCredential($data);
            if($userStatus) {
                $query_1 = "SELECT id, hash_id, mfa_status FROM users WHERE email = '".$data['email']."' AND password = '".$data['password']."'";
                $resq_1 = $this->con->qry($query_1, true);
                $error = $this->con->error();
                if($error[0] != '0000') {
                    $re = ["status"=> "error", "message" => "Something went wrong.", "log" => $error[2]];
                    return $re;
                }
                $token = $this->generateToken($resq_1['id']);
                $sess_obj = \Session::createSession($data, $resq_1['id'], $token);
                $re = ["status"=> "success", "message" => "Login get success", "token" => $token, "data" => json_encode($resp->toArray()), 'mfa_status' => $resq_1['mfa_status']];
                return $re;
            } else {
                $re = ["status"=> "error", "message" => "Invalid Credential"];
                return $re;
            }
        }
    }

    public function loginActionWithMFA($login_detail, $mfa_code) {
        if($mfa_code == '') {
            $re = ["status"=> "error", "message" => "MFA code Required."];
            return $re;
        }
        $query = "SELECT mfa_secret_key as sk from users where email = '".$login_detail['email']."'";
        $secret = $this->con->qry($query, true);
        $error = $this->con->error();
        if($error[0] != '0000') {
            $re = ["status"=> "error", "message" => "Something went wrong.", "log" => $error[2]];
            return $re;
        }
        $ga = new PHPGangsta_GoogleAuthenticator();
        //$oneCode = $ga->getCode($secret['sk']);
        $checkResult = $ga->verifyCode($secret['sk'], $mfa_code, 2);
        if($checkResult) {
            $res = ['status' => 'success', 'message' => 'Code Verified and login successfully.'];
            return $res;
        } else {
            $res = ['status' => 'error', 'message' => 'Invalid Code. Retry Again.'];
            return $res;
        }
    }

    public function checkRecaptcha($token) {
        $dotenv = \Dotenv\Dotenv::createImmutable('../conf');
        $dotenv->load();
        $secret_key = $_ENV['SECRET_KEY'];
        $recaptcha = new \ReCaptcha\ReCaptcha($secret_key);
        $resp = $recaptcha->setExpectedHostname('localhost')
                            ->setExpectedAction('login')
                            ->setScoreThreshold(0.5)
                            ->verify($token, IP);
        if ($resp->isSuccess()) {
            return true;
        } else {
            $this->errors=$resp->getErrorCodes();
            return false;
        }
    }

    public function checkCredential($data) {
        $query="SELECT EXISTS (SELECT id FROM users WHERE email = '".$data['email']."' AND password = '".$data['password']."')";
        $resq = $this->con->qry($query, true);
        if($this->con->error()[1]) {
            return false;
        }
        return $resq;
    }

    public function signupAction($data) {
        
    }

    public function generateToken($user_id) {
        $dotenv = \Dotenv\Dotenv::createImmutable('../conf');
        $dotenv->load();
        $key = $_ENV['KEY'];
        $payload = array(
            "iss" => "http://localhos.org",
            "sub" => "Token",
            "aud" => "http://localhos.com",
            "exp" => time() + 82400,
            "iat" => time(),
            "nbf" => time(),
            "jti" => $user_id
        );
        $jwt = JWT::encode($payload, $key);
        //$decoded = JWT::decode($jwt, $key, array('HS256'));
        return $jwt;
    }
}

?>