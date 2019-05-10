<style>
    body{
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        margin: 0;
        padding: 0;
        background-color: #d4d4d4;
    }

    #content{
        background-color: rgba(255, 255, 255, 0.95);
        width: 440px;
        height: 320px;
        border: 1px solid #b9b9b9;
        border-radius: 6px;
        display: block;
        position: absolute;
        left:50%;
        top:40%;
        margin-left:-220px;
        margin-top:-160px;
        text-align: center;
        box-shadow: 0 0 5px 0px #acacac;
    }

    .login-header{
        width: 100%;
        height: 48px;
        margin-bottom: 10px;
        border-bottom: 1px solid #dcdcdc;
    }

    .login-header h1 {
        font-size: 26px;
        height: 50px;
        font-weight: bold;
        margin-left: auto;
        margin-right: auto;
        display: block;
        text-align: center;
    }

    .login-header img{
        width: 120px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    .login-input-box{
        margin-top: 12px;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        display: inline-block;
        text-align: center;
    }

    .login-input-box input{
        width: 85%;
        height: 45px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        padding-left: 45px;
    }

    .login-input-box input:hover{
        border: 1px solid #1f5ea4;
    }

    .login-input-box input:after{
        border: 1px solid #2d8cf0;
    }

    .login-input-box .icon{
        width: 28px;
        margin: 10px;
        display: inline-block;
        position: absolute;
        text-align: center;
        box-shadow: 0 0 0px black;
    }

    .login-input-box .icon img{
        width: 28px;
    }

    .remember-box{
        width: 80%;
        height: auto;
        margin-top: 12px;
        margin-bottom: 5px;
        font-size: 12px;
        color: #8c8a8a;
        text-align: left;
        display: inline-block;
        padding-left: 5px;
    }

    .login-button-box{
        margin-top: 12px;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        display: inline-block;
    }

    .login-button-box button{
        background-color: #2d8cf0;
        color: #ffffff;
        font-size: 16px;
        width: 100%;
        height: 40px;
        border: 1px solid #2d8cf0;
        border-radius: 4px;
    }

    .login-button-box button:hover{
        background-color: #1f5ea4;
    }

    .login-button-box button:active{
        background-color: #2d8cf0;
    }

    .logon-box a{
        margin: 30px;
        color: #4a4744;
        font-size: 13px;
        text-decoration: none;
    }

    .logon-box a:hover{
        color: #1f5ea4;
    }

    .logon-box a:active{
        color: #2d8cf0;
    }

    :focus {
        outline: -webkit-focus-ring-color auto 5px;
        outline-color: -webkit-focus-ring-color;
        outline-style: auto;
        outline-width: 2px;
        border-radius: 4px;
    }
</style>
<template>
    <div id="content">
        <div class="login-header">
            <h1>{{login.language.login_title}}</h1>
        </div>
        <form>
            <div class="login-input-box">
                <span class="icon">
                    <img src="../../images/username.png">
                </span>
                <input type="text" :placeholder=login.language.login_placeholder_username>
            </div>
            <div class="login-input-box">
                <span class="icon">
                    <img src="../../images/password.png">
                </span>
                <input type="password" :placeholder=login.language.login_placeholder_password>
            </div>
        </form>
        <div class="remember-box">
            <label>
                <input type="checkbox">&nbsp;{{login.language.login_remember}}
            </label>
        </div>
        <div class="login-button-box">
            <button v-on:click=loginAction>{{login.language.login_login}}</button>
        </div>


    </div>
</template>

<script>
    export default {
        props:{
            login:null
        },
        data: function() {
            return {

            }
        },
        methods:{
            loginAction: function (event) {

                location.href='http://localhost:8888/php-oss-demo/public/index.php/AdminCtrl/admin';
            }
        }
    }
</script>
