<?php

namespace App;

use DB\DB;
use Rakit\Validation\Validator;

class Users extends \Singleton {

    protected $db;

    public function __construct() {
        $db_obj = DB::getInstance();
        $this->db = $db_obj->getConnection();
    }


    public function getusers() {

        $query = "SELECT * FROM users";

        $users = $this->db->qry($query, false);

        $error = $this->db->error();

        if($error[0] != '0000') {
            $res = ['status' => 'error', 'message' => $error[2], 'data' => ''];
            return $res;
        } else {
            $res = ['status' => 'success', 'message' => 'user data is got', 'data' => $users];
            return $res;
        }

    }

    public function getIndivitualUser($id) {
        $query = "SELECT * FROM users WHERE id ='".$id."'";

        $user = $this->db->qry($query, true);

        $error = $this->db->error();

        if($error[0] != '0000') {
            $res = ['status' => 'error', 'message' => $error[2], 'data' => ''];
            return $res;
        } else {
            $res = ['status' => 'success', 'message' => 'user got', 'data' => $user];
            return $res;
        }
    }


    public function modifyUser($id, $data) {
        $rules = [
            'name' => 'required|alpha_num|min:3|max:25',
            'email' => 'required|email',
            'type' => 'required|numeric'
        ];
        $messages = [
            'required' => ':attribute required.',
            'email' => ':attribute must be valid.',
            'min' => ':attribute must be minimum 3 charactes.',
            'max' => ':attribute must be maximum 25 charactes.',
            'alpha_num' => ':attribute must be alphabet and numberic only.'
        ];
        $validator = new Validator;
        
        $v = $validator->make($data, $rules);
        
        $v->setAliases([
            'email' => 'Email',
            'password' => 'Password',
            'type' => 'Type'
        ]);
        
        $v->setMessages($messages);

        $v->validate();
        if ($v->fails()) {
            $errors = $v->errors();
            $err = $errors->all();
            $re = ["status"=> "error", "message" => $err[0]];
            return $re;
        } else {
            $query = "UPDATE users SET name = '".$data['name']."', email = '".$data['email']."', type = '".$data['type']."' WHERE id = '".$id."'";

            $this->db->qry($query, false);

            $error = $this->db->error();

            if($error[0] != '0000') {
                $res = ['status' => 'error', 'message' => $error[2]];
                return $res;
            } else {
                $res = ['status' => 'success', 'message' => 'User updated.'];
                return $res;
            }
        }
    }

    public function checkUserId($id) {
        $query = "SELECT EXISTS (SELECT id FROM users WHERE id = '".$id."') AS status";

        $user_status = $this->db->qry($query, true);

        $error = $this->db->error();

        if($error[0] != '0000') {
            $res = ['status' => 'error', 'message' => $error[2]];
            return $res;
        } else {
            $res = ['status' => 'success', 'message' => 'Valid User.', 'data' => $user_status['status']];
            return $res;
        }
    }

    public function removeUserAvatar($id) {
        $query = "UPDATE users SET avatar = '', avatar_extension = '' WHERE id = '".$id."'";

        $result = $this->db->qry($query, true);

        $error = $this->db->error();

        if($error[0] != '0000') {
            $res = ['status' => 'error', 'message' => $error[2]];
            return $res;
        } else {
            $res = ['status' => 'success', 'message' => 'Image Removed.'];
            return $res;
        }
    }
}


?>