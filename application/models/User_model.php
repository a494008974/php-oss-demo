<?php
/**
 * Created by PhpStorm.
 * User: master
 * Date: 2019-05-15
 * Time: 14:06
 */
class User_model extends CI_Model {

    public $Id;
    public $username;
    public $password;
    public $email;

    public function get_last_ten_entries()
    {
        $query = $this->db->query('SELECT * FROM user');
        return $query->result();
    }

    public function insert_entry()
    {
        $this->title    = $_POST['title']; // please read the below note
        $this->content  = $_POST['content'];
        $this->date = time();

        $this->db->insert('user', $this);
    }

    public function update_entry()
    {
        $this->title    = $_POST['title'];
        $this->content  = $_POST['content'];
        $this->date = time();

        $this->db->update('user', $this, array('id' => $_POST['id']));
    }

    public function select_entry($username){
        $query = $this->db->select('*')
            ->where('username',$username)
            ->get('user');
        return $query->result();
    }
}