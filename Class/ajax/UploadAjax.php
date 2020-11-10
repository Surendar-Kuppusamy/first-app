<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use DB\DB;
use App\Users;
use App\MyResponse;

$param = $_GET['params'];
$id = $_GET['id'];
$response = new MyResponse();

//$token = \Session::getValue('Session', 'token');
/* if($cli_token == $token ){
    $res = ['status' => 'error', 'message' => 'Unauthorized request.', 'token' => $param, 'cli_token' => $files];
    $response->setData($res);
    $response->send();
    exit();
} */

/*$headers=getallheaders();

 if($headers['Content-Type'] != 'text/plain;charset=UTF-8') {
    $res = ['status' => 'error', 'message' => 'Invalid request.'];
    $response->setData($res);
    $response->send();
    exit();
} */


if($param=='user_avatar') {
    $res = ['status' => 'error', 'message' => 'Invalid request.'];
    $size = number_format($_FILES['file0']['size'] / 1048576, 2) . ' MB';
    if($size > 1 ) {
        $res = ['status' => 'error', 'message' => 'File size must be equal or less than 2MB.'];
        $response->setData($res);
        $response->send();
        exit();
    }
    $allowed = array('jpeg', 'png', 'jpg');
    $ext = strtolower(pathinfo($_FILES['file0']['name'], PATHINFO_EXTENSION));
    if(!in_array($ext, $allowed)) {
        error_log($ext);
        $res = ['status' => 'error', 'message' => 'File type not allowed.'];
        $response->setData($res);
        $response->send();
        exit();
    }
    $dir='../junk/images/';
    $file=$dir.basename($_FILES['file0']['name']);
    if(move_uploaded_file($_FILES['file0']['tmp_name'], $file)) {
        $image_base_url=base64_encode(file_get_contents($file));
        $image = 'data:image/'.$ext.';base64,'.$image_base_url;
        $query = "UPDATE users SET avatar = '".$image_base_url."', avatar_extension='".$ext."' WHERE id='".$id."'";
        $db=DB::getInstance();
        $con=$db->getConnection();
        $con->qry($query, false);
        $error=$con->error();
        if($error[0] != '0000') {
            $res = ['status' => 'error', 'message' => $error[2], 'query' => $con->last()];
            $response->setData($res);
            $response->send();
            exit();
        } else {
            $res = ['status' => 'success', 'message' => 'Profile image updated.', 'image' => $image];
            $response->setData($res);
            $response->send();
            exit();
        }
    } else {
        $res = ['status' => 'error', 'message' => 'File not upload. Something went wrong'];
        $response->setData($res);
        $response->send();
        exit();
    }
}

?>