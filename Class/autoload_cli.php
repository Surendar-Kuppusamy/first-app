<?php

$SRC = dirname(__FILE__).'';    

    


    require_once('vendor/autoload.php');


    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__.'/conf');

    $dotenv->load();

    $s3_bucket = getenv('KEY');

    echo $s3_bucket;

    require_once('../include/define.php');

    require_once($SRC.'/session.php');

    //ini_set('memcached.sess_locking', 'Off');

    //ini_set('session.cookie_httponly', true);



?>