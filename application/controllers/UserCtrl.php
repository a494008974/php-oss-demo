<?php
/**
 * Created by PhpStorm.
 * User: master
 * Date: 2019-05-29
 * Time: 11:28
 */

defined('BASEPATH') OR exit('No direct script access allowed');

class UserCtrl extends CI_Controller {

    //User Menu
    public function menu(){
        $result = $this->manager->selectAll();
        $data['title'] = "系统菜单";
        $data['content'] = json_encode($result);
        $this->twig->view('menucontent.html',$data);
    }

    public function insertMenu(){
        if($_POST){
            if($_POST['Id'] != ''){
                $upd = $this->manager->update($_POST);
                $data = $this->manager->get($upd);
                $result = array('status'=>200,'msg'=>$data[0]);
                echo json_encode($result);
            }else{
                $ins = $this->manager->insert($_POST);
                $data = $this->manager->get($ins);
                $result = array('status'=>200,'msg'=>$data[0]);
                echo json_encode($result);
            }
        }else{
            $result = array('status'=>201,'msg'=>"操作失败！");
            echo json_encode($result);
        }
    }

    public function deleteMenu(){
        if($_POST){
            $this->manager->delete($_POST);
            $result = array('status'=>201,'msg'=>"操作失败！");
            echo json_encode($result);
        }else{
            $result = array('status'=>201,'msg'=>"操作失败！");
            echo json_encode($result);
        }
    }

    public function updateMenu(){
        if($_POST){
            $this->manager->delete($_POST);
            $result = array('status'=>201,'msg'=>"操作失败！");
            echo json_encode($result);
        }else{
            $result = array('status'=>201,'msg'=>"操作失败！");
            echo json_encode($result);
        }
    }

}