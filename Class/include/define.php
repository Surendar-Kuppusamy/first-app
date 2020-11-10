<?php

define('APP_NAME', 'App');
define('HOST', $_SERVER['HTTP_HOST']);
define('HOST_URI', strtolower($_SERVER['REQUEST_SCHEME']).'://'.HOST);
define('REQ_SCHEME', strtolower($_SERVER['REQUEST_SCHEME']));
define('IP', $_SERVER['REMOTE_ADDR']);
define("TBL_USERS", "users");


?>