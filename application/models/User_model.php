<?php
/**
 * Created by PhpStorm.
 * User: master
 * Date: 2019-05-15
 * Time: 14:06
 */
class User_model extends CI_Model {

    public $table = 'user';

    public function insert($entry)
    {
        $this->db->insert($this->table, $entry);
        return $this->db->insert_id($this->table);
    }

    public function delete($entry)
    {
        $this->db->delete($this->table,array('Id' => $entry['Id']));
    }

    public function update($entry)
    {
        $this->db->update($this->table, $entry, array('Id' => $entry['Id']));
    }

    public function select($entry){
        $query = $this->db->select('*')->where('username',$entry['username'])->get('user');
        return $query->result();
    }
}