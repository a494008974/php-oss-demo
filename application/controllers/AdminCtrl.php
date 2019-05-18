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
            if($_POST['username']){
                $author = $this->user->select($_POST);
                if($author){
                    if(md5($_POST['password']) == $author[0]->password){
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
            'active' => $arr[0]['Id'],
            'theme' => 'primary',
            'data' => $arr,
        );

        $basedata = array(
          'label' => '首页',
          'base_url' => $baseurl,
        );

        $data['title'] = "后台管理系统";
        $data['content'] = json_encode($content);
        $data['basedata'] = json_encode($basedata);;
        $this->twig->view('admin.html',$data);

	}

	public function sysmenu(){
        $result = $this->manager->selectAll();
        $data['title'] = "系统菜单";
        $data['content'] = json_encode($result);
        $this->twig->view('sysmenu.html',$data);
    }

    public function insertMenu(){
	    if($_POST){
            $ins = $this->manager->insert($_POST);
            $data = $this->manager->get($ins);
            $result = array('status'=>200,'msg'=>$data[0]);
            echo json_encode($result);
        }else{
            $result = array('status'=>201,'msg'=>"插入失败！");
            echo json_encode($result);
        }
    }
}
