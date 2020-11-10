<?php

namespace App;

use Medoo\Medoo;
use App\Test;
use DB\DB;

class Demo extends \Singleton {

    protected $con;

    public function __construct() {
        $db = DB::getInstance();
        $this->con = $db->getConnection();
        $query_1 = "SELECT count(id), id FROM users WHERE email = 'demo@gmail.com' AND password = '1234567'";
        $resq_1 = $this->con->qry($query_1, true);
        $query = "SELECT EXISTS (SELECT * FROM users WHERE 'test@gmail.com' AND password = '12345678')";
        $resq = $this->con->qry($query, true);
        echo "<pre>";
        print_r($resq);
        print_r($resq_1);
        echo $resq_1['count(id)'];
        
        /* $dotenv = \Dotenv\Dotenv::createImmutable('../conf');
        $dotenv->load();
        $s3_bucket = $_ENV['KEY'];
        echo "Test";
        echo $s3_bucket;

        $cookie_name = "user";
        $cookie_value = "John Doe";
        setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");

        if(!isset($_COOKIE[$cookie_name])) {
            echo "Cookie named '" . $cookie_name . "' is not set!";
        } else {
            echo "Cookie '" . $cookie_name . "' is set!<br>";
            echo "Value is: " . $_COOKIE[$cookie_name];
        } */

    }

    public function getTimezones() {
        $timezones = $this->con->qry('select * from timezone', false);
        return $timezones;
    }

    public function session() {
    }

    public function show() {
        print_r($_SESSION);
    }

    public function destroy() {
        session_destroy();
    }
    
}

$demo = new Demo();
$demo->session();
$demo->show();

?>