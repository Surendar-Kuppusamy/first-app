<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use DB\DB;
use App\Users;
use App\MyResponse;

$request = Request::createFromGlobals();
$data = json_decode($request->getContent(), true);
$response = new MyResponse();

if($data['command'] == 'edituser') {
    $user_obj = Users::getInstance();
    $res = $user_obj->getIndivitualUser($data['id']);
    
    $response->setData($res);
    $response->send();
}

if($data['command'] == 'modifyUser') {
    $user_obj = Users::getInstance();
    $res = $user_obj->modifyUser($data['id'], $data['data']);

    $response->setData($res);
    $response->send();
}
if($data['command'] == 'removeUserAvatar') {
    $user_obj = Users::getInstance();
    $res = $user_obj->removeUserAvatar($data['id']);

    $response->setData($res);
    $response->send();
}


?>