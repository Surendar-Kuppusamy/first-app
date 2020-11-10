<?php

namespace DB;

use Medoo\Medoo;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Formatter\LineFormatter;


class DB {

    protected $logger;
    protected $logPath;
    protected static $con;
    protected static $databaseType;
    protected static $databaseName;
    protected static $server;
    protected static $userName;
    protected static $password;
    protected static $instance;

    public function __construct() {

        self::$databaseType='mysql';
        self::$databaseName='auto';
        self::$server='localhost';
        self::$userName='root';
        self::$password='kuppusamy';

        $this->connect();
        
    }

    public function connect() {
        $this->logPath='../junk/db_log/'.date('Y-m-d').'/db_log.log';
        $this->logger = new Logger('Test');
        $formatter = new LineFormatter(null, null, false, true);
        $pushHandler = new StreamHandler($this->logPath, Logger::DEBUG);
        $pushHandler->setFormatter($formatter);
        $this->logger->pushHandler($pushHandler);

        try {
            self::$con = new Medoo([
                // required
                'database_type' => self::$databaseType,
                'database_name' => self::$databaseName,
                'server' => self::$server,
                'username' => self::$userName,
                'password' => self::$password,
             
                // [optional]
                'charset' => 'utf8',
                'logger' => $this->logger

            ]);
        } catch (\PDOException $e) {
            $this->logger->error($e->getMessage());
        }
        //return self::$con;
    }

    static public function getInstance() {
        if(!@self::$instance) {
            self::$instance = new DB();
        }
        return self::$instance;
    }

    public function getConnection() {
        return self::$con;
    }
}

?>
