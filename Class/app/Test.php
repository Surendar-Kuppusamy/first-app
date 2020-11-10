<?php

namespace App;

use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Formatter\LineFormatter;
use Keygen\Keygen;
use App\Demo;
use DB\DB;

class Test extends \Singleton {

    public function __construct() {
        $h = $this->my_hash('test', 30);
        echo strtoupper($h);
    }

    public function my_hash($string, $length = 8) {

        // Convert to a string which may contain only characters [0-9a-p]
        $hash = base_convert(md5($string), 16, 26);
    
        // Get part of the string
        $hash = substr($hash, -$length);
    
        // In rare cases it will be too short, add zeroes
        $hash = str_pad($hash, $length, '0', STR_PAD_LEFT);
    
        // Convert character set from [0-9a-p] to [a-z]
        $hash = strtr($hash, '0123456789', 'qrstuvwxyz');
    
        return $hash;
    }
    
}

//echo Keygen::alphanum(30)->generate(); // length => 16

$te = new Test();
$te = new Demo();



?>
