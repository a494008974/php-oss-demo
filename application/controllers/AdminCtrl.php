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
	public function index()
	{
        $this->twig->view('welcome_message.php');
	}

	public function admin()
	{
	    /*
        $content = array(
                    'active' => 1,
                    'theme' => 'primary',
                    'menu' => array(
                        array('icon' => 'ios-pie-outline', 'navtitle'=>'内容管理','id'=>1,'submenu' => array(
                            array(
                                'name' => '1-1','icon' => 'ios-paper','subtitle'=>'内容管理','submenu'=>array(
                                array('name' => '1-1-1','subtitle'=>'内容管理'),
                                array('name' => '1-1-2','subtitle'=>'评论管理'),
                                array('name' => '1-1-3','subtitle'=>'举报管理'),
                                )
                            ),
                            array(
                                'name' => '1-2','icon' => 'ios-paper','subtitle'=>'内容管理','submenu'=>array(
                                array('name' => '1-2-1','subtitle'=>'内容管理'),
                                array('name' => '1-2-2','subtitle'=>'评论管理'),
                                array('name' => '1-2-3','subtitle'=>'举报管理'),
                                )
                            ),
                            array(
                                'name' => '1-3','icon' => 'ios-paper','subtitle'=>'内容管理','submenu'=>array(
                                array('name' => '1-3-1','subtitle'=>'内容管理'),
                                array('name' => '1-3-2','subtitle'=>'评论管理'),
                                array('name' => '1-3-3','subtitle'=>'举报管理'),
                                )
                            )
                        )),
                        array('icon' => 'ios-paper', 'navtitle'=>'用户管理','id'=>2,'submenu' => array(
                            array(
                                'name' => '2-1','icon' => 'ios-paper','subtitle'=>'用户管理','submenu'=>array(
                                array('name' => '2-1-1','subtitle'=>'用户管理'),
                                array('name' => '2-1-2','subtitle'=>'评论管理'),
                                array('name' => '2-1-3','subtitle'=>'用户管理'),
                                )
                            ),
                            array(
                                'name' => '2-2','icon' => 'ios-paper','subtitle'=>'用户管理','submenu'=>array(
                                array('name' => '2-2-1','subtitle'=>'用户管理'),
                                array('name' => '2-2-2','subtitle'=>'评论管理'),
                                array('name' => '2-2-3','subtitle'=>'用户管理'),
                                )
                            ),array(
                                'name' => '2-3','icon' => 'ios-paper','subtitle'=>'用户管理','submenu'=>array(
                                    array('name' => '2-3-1','subtitle'=>'用户管理'),
                                    array('name' => '2-3-2','subtitle'=>'评论管理'),
                                    array('name' => '2-3-3','subtitle'=>'用户管理'),
                                )
                            ),array(
                                'name' => '2-4','icon' => 'ios-paper','subtitle'=>'用户管理','submenu'=>array(
                                    array('name' => '2-4-1','subtitle'=>'用户管理'),
                                    array('name' => '2-4-2','subtitle'=>'评论管理'),
                                    array('name' => '2-4-3','subtitle'=>'用户管理'),
                                    array('name' => '2-4-4','subtitle'=>'用户管理'),
                                    array('name' => '2-4-5','subtitle'=>'评论管理'),
                                    array('name' => '2-4-6','subtitle'=>'用户管理'),
                                    array('name' => '2-4-7','subtitle'=>'用户管理'),
                                    array('name' => '2-4-8','subtitle'=>'评论管理'),
                                    array('name' => '2-4-9','subtitle'=>'用户管理'),
                                )
                            ),array(
                                'name' => '2-5','icon' => 'ios-paper','subtitle'=>'用户管理','submenu'=>array(
                                    array('name' => '2-5-1','subtitle'=>'用户管理'),
                                    array('name' => '2-5-2','subtitle'=>'评论管理'),
                                    array('name' => '2-5-3','subtitle'=>'用户管理'),
                                )
                            )
                        )),
                        array('icon' => 'ios-copy', 'navtitle'=>'统计分析','id'=>3,'submenu' => array(
                            array(
                                'name' => '3-1','icon' => 'ios-paper','subtitle'=>'统计分析','submenu'=>array(
                                array('name' => '3-1-1','subtitle'=>'统计分析'),
                                array('name' => '3-1-2','subtitle'=>'评论管理'),
                                array('name' => '3-1-3','subtitle'=>'统计分析'),
                                )
                            )
                        )),
                        array('icon' => 'ios-folder', 'navtitle'=>'综合设置','id'=>4,'submenu' => array(
                            array(
                                'name' => '4-1','icon' => 'ios-paper','subtitle'=>'综合设置','submenu'=>array(
                                array('name' => '4-1-1','subtitle'=>'内容管理'),
                                array('name' => '4-1-2','subtitle'=>'综合设置'),
                                array('name' => '4-1-3','subtitle'=>'举报管理'),
                                )
                            )
                        )),
                        array('icon' => 'ios-paper', 'navtitle'=>'用户管理','id'=>5,'submenu' => array(
                            array(
                                'name' => '5-1','icon' => 'ios-paper','subtitle'=>'用户管理','submenu'=>array(
                                array('name' => '5-1-1','subtitle'=>'内容管理'),
                                array('name' => '5-1-2','subtitle'=>'评论用户'),
                                array('name' => '5-1-3','subtitle'=>'举报管理'),
                                )
                            )
                        )),
                        array('icon' => 'ios-world-outline', 'navtitle'=>'统计分析','id'=>6,'submenu' => array(
                            array(
                                'name' => '6-1','icon' => 'ios-paper','subtitle'=>'分析管理','submenu'=>array(
                                array('name' => '6-1-1','subtitle'=>'内容管理'),
                                array('name' => '6-1-2','subtitle'=>'评分析分析理'),
                                array('name' => '6-1-3','subtitle'=>'举报管理'),
                                )
                            )
                        )),
                        array('icon' => 'ios-paper', 'navtitle'=>'综合设置','id'=>7,'submenu' => array(
                            array(
                                'name' => '7-1','icon' => 'ios-paper','subtitle'=>'内容管理设置','submenu'=>array(
                                array('name' => '7-1-1','subtitle'=>'内容管理设置'),
                                array('name' => '7-1-2','subtitle'=>'评论管理设置'),
                                array('name' => '7-1-3','subtitle'=>'举报管理'),
                                )
                            )
                        ))
                    )
                );
        $data = array(
            'title' => '后台管理系统',
            'content' => json_encode($content)
        );
        */
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
                        array('name' => 5,'title' => '内容管理','url' =>'http://www.baidu.com'),
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
        $data['title'] = "后台管理系统";
        $data['content'] = json_encode($content);

        $this->twig->view('admin.html',$data);
	}
}
