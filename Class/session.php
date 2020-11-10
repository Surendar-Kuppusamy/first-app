<?php

use \Aura\Session\SessionFactory;

class SessionManager {

    public static $SESSION=null;
    public static $SEGMENT=null;

    public static function init() {
        session_start();
        $session_factory = new \Aura\Session\SessionFactory;
        self::$SESSION = $session_factory->newInstance($_COOKIE);
    }

    public static function createSegment($segmentClass) {
        self::$SEGMENT = self::$SESSION->getSegment('App\\'.$segmentClass);
    }

    public static function clearSessionValue() {
        self::$SESSION->clear();
    }

    public static function destroySession() {
        self::$SESSION->destroy();
    }

    public static function set($key, $value) {
        self::$SEGMENT->set($key, $value);
    }

    public static function get($key) {
        return self::$SEGMENT->get($key);
    }

    public static function getSession() {
        return self::$SESSION;
    }

    public static function getSegment() {
        return self::$SEGMENT;
    }
}


SessionManager::init();



?>