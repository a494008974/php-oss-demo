<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AdminCtrl extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index($lang='ch')
	{
        $lang = $this->config->item('lang');
	    if($lang == 'ch'){
            $this->lang->load('login','simplified-chinese');
            $data['title'] = $this->lang->line('login_title');
            $data['login'] = json_encode($this->lang);
        } else {
            $this->lang->load('login','english');
            $data['title'] = $this->lang->line('login_title');
            $data['login'] = json_encode($this->lang);
        }

        $this->twig->view('login.html',$data);
	}

	public function login($lang = 'ch'){
	    if($_POST){
            $this->load->model('User_model');
            if($_POST['username']){
                $author = $this->User_model->select_entry($_POST['username']);
                if($author){
                    $password = $_POST['password'];
                    if(md5($password) == $author[0]->password){
                        $result = array('status'=>200,'msg'=>'登录成功');
                    }else{
                        $result = array('status'=>201,'msg'=>'登录失败--密码不对！');
                    }
                }else{
                    $result = array('status'=>201,'msg'=>'登录失败--帐号不对！');
                }
            }else{
                $result = array('status'=>201,'msg'=>'登录失败--帐号或密码不对！');
            }
            echo json_encode($result);
        }else{
	        $this->index($lang);
        }
    }

    public function forget(){
        dump(md5('abcd'));
    }

    public function register(){
        $this->twig->view('welcome_message.php');
    }

    public function home(){
        $this->twig->view('welcome_message.php');
    }

	public function admin()
	{
        $this->load->database();
        $arr = array();
        $query = $this->db->query("SELECT * FROM `manager` WHERE parent=0");
        foreach ($query->result() as $row)
        {
            $arr1 = array();
            $query1 = $this->db->query("SELECT * FROM `manager` WHERE parent=".$row->Id);
            foreach ($query1->result() as $row1)
            {
                $arr2 = array();
                $query2 = $this->db->query("SELECT * FROM `manager` WHERE parent=".$row1->Id);
                foreach ($query2->result() as $row2)
                {
                    $arr2[] = array('Id'=>$row2->Id,'title'=>$row2->title,'parent'=>$row2->parent,'url'=>$row2->url,'icon'=>$row2->icon);
                }
                $arr1[] = array('Id'=>$row1->Id,'title'=>$row1->title,'parent'=>$row1->parent,'url'=>$row1->url,'icon'=>$row1->icon,'submenu'=>$arr2);
            }
            $arr[] = array('Id'=>$row->Id,'title'=>$row->title,'parent'=>$row->parent,'url'=>$row->url,'icon'=>$row->icon,'submenu'=>$arr1);

        }

	    $baseurl = base_url();

        $content = array(
            'active' => $arr[0]['Id'],
            'theme' => 'primary',
            'data' => $arr,
        );

        $basedata = array(
          'label' => '首页',
          'base_url' => $baseurl,
          'base_index' => 'index.php'
        );

        $data['title'] = "后台管理系统";
        $data['content'] = json_encode($content);
        $data['basedata'] = json_encode($basedata);;
        $this->twig->view('admin.html',$data);

	}

	public function sysmenu(){
        $this->twig->view('sysmenu.html');
    }
}
