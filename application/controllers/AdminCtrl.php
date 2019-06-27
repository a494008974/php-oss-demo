<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AdminCtrl extends CI_Controller {

    public function login()
    {
        $this->lang->load('login','simplified-chinese');
        $data['title'] = $this->lang->line('login_title');
        $data['login'] = json_encode($this->lang);
        $this->twig->view('login.html',$data);
    }

	public function loginAction(){
        session_start();
	    if($_POST){
            if($_POST['username']){
                $author = $this->user->select($_POST);
                if($author){
                    if(md5($_POST['password']) == $author[0]->password){
                        $result = array('status'=>200,'msg'=>'登录成功');
                        $_SESSION['username']=$_POST['username'];
                    }else{
                        $result = array('status'=>201,'msg'=>'登录失败--密码不对！');
                        session_destroy();
                    }
                }else{
                    $result = array('status'=>201,'msg'=>'登录失败--帐号不对！');
                    session_destroy();
                }
            }else{
                $result = array('status'=>201,'msg'=>'登录失败--帐号或密码不对！');
                session_destroy();
            }
            echo json_encode($result);
        }
    }

    public function destory(){
        session_start();
        session_destroy();
        redirect('admin/login');
    }

    public function home(){
        $this->twig->view('welcome_message.php');
    }

	public function index()
	{
        session_start();
        $username = $_SESSION['username'];
        if($username){
            $baseurl = base_url().'index.php';
            $arr = array();
            $result = $this->manager->select(array('parent'=>0));
            foreach ($result as $row)
            {
                $arr1 = array();
                $result1 = $this->manager->select(array('parent'=>$row->Id));
                foreach ($result1 as $row1)
                {
                    $arr2 = array();
                    $result2 = $this->manager->select(array('parent'=>$row1->Id));
                    foreach ($result2 as $row2)
                    {
                        $arr2[] = array('Id'=>$row2->Id,'title'=>$row2->title,'parent'=>$row2->parent,'url'=>$baseurl.$row2->url,'icon'=>$row2->icon);
                    }
                    $arr1[] = array('Id'=>$row1->Id,'title'=>$row1->title,'parent'=>$row1->parent,'url'=>$row1->url,'icon'=>$row1->icon,'submenu'=>$arr2);
                }
                $arr[] = array('Id'=>$row->Id,'title'=>$row->title,'parent'=>$row->parent,'url'=>$row->url,'icon'=>$row->icon,'submenu'=>$arr1);

            }

            $content = array(
                'title' => '后台管理系统',
                'active' => $arr[0]['Id'],
                'theme' => 'primary',
                'data' => $arr,
                'username' => $username,
            );

            $basedata = array(
              'label' => '首页',
              'base_url' => "home",
            );

            $data['title'] = "后台管理系统";
            $data['content'] = json_encode($content);
            $data['basedata'] = json_encode($basedata);;
            $this->twig->view('admin.html',$data);
        }else{
            redirect('admin/login');
        }
	}

}
