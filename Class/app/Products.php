<?php

namespace App;

use DB\DB;
use Rakit\Validation\Validator;
use Carbon\Carbon;
Use App\Common;



class Products extends \Singleton {

    protected $db;

    public function __construct() {
        $db_obj = DB::getInstance();
        $this->db = $db_obj->getConnection();
    }


    public function getProductTypes() {
        $query = "SELECT id, type FROM product_types";
        $all_types=$this->db->qry($query, false);
        $error=$this->db->error();
        if($error[0]!='0000') {
            $re = ["status"=> "error", "message" => $error[2]];
        } else {
            $re = ["status"=> "success", "message" => "Product Types getted.", "data" => $all_types];
            return $re;
        }
    }

    public function getProductTaxes() {
        $query = "SELECT id, name FROM taxes";
        $all_types=$this->db->qry($query, false);
        $error=$this->db->error();
        if($error[0]!='0000') {
            $re = ["status"=> "error", "message" => $error[2]];
        } else {
            $re = ["status"=> "success", "message" => "Product Types getted.", "data" => $all_types];
            return $re;
        }
    }

    

    public function addProductType($data) {
        $rules = [
            'type' => 'required|min:3|max:25'
        ];
        $messages = [
            'required' => ':attribute required.',
            'min' => ':attribute must be minimum 3 charactes.',
            'max' => ':attribute must be maximum 25 charactes.',
            'alpha_num' => ':attribute must be alphabet and numberic only.'
        ];
        $validator = new Validator;
        
        $v = $validator->make($data, $rules);
        
        $v->setAliases([
            'type' => 'Product Type'
        ]);
        
        $v->setMessages($messages);

        $v->validate();
        if ($v->fails()) {
            $errors = $v->errors();
            $err = $errors->all();
            $re = ["status"=> "error", "message" => $err[0]];
            return $re;
        } else {
            $pattern = "/^[-a-zA-Z0-9\s.]+$/i";
            if(!preg_match($pattern, $data['type'])) {
                $re = ["status"=> "error", "message" => "Type must be alphanumeric."];
                return $re;
            }
            $com = Common::getInstance();
            $hash = $com->generateHash($data['type']);
            $created_on=Carbon::now('UTC');
            $query = "INSERT INTO product_types (hash, type, created_on, created_by) VALUES ('".$hash."', '".$data['type']."', '".$created_on."', '".$data['id']."')";
            $this->db->qry($query, true);
            $id= $this->db->id();
            $error = $this->db->error();
            if($error[0] != '0000') {
                $re = ["status"=> "error", "message" => $error[2]];
                return $re;
            } else {
                $re = ["status"=> "success", "message" => "Product Type inserted successfully.", "id" => $id];
                return $re;
            }
        }
    }


    public function addProduct($form, $user_id) {
        $implodeForTax=[];
        $com = Common::getInstance();
        if(!isset($form['name']) || $form['name']=='') {
            $re = ["status"=> "error", "message" => "Name Required."];
            return $re;
        } else if(strlen($form['name']) < 3){
            $re = ["status"=> "error", "message" => "Name must have minimum 3 characters."];
            return $re;
        } else if(strlen($form['name']) > 25) {
            $re = ["status"=> "error", "message" => "Name must be maximum 25 characters."];
            return $re;
        } else if(!isset($form['type']) || $form['type'] == '') {
            $re = ["status"=> "error", "message" => "Type Required."];
            return $re;
        } else if(!isset($form['discountPercentage']) || $form['discountPercentage'] == '') {
            $re = ["status"=> "error", "message" => "Discount Required."];
            return $re;
        } else if(!is_numeric($form['discountPercentage'])) {
            $re = ["status"=> "error", "message" => "Discount value must be numeric."];
            return $re;
        } else if($form['discountPercentage'] < 0) {
            $re = ["status"=> "error", "message" => "Discount must be greater than zero."];
            return $re;
        } else if($form['discountPercentage'] > 100){
            $re = ["status"=> "error", "message" => "Discount must be less than hundred."];
            return $re;
        } else if(!isset($form["price"]) || $form["price"]=='') {
            $re = ["status"=> "error", "message" => "Price Required."];
            return $re;
        } else if(!is_numeric($form['price'])) {
            $re = ["status"=> "error", "message" => "Price value must be numeric."];
            return $re;
        } else if($form["price"] <= 0) {
            $re = ["status"=> "error", "message" => "Price must be greater than zero."];
            return $re;
        } else if(!isset($form["buyType"]) || $form["buyType"]=='') {
            $re = ["status"=> "error", "message" => "Buy type Required."];
            return $re;
        } else if(!isset($form["buyTypeValue"]) || $form["buyTypeValue"]=='') {
            $re = ["status"=> "error", "message" => "Buy type value Required."];
            return $re;
        } else if(!is_numeric($form['buyTypeValue'])) {
            $re = ["status"=> "error", "message" => "Buy type value value must be numeric."];
            return $re;
        } else if($form["buyTypeValue"] <= 0) {
            $re = ["status"=> "error", "message" => "Buy type value must be greater than zero."];
            return $re;
        }else if(!isset($form["buyTypeUnit"]) || $form["buyTypeUnit"]=='') {
            $re = ["status"=> "error", "message" => "Buy type unit Required."];
            return $re;
        }
        if(count($form["taxes"]) > 3) {
            $re = ["status"=> "error", "message" => "More than three tax is not allowed."];
            return $re;
        }
        $tmp_tax=[];
        foreach($form["taxes"] as $tax){
            unset($tax['hash']);
            $tax['hash']=$com->generateHash($tax['tax']);
            if(!isset($tax['tax']) || $tax['tax']=='') {
                $re = ["status"=> "error", "message" => "Tax name Required.", "value" => $tax['tax']];
                return $re;
                break;
            }
            if(!isset($tax['value']) || $tax['value']=='') {
                $re = ["status"=> "error", "message" => "Tax value Required."];
                return $re;
                break;
            }
            if(!is_numeric($tax['value'])) {
                $re = ["status"=> "error", "message" => "Tax value must be numeric."];
                return $re;
                break;
            }
            if($tax['value'] <= 0) {
                $re = ["status"=> "error", "message" => "Tax value must be greater than zero."];
                return $re;    
                break;
            }
            if(in_array($tax['tax'], $tmp_tax)) {
                $re = ["status"=> "error", "message" => "Same tax name."];
                return $re;
            }
            $tmp_tax[]=$tax['tax'];
            $implodeForTax[] = implode("', '", $tax);
        }
        /* $implodeForTaxQuery="('".implode("'), ('1', '", $implodeForTax).')';
        $re = ["status"=> "error", "message" => "all over.", "test" => $implodeForTaxQuery];
        return $re; */
        $pattern = "/^[-a-zA-Z0-9\s.]+$/i";
        if(!preg_match($pattern, $form['name'])) {
            $re = ["status"=> "error", "message" => "Product name must be alphanumeric."];
            return $re;
        }
        $query_1="SELECT EXISTS (SELECT * FROM products WHERE name = '".$form['name']."') AS pstatus";
        $qres=$this->db->qry($query_1, true);
        if($qres['pstatus']) {
            $re = ["status"=> "error", "message" => "Product name already exists."];
            return $re;
        }
        
        $hash = $com->generateHash($form['name']);
        if($form['discountPercentage'] > 0) {
            $discountPrice=ceil($form['price'] - (($form['price'] / 100) * $form['discountPercentage']));
        } else {
            $discountPrice=ceil($form['price']);
        }
        $created_on=Carbon::now('UTC');
        /* $user_id=\Session::getValue('Session', 'user_id'); */
        $this->db->pdo->beginTransaction();
        $query = "INSERT INTO products (hash, name, type, detail, discount_percentage, actual_price, discount_price, buy_type, buy_type_value, buy_type_unit, created_on, created_by) VALUES('".$hash."', '".trim($form['name'])."', '".trim($form['type'])."', '".trim($form['detail'])."', '".trim($form['discountPercentage'])."', '".trim($form['price'])."', '".$discountPrice."', '".trim($form['buyType'])."', '".trim($form['buyTypeValue'])."', '".trim($form['buyTypeUnit'])."', '".$created_on."', '".$user_id."')";
        $this->db->qry($query, true);
        $id= $this->db->id();
        $error = $this->db->error();
        if($error[0] != '0000') {
            $re = ["status"=> "error", "message" => $error[2], "query" => $this->db->last()];
            $this->db->pdo->rollBack();
            return $re;
        } else {
            error_log('Else Block');
        }
        $hash_1 = $com->generateHash('taxes');
        $query_1="INSERT INTO product_taxes (product_id, tax_id, product_tax_percentage, hash) VALUES ('".$id."', '".implode("'), ('".$id."', '", $implodeForTax)."')";
        $this->db->qry($query_1, true);
        $error_1 = $this->db->error();
        if($error_1[0] != '0000') {
            $re = ["status"=> "error", "message" => $error_1[2], "query" => $this->db->last()];
            return $re;
        } else {
            $this->db->pdo->commit();
            $re = ["status"=> "success", "message" => "Product added."];
            return $re;
        }
    }


    public function addProductTax($data) {
        $rules = [
            'tax' => 'required|min:3|max:25'
        ];
        $messages = [
            'required' => ':attribute required.',
            'min' => ':attribute must be minimum 3 charactes.',
            'max' => ':attribute must be maximum 25 charactes.',
            'alpha_num' => ':attribute must be alphabet and numberic only.'
        ];
        $validator = new Validator;
        
        $v = $validator->make($data, $rules);
        
        $v->setAliases([
            'type' => 'Product Type'
        ]);
        
        $v->setMessages($messages);

        $v->validate();
        if ($v->fails()) {
            $errors = $v->errors();
            $err = $errors->all();
            $re = ["status"=> "error", "message" => $err[0]];
            return $re;
        } else {
            $pattern = "/^[-a-zA-Z0-9\s.]+$/i";
            if(!preg_match($pattern, $data['tax'])) {
                $re = ["status"=> "error", "message" => "Tax must be alphanumeric."];
                return $re;
            }
            $com = Common::getInstance();
            $hash = $com->generateHash($data['tax']);
            $created_on=Carbon::now('UTC');
            $query = "INSERT INTO taxes (hash, name, created_on, created_by) VALUES ('".$hash."', '".$data['tax']."', '".$created_on."', '".$data['id']."')";
            $this->db->qry($query, true);
            $error = $this->db->error();
            if($error[0] != '0000') {
                $re = ["status"=> "error", "message" => $error[2]];
                return $re;
            } else {
                $re = ["status"=> "success", "message" => "Product Type inserted successfully."];
                return $re;
            }
        }
    }


    public function getProducts($keywords) {
        $where='';
        if($keywords!==0) {
            $where = "WHERE p.name LIKE '%".$keywords."%'";    
        }
        $query= "SELECT p.id, p.name, t.type, p.detail, p.image, p.discount_percentage, p.actual_price, p.discount_price, p.buy_type, p.buy_type_value, p.buy_type_unit FROM products p LEFT JOIN product_types t ON p.type = t.id ".$where." LIMIT 0, 10";
        $products = $this->db->qry($query, false);
        $error = $this->db->error();
        if($error[0] != '0000') {
            $res = ['status' => 'error', 'message' => $error[2]];
            return $res;
        } else {
            foreach($products as $key => $value) {
                $query_1="SELECT pt.tax_id AS tax_id, pt.product_tax_percentage AS tax_value, t.name AS tax_name FROM product_taxes pt LEFT JOIN taxes t ON pt.tax_id = t.id WHERE pt.product_id = '".$value['id']."'";
                $taxes = $this->db->qry($query_1, false);
                $error_1 = $this->db->error();
                if($error_1[0] != '0000') {
                    $res = ['status' => 'error', 'message' => $error_1[2]];
                    return $res;
                    break;
                } else {
                    $products[$key]['taxes']=$taxes;
                }
            }
        }
        $res = ['status' => 'success', 'message' => 'Products list taken successfully.', 'products' => $products];
        return $res;
    }


    public function getProductForEdit($pid) {
        $query= "SELECT p.id, p.name, p.type AS type_id, t.type, p.detail, p.image, p.discount_percentage, p.actual_price, p.discount_price, p.buy_type, p.buy_type_value, p.buy_type_unit FROM products p LEFT JOIN product_types t ON p.type = t.id WHERE p.id = '".$pid."'";
        $product = $this->db->qry($query, true);
        $error = $this->db->error();
        if($error[0] != '0000') {
            $res = ['status' => 'error', 'message' => $error[2]];
            return $res;
        } else {
            $query_1="SELECT pt.hash AS tax_table_id, pt.tax_id AS tax_id, pt.product_tax_percentage AS tax_value, t.name AS tax_name FROM product_taxes pt LEFT JOIN taxes t ON pt.tax_id = t.id WHERE pt.product_id = '".$pid."'";
            $taxes = $this->db->qry($query_1, false);
            $error_1 = $this->db->error();
            if($error_1[0] != '0000') {
                $res = ['status' => 'error', 'message' => $error_1[2]];
                return $res;
            } else {
                $product['taxes']=$taxes;
            }
        }
        $res = ['status' => 'success', 'message' => 'Products list taken successfully.', 'product' => $product];
        return $res;
    }


    public function updateProduct($form, $user_id, $pid) {
        $implodeForTax=[];
        $com = Common::getInstance();
        if(!isset($form['name']) || $form['name']=='') {
            $re = ["status"=> "error", "message" => "Name Required."];
            return $re;
        } else if(strlen($form['name']) < 3){
            $re = ["status"=> "error", "message" => "Name must have minimum 3 characters."];
            return $re;
        } else if(strlen($form['name']) > 25) {
            $re = ["status"=> "error", "message" => "Name must be maximum 25 characters."];
            return $re;
        } else if(!isset($form['type']) || $form['type'] == '') {
            $re = ["status"=> "error", "message" => "Type Required."];
            return $re;
        } else if(!isset($form['discountPercentage']) || $form['discountPercentage'] == '') {
            $re = ["status"=> "error", "message" => "Discount Required."];
            return $re;
        } else if(!is_numeric($form['discountPercentage'])) {
            $re = ["status"=> "error", "message" => "Discount value must be numeric."];
            return $re;
        } else if($form['discountPercentage'] < 0) {
            $re = ["status"=> "error", "message" => "Discount must be greater than zero."];
            return $re;
        } else if($form['discountPercentage'] > 100){
            $re = ["status"=> "error", "message" => "Discount must be less than hundred."];
            return $re;
        } else if(!isset($form["price"]) || $form["price"]=='') {
            $re = ["status"=> "error", "message" => "Price Required."];
            return $re;
        } else if(!is_numeric($form['price'])) {
            $re = ["status"=> "error", "message" => "Price value must be numeric."];
            return $re;
        } else if($form["price"] <= 0) {
            $re = ["status"=> "error", "message" => "Price must be greater than zero."];
            return $re;
        } else if(!isset($form["buyType"]) || $form["buyType"]=='') {
            $re = ["status"=> "error", "message" => "Buy type Required."];
            return $re;
        } else if(!isset($form["buyTypeValue"]) || $form["buyTypeValue"]=='') {
            $re = ["status"=> "error", "message" => "Buy type value Required."];
            return $re;
        } else if(!is_numeric($form['buyTypeValue'])) {
            $re = ["status"=> "error", "message" => "Buy type value value must be numeric."];
            return $re;
        } else if($form["buyTypeValue"] <= 0) {
            $re = ["status"=> "error", "message" => "Buy type value must be greater than zero."];
            return $re;
        }else if(!isset($form["buyTypeUnit"]) || $form["buyTypeUnit"]=='') {
            $re = ["status"=> "error", "message" => "Buy type unit Required."];
            return $re;
        }
        if(count($form["taxes"]) > 3) {
            $re = ["status"=> "error", "message" => "More than three tax is not allowed."];
            return $re;
        }
        $tmp_tax=[];
        foreach($form["taxes"] as $tax){
            if($tax['hash'] == '') {
                $tax['hash']=$com->generateHash($tax['tax']);
            }
            if(!isset($tax['tax']) || $tax['tax']=='') {
                $re = ["status"=> "error", "message" => "Tax name Required.", "value" => $tax['tax']];
                return $re;
                break;
            }
            if(!isset($tax['value']) || $tax['value']=='') {
                $re = ["status"=> "error", "message" => "Tax value Required."];
                return $re;
                break;
            }
            if(!is_numeric($tax['value'])) {
                $re = ["status"=> "error", "message" => "Tax value must be numeric."];
                return $re;
                break;
            }
            if($tax['value'] <= 0) {
                $re = ["status"=> "error", "message" => "Tax value must be greater than zero."];
                return $re;    
                break;
            }
            if(in_array($tax['tax'], $tmp_tax)) {
                $re = ["status"=> "error", "message" => "Same tax name."];
                return $re;
            }
            $tmp_tax[]=$tax['tax'];
            $implodeForTax[] = implode("', '", $tax);
        }
        /* $implodeForTaxQuery="('".implode("'), ('1', '", $implodeForTax).')';
        $re = ["status"=> "error", "message" => "all over.", "test" => $implodeForTaxQuery];
        return $re; */
        $pattern = "/^[-a-zA-Z0-9\s.]+$/i";
        if(!preg_match($pattern, $form['name'])) {
            $re = ["status"=> "error", "message" => "Product name must be alphanumeric."];
            return $re;
        }
        $query_1="SELECT EXISTS (SELECT * FROM products WHERE name = '".$form['name']."' AND id != ".$pid.") AS pstatus";
        $qres=$this->db->qry($query_1, true);
        if($qres['pstatus']) {
            $re = ["status"=> "error", "message" => "Product name already exists."];
            return $re;
        }
        
        $hash = $com->generateHash($form['name']);
        if($form['discountPercentage'] > 0) {
            $discountPrice=ceil($form['price'] - (($form['price'] / 100) * $form['discountPercentage']));
        } else {
            $discountPrice=ceil($form['price']);
        }
        $modified_on=Carbon::now('UTC');
        /* $user_id=\Session::getValue('Session', 'user_id'); */
        $this->db->pdo->beginTransaction();
        $query = "UPDATE products SET hash = '".$hash."', name = '".trim($form['name'])."', type = '".trim($form['type'])."', detail = '".trim($form['detail'])."', discount_percentage = '".trim($form['discountPercentage'])."', actual_price = '".trim($form['price'])."', discount_price = '".$discountPrice."', buy_type = '".trim($form['buyType'])."', buy_type_value = '".trim($form['buyTypeValue'])."', buy_type_unit = '".trim($form['buyTypeUnit'])."', modified_on = '".$modified_on."', modified_by = '".$user_id."' WHERE id = '".$pid."'";
        $this->db->qry($query, true);
        $id= $this->db->id();
        $error = $this->db->error();
        if($error[0] != '0000') {
            $re = ["status"=> "error", "message" => $error[2], "query" => $this->db->last()];
            $this->db->pdo->rollBack();
            return $re;
        } else {
            error_log('Else Block');
        }
        $hash_1 = $com->generateHash('taxes');
        $query_1="INSERT INTO product_taxes (product_id, tax_id, product_tax_percentage, hash) VALUES (".$pid.", '".implode("'), ('".$pid."', '", $implodeForTax)."') ON DUPLICATE KEY UPDATE tax_id = VALUES(tax_id), product_tax_percentage = VALUES(product_tax_percentage)";
        $this->db->qry($query_1, true);
        $error_1 = $this->db->error();
        if($error_1[0] != '0000') {
            $re = ["status"=> "error", "message" => $error_1[2], "query" => $this->db->last()];
            return $re;
        } else {
            $this->db->pdo->commit();
            $re = ["status"=> "success", "message" => "Product added."];
            return $re;
        }
    }


    public function removeTax($hash, $product_id) {
        $query="DELETE FROM product_taxes WHERE hash = '".$hash."' AND product_id = $product_id";
        $this->db->qry($query, true);
        $error = $this->db->error();
        if($error[0] != '0000') {
            $re = ["status"=> "error", "message" => $error[2], "query" => $this->db->last()];
            return $re;
        } else {
            $re = ["status"=> "success", "message" => "Tax Removed."];
            return $re;
        }
    }

    public function removeProdutImage($pid) {
        $re = ["status"=> "error", "message" => "Something went wrong"];
        $query="UPDATE products SET image = '' WHERE id =".$pid."";
        $this->db->qry($query, true);
        $error = $this->db->error();
        if($error[0] != '0000') {
            $re = ['status'=>'error', 'message' => $error[2], 'query' => $this->db->last()];
            return $re;
        } else {
            $re = ['status'=>'success', 'message' => 'Image Removed.'];
            return $re;
        }
    }
    

}


?>