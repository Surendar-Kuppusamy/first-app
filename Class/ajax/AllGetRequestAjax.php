<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Firebase\JWT\JWT;
use Dotenv\Dotenv;
use DB\DB;
use App\MyResponse;
use App\SignupLogin;
use App\Users;
use App\Products;
use App\Session;
use App\Demo;

$request = Request::createFromGlobals();
$param = $request->query->get('param');
$sess_id = '';

$response = new MyResponse();


$dotenv = \Dotenv\Dotenv::createImmutable('../conf');
$dotenv->load();
$key = $_ENV['KEY'];

$token = $request->headers->get('X-CSRF-TOKEN');

if($token) {
    $decoded = JWT::decode($token, $key, array('HS256'));
    $decoded_array = (array) $decoded;
}

$user_id = \Session::getValue('Session', 'user_id');

if($request->headers->get('X-Requested-With') != 'XMLHttpRequest' && ($decoded_array['jti'] != $user_id && $param != 'setCookie')) {
    $res = ['status' => 'error', 'message' => 'Invalid Request'];
    $response->setData($res);
    $response->send();
    exit();
}


if($param == 'setCookie') {
    $ress = \Session::setCookies();
    $response->setData($ress);
    $response->send();
    exit();
}

if($param == 'checkRequest') {
    if(isset($user_id)) {
        $res = ['status' => 'success', 'message' => 'valid Session', 'value' => true];
    } else {
        $res = ['status' => 'error', 'message' => 'InValid Session', 'value' => false];
    }
    $response->setData($res);
    $response->send();
    exit();
}


if($param == 'logout') {
    \Session::destroy_session();
    $res = ['status' => 'success', 'message' => 'Logout success'];
    $response->setData($res);
    $response->send();
    exit();
}

if($param == 'getUsers') {
    $us = Users::getInstance();
    $res = $us->getusers();
    $response->setData($res);
    $response->send();
    exit();
}

if($param == 'checkUserId') {
    $user_id = $request->query->get('user_id');
    $us = Users::getInstance();
    $res = $us->checkUserId($user_id);
    $response->setData($res);
    $response->send();
    exit();
}

if($param == 'getProductType') {
    $pt = Products::getInstance();
    $res = $pt->getProductTypes();
    $response->setData($res);
    $response->send();
    exit();
}

if($param == 'getProducts') {
    $pt = Products::getInstance();
    $res = $pt->getProducts();
    $response->setData($res);
    $response->send();
    exit();
}

if($param == 'getProductForEdit') {
    $product_id = $request->query->get('product_id');
    $pt = Products::getInstance();
    $res = $pt->getProductForEdit($product_id);
    $response->setData($res);
    $response->send();
    exit();
}


if($param == 'getProductTaxes') {
    $pt = Products::getInstance();
    $res = $pt->getProductTaxes();
    $response->setData($res);
    $response->send();
    exit();
}


?>