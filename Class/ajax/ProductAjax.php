<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use DB\DB;
use App\Users;
use App\Products;
use App\MyResponse;

$request = Request::createFromGlobals();
$data = json_decode($request->getContent(), true);
$response = new MyResponse();

if($data['command'] == 'addProductType') {
    $pr_obj = Products::getInstance();
    $res = $pr_obj->addProductType($data);
    
    $response->setData($res);
    $response->send();
}

if($data['command'] == 'addProduct') {
    $pr_obj = Products::getInstance();
    $res = $pr_obj->addProduct($data['productFormValue'], $data['id']);
    
    $response->setData($res);
    $response->send();
}

if($data['command'] == 'addProductTax') {
    $pr_obj = Products::getInstance();
    $res = $pr_obj->addProductTax($data);
    
    $response->setData($res);
    $response->send();
}

if($data['command'] == 'updateProduct') {
    $pr_obj = Products::getInstance();
    $res = $pr_obj->updateProduct($data['productFormValue'], $data['user_id'], $data['product_id']);
    
    $response->setData($res);
    $response->send();
}


?>