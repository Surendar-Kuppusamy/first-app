<?php

class Session extends SessionManager {

    public function __construct() {

    }

    public static function createSession($data, $id, $token) {
        parent::createSegment('Session');
        parent::set('user_id', $id);
        parent::set('user_mail', $data['email']);
        parent::set('token', $token);
    }

    public static function getValue($seg, $key) {
        parent::createSegment($seg);
        return parent::get($key);
    }

    public static function destroy_session() {
        parent::destroySession();
    }

    public static function setCookies() {
        $cookie_name = "KRSA";
        $cookie_value = "KRSA Cookie";
        setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
        if(!isset($_COOKIE[$cookie_name])) {
            $res = ['status' => 'error', 'message' => 'Cookie set failed.'];
            return $res;
        } else {
            $res = ['status' => 'success', 'message' => 'Cookie set successfully.'];
            return $res;
        }
    }

}


?>