<?php

namespace App;

class Common extends \Singleton {

    public function __construct() {

    }

    public function generateHash($value) {
        $alpha="0123654789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
        $time=microtime();
        $merge = $value.$alpha.$time;
        $shuffle = str_shuffle($merge);
        $hash = md5($shuffle);
        return $hash;
    }

    public function pagination() {
        $total_record = 50;
        $limit = 10;
        $current_page = 5;
        $total_pages=ceil($total_record/$limit);

        $range = array(($current_page - 2) > 1 ? ($current_page - 2) : 1, ($current_page + 2) < $total_pages ? $current_page + 2 : $total_pages );

        $first = (($current_page - 2) > 1) ? 1 . (($current_page >= 5) ? '...' : ' ' ) : null;
        $last = (($current_page + 2) < $total_pages) ? ((($current_page + 3) < $total_pages) ? '...' : ' ' ) . $total_pages : null;
        $next = ($current_page + 1) <= $total_pages ? ($current_page + 1) : null;
        $previous = ($current_page - 1) >= 1 ? ($current_page - 1) : null;
        $e_first = (($current_page - 1) >= 1) ? 1 : null;
        $e_last = (($current_page + 1) <= $total_pages) ? $total_pages : null;

        for($i = $range[0]; $i <= $range[1]; $i++) {
        $pages[] = $i;
        }
        echo '<br> Current Page => ' . $current_page;
        echo '<br> Total Page => ' . $total_pages.'<br>';
        echo 'First => '. $first.'<br>';
        echo 'Last => '. $last.'<br>';
        echo 'Next => '. $next.'<br>';
        echo 'Previous => '. $previous.'<br>';
        echo 'E_first => '. $e_first.'<br>';
        echo 'E_last => '. $e_last.'<br>';
        $pages_range = implode(", ", $pages);
        echo 'Range => '.$pages_range;
    }

}

?>