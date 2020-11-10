<?php

namespace App;

use Symfony\Component\HttpFoundation\JsonResponse;


class MyResponse extends JsonResponse {

    public function __construct() {
        parent::__construct();
    }

    public function sendData($data) {
        try {
            $data = json_encode($data, $this->encodingOptions);
        } catch (\Exception $e) {
            if ('Exception' === get_class($e) && 0 === strpos($e->getMessage(), 'Failed calling ')) {
                throw $e->getPrevious() ?: $e;
            }
            throw $e;
        }

        if (JSON_ERROR_NONE !== json_last_error()) {
            error_log('Error');
            throw new \InvalidArgumentException(json_last_error_msg());
        }
        error_log($data);
        return $this->setJson($data);
    }
}


?>