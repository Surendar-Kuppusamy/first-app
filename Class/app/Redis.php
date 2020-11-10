<?php

namespace App;

use Credis_Client;

class Redis extends \Singleton {

    protected $redis_obj;

    public function __construct() {

        $this->redis_obj = new Credis_Client('localhost');

    }

    public function addKeyword($hashKey, $name, $data) {
        $result = $this->redis_obj->HSET($hashKey,array($name => $data));
        $message = '';
        if($result === 1) {
            $message = 'Keyword added successfully.';
        } else {
            $message = 'Keyword add process is failed.';
        }

        return $message;
    }

    public function addModule($hashKey, $name, $data) {
        $result = $this->redis_obj->HSET($hashKey,array($name => $data));
        $message = '';
        if($result === 1) {
            $message = 'Module added successfully.';
        } else {
            $message = 'Module add process is failed.';
        }
        return $message;
    }

    public function getKeyword($hashKey, $name) {
        $result = $this->redis_obj->HGET($hashKey, $name);
        $message = '';
        if(!empty($result)) {
            $message = 'Keyword value is get.';
        } else {
            $message = 'Keyword value is not get.';
        }

        return $result;
    }

    public function checkKeywordExists($hashKey, $name) {
        $result = $this->redis_obj->HEXISTS($hashKey,$name);
        $message = '';
        if($result === 1) {
            $message = 'Keyword available.';
        } else {
            $message = 'Keyword not available.';
        }
        return $message;
    }

    public function getModules($iterator, $hashKey, $like, $count) {
        $result = $this->redis_obj->HSCAN($iterator, $hashKey, $like, $count);
        $message = '';
        if(!empty($result)) {
            $message = 'Modules is get.';
        } else {
            $message = 'Keyword is not get.';
        }
        return $result;
    }

    public function addRecentSearch($name, $data) {
        $result = $this->redis_obj->SADD($name, $data);
        $message = '';
        if(!empty($result)) {
            $message = 'Recent search is set successfully.';
        } else {
            $message = 'Recent search is not set.';
        }
        return $result;
    }

    public function getRecentSearch($name) {
        $result = $this->redis_obj->SMEMBERS($name);
        $message = '';
        if(!empty($result)) {
            $message = 'Recent search is get successfully.';
        } else {
            $message = 'Recent search is not get.';
        }
        return $result;
    }
}

$redis = new Redis();

/* $arrayData = ['module' => 'add:agent', 'value' => 'agents'];
$sendData = serialize($arrayData);
$getResult = $redis->addKeyword('keywords', 'add', $sendData);
echo $getResult;
$getResult_1 = $redis->getKeyword('keywords', 'add');
print_r(unserialize($getResult_1)); 
$arrayData_1 = 'agents';
$getResult_2 = $redis->addModule('modules', 'add:agent', $arrayData_1);
echo $getResult_2;
$getResult_3 = $redis->getModules(0, 'modules', 'add*', 10);
print_r($getResult_3);
$getResult_4 = $redis->addRecentSearch('malta:recent', 'add:agent');
echo $getResult_4;
$getResult_5 = $redis->getRecentSearch('malta:recent');
print_r($getResult_5);*/
?>