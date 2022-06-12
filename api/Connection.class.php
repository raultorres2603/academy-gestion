<?php

/**
 * @author Raúl Torres Alarcón <raultorres2603@gmail.com>
 */
class Connection
{
    // In constructor, we will pass all parameters to make a new object.
    function __construct($hostname, $username, $password, $database, $port)
    {
        $this->hostname = $hostname;
        $this->username = $username;
        $this->password = $password;
        $this->database = $database;
        $this->port = $port;
    }

    /* GETTERS & SETTERS */

    function getHost()
    {
        return $this->hostname;
    }

    function getUserName()
    {
        return $this->username;
    }

    function getPassword()
    {
        return $this->password;
    }

    function getDatabase()
    {
        return $this->database;
    }

    function getPort()
    {
        return $this->port;
    }

    /* FIN --> GETTERS & SETTERS */
    private function connect()
    {
        if ($connect = new mysqli($this->getHost(), $this->getUserName(), $this->getPassword(), $this->getDatabase(), $this->getPort())) {
            return ($connect);
        } else {
            return $connect->connect_errno;
        }
    }

    // Function to call to make a query, automatically closes connection to db after query
    function query($query)
    {
        if ($con = $this->connect()) {
            if ($res = $con->query($query)) {
                $con->close();
                return $res;
            } else {
                return $con->errno;
            }
        } else {
            return $con->connect_errno;
        }
    }
}
