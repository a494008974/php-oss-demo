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

	public function login(){
        $this->twig->view('welcome_message.php');
    }

    public function forget(){

    }

    public function register(){
        $this->twig->view('welcome_message.php');
    }

    public function home(){
        $this->twig->view('welcome_message.php');
    }

	public function admin()
	{
	    $baseurl = base_url();
        $content = array(
            'active' => 1,
            'theme' => 'primary',
            'data' => array(
                array('name' => 1,'type' => 'ios-paper', 'title' => '内容管理','submenu' => array(
                    array(
                        'name' => 1,'type' => 'ios-paper', 'title' => '我的收藏', 'submenu' =>array(
                        array('name' => 1,'title' => 'JavaScript教程','url' =>'https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000'),
                        array('name' => 2,'title' => 'IVIEW','url' =>'https://www.iviewui.com/'),
                        array('name' => 3,'title' => 'CODEKK','url' =>'http://p.codekk.com/'),
                        array('name' => 4,'title' => 'CSS3手册','url' =>'http://www.phpstudy.net/css3/'),
                        array('name' => 5,'title' => '内容管理','url' =>$baseurl.'index.php/'.'AdminCtrl/admin'),
                        array('name' => 6,'title' => '内容管理','url' =>'http://www.baidu.com')
                    )
                    ),
                    array(
                        'name' => 2,'type' => 'ios-paper', 'title' => '内容管理', 'submenu' =>array(
                        array('name' => 1,'title' => '内容管理','url' =>'http://www.baidu.com'),
                        array('name' => 2,'title' => '内容管理','url' =>'http://www.baidu.com'),
                        array('name' => 3,'title' => '内容管理','url' =>'http://www.baidu.com'),
                        array('name' => 4,'title' => '内容管理','url' =>'http://www.baidu.com'),
                        array('name' => 5,'title' => '内容管理','url' =>'http://www.baidu.com'),
                        array('name' => 6,'title' => '内容管理','url' =>'http://www.baidu.com')
                    )
                    ),
                    array(
                        'name' => 3,'type' => 'ios-paper', 'title' => '内容管理', 'submenu' =>array(
                        array('name' => 1,'title' => '内容管理','url' =>'http://www.baidu.com'),
                        array('name' => 2,'title' => '内容管理','url' =>'http://www.baidu.com'),
                        array('name' => 3,'title' => '内容管理','url' =>'http://www.baidu.com'),
                        array('name' => 4,'title' => '内容管理','url' =>'http://www.baidu.com'),
                        array('name' => 5,'title' => '内容管理','url' =>'http://www.baidu.com'),
                        array('name' => 6,'title' => '内容管理','url' =>'http://www.baidu.com')
                    )
                    ),
                )),
                array('name' => 2,'type' => 'ios-people', 'title' => '用户管理','submenu' => array(
                    array(
                        'name' => 1,'type' => 'ios-paper', 'title' => '内容bbbb管理', 'submenu' =>array(
                        array('name' => 1,'title' => '内容管理')
                    )
                    ),
                )),
                array('name' => 3,'type' => 'stats-bars', 'title' => '统计分析','submenu' => array(
                    array(
                        'name' => 1,'type' => 'ios-paper', 'title' => '内容管理', 'submenu' =>array(
                        array('name' => 1,'title' => '内容管理')
                    )
                    ),
                )),
                array('name' => 4,'type' => 'ios-paper', 'title' => '综合设置','submenu' => array(
                    array(
                        'name' => 1,'type' => 'ios-paper', 'title' => '内容管理', 'submenu' =>array(
                        array('name' => 1,'title' => '内容管理')
                    )
                    ),
                )),
                array('name' => 5,'type' => 'ios-paper-outline', 'title' => '统计分析','submenu' => array(
                    array(
                        'name' => 1,'type' => 'ios-paper', 'title' => '内容管理', 'submenu' =>array(
                        array('name' => 1,'title' => '内容管理')
                    )
                    ),
                )),
                array('name' => 6,'type' => 'ios-clock', 'title' => '内容管理','submenu' => array(
                    array(
                        'name' => 1,'type' => 'ios-paper', 'title' => '内容管理', 'submenu' =>array(
                        array('name' => 1,'title' => '内容管理')
                    )
                    ),
                )),
                array('name' => 7,'type' => 'ios-paper', 'title' => '综合设置','submenu' => array(
                    array(
                        'name' => 1,'type' => 'ios-paper', 'title' => '内容管理', 'submenu' =>array(
                        array('name' => 1,'title' => '内容管理')
                    )
                    ),
                )),
                array('name' => 8,'type' => 'ios-people', 'title' => '用户管理','submenu' => array(
                    array(
                        'name' => 1,'type' => 'ios-paper', 'title' => '内容管理', 'submenu' =>array(
                        array('name' => 1,'title' => '内容管理')
                    )
                    ),
                ))
            )
        );
        $basedata = array(
          'base_url' => $baseurl,
          'base_index' => 'index.php/AdminCtrl/home'
        );
        $data['title'] = "后台管理系统";
        $data['content'] = json_encode($content);
        $data['basedata'] = json_encode($basedata);;

        $this->twig->view('admin.html',$data);
	}
}
