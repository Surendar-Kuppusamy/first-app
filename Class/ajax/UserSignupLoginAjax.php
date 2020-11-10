<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use DB\DB;
use App\MyResponse;
use App\SignupLogin;

$request = Request::createFromGlobals();
$data = json_decode($request->getContent(), true);

    if($data['command'] == 'login') {
        $sl = SignupLogin::getInstance();
        $res = $sl->loginAction($data['form_value'], $data['token']);
        
        $response = new MyResponse();
        $response->setData($res);
        $response->send();

    }

    if($data['command'] == 'loginWithGoogle') {
        $sl = SignupLogin::getInstance();
        $res = $sl->loginWithGoogle($data['google_token']);
        
        $response = new MyResponse();
        $response->setData($res);
        $response->send();
    }

    





?>