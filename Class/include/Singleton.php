<?php

abstract class Singleton {

    public static $ins;

    public function __construct() {
    }

    static public function init() {
        if(strlen(self::$ins)==0) {
            self::$ins=[];
        }
    }

    static public function getInstance() {
        $getObj=get_called_class();
        if(array_key_exists($getObj, self::$ins)) {
            return self::$ins[$getObj];
        } else {
            $tempObj = new $getObj;
            self::$ins = array_merge(self::$ins, array($getObj => $tempObj));
            $tempObj='';
            return self::$ins[$getObj];
        }
    }
}

Singleton::init();

?>