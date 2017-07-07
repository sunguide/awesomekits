<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

    <!--<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />-->
    <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/public/css/main.css" />

    <link rel="icon" href="/public/favicon.png" type="image/x-icon">
    <title>{% block title %}Awesome Kits | A curated awesome kit list {% endblock %}</title>
</head>
<body>
<div id="wrapper">
    <div id="header" class="affix">
        <div class="inner">
            <div class="logo">
                <a href="/" alt="Awesome Kits"><img src="/public/logo.png"></a>
            </div>
            <div class="menu">
                <ul>
                    <li><span>{{ __('slogan') }}</span></li>
                    <li><button class="btn btn-default btn-xs change-language">{{ __('language') }}</button></li>
                </ul>
            </div>

        </div>
    </div>

    {% block content %}{% endblock %}
    <div id="footer">
        <div class="inner">
            <ul class="link">
                <li><a href="/about">{{ __('foot.about') }}</a></li>
                <li><a target="_blank" href="https://wj.qq.com/s/1453579/4d86">{{ __('foot.issues') }}</a></li>
                <li><a href="/update">{{ __('foot.update') }}</a></li>
            </ul>
            <div class="copyright">
                <p>Copyright © 2017 {{ __('app_name') }} v1.0.0</p>
            </div>
        </div>
    </div>

</div>
<!--javascript-->
<script src="//cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="/public/js/index.js"></script>
</body>
</html>
