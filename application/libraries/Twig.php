<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/19/019
 * Time: 20:32
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Twig{
    public $twig;
    public function __construct()
    {
        $CI =& get_instance();
        $loader = new Twig_Loader_Filesystem($CI->config->item('template_dir'));
        $this->twig = new Twig_Environment($loader, array(
            'cache' => $CI->config->item('cache_dir'),
            'debug' => $CI->config->item('debug'),
            'auto_reload' => $CI->config->item('auto_reload')
        ));
    }

    public function view($view, $vars = array(), $return = FALSE){
        if($this->twig){
            //定义base_url,提供辅助函数给模板使用
            $vars['base_url'] = base_url();
            echo $this->twig->render($view, $vars);
        }
    }
}