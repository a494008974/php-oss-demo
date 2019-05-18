<?php
/**
 * Created by PhpStorm.
 * User: master
 * Date: 2019-05-18
 * Time: 13:59
 */
class Manager_model extends CI_Model {

    public $table = 'manager';

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

    public function get($id){
        $query = $this->db->select('*')->where('Id',$id)->order_by('Id', 'ASC')->get($this->table);
        return $query->result();
    }

    public function select($entry){
        $query = $this->db->select('*')->where('parent',$entry['parent'])->order_by('Id', 'ASC')->get($this->table);
        return $query->result();
    }

    public function selectAll(){
        $query = $this->db->select('*')->order_by('parent', 'ASC')->get($this->table);
        return $query->result();
    }
}