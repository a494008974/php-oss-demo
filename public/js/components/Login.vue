<style>
    body{
        background: url("../../images/bg_login.jpg") no-repeat fixed;
        /* set background tensile */
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        margin: 0;
        padding: 0;
    }

    #content{
        background-color: rgba(255, 255, 255, 0.95);
        width: 440px;
        height: 320px;
        border: 1px solid #000000;
        border-radius: 6px;
        display: block;
        position: absolute;
        left:50%;
        top:45%;
        margin-left:-220px;
        margin-top:-160px;
        text-align: center;
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
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: inline-block;
        text-align: center;
    }

    .login-input-box input{
        width: 80%;
        height: 45px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        padding-left: 45px;
    }

    .login-input-box input:hover{
        border: 1px solid #ff7d0a;
    }

    .login-input-box input:after{
        border: 1px solid #ff7d0a;
    }

    .login-input-box .icon{
        width: 28px;
        margin: 12px;
        display: inline-block;
        position: absolute;
        text-align: center;
        border-right: 1px solid #dcdcdc;
        box-shadow: 0 0 0px black;
    }

    .remember-box{
        width: 80%;
        height: auto;
        margin-top: 12px;
        font-size: 12px;
        color: #8c8a8a;
        text-align: left;
        display: inline-block;
    }

    .login-button-box{
        margin-top: 12px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: inline-block;
    }

    .login-button-box button{
        background-color: #ff7d0a;
        color: #ffffff;
        font-size: 16px;
        width: 80%;
        height: 40px;
        border: 1px solid #ff7d0a;
        border-radius: 4px;
    }

    .login-button-box button:hover{
        background-color: #ee7204;
    }

    .login-button-box button:active{
        background-color: #ee7204;
    }

    .logon-box{
        margin-top: 10px;
        text-align: center;
    }

    .logon-box a{
        margin: 30px;
        color: #4a4744;
        font-size: 13px;
        text-decoration: none;
    }

    .logon-box a:hover{
        color: #ff7d0a;
    }

    .logon-box a:active{
        color: #ee7204;
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
                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                </span>
                <input type="text" :placeholder=login.language.login_placeholder_username>
            </div>
            <div class="login-input-box">
                <span class="icon">
                    <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
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
        <div class="logon-box">
            <a href="">{{login.language.login_forget}}</a>
            <a href="">{{login.language.login_register}}</a>
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

                location.href='admin';
            }
        }
    }
</script>
