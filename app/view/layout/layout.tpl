<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

    <!--<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />-->
    <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/public/css/main.css" />

    <link rel="icon" href="/public/favicon.png" type="image/x-icon">
    <title>{% block title %}DemoStash{% endblock %}</title>
</head>
<body>
<div id="wrapper">
    <div id="header" class="affix">
        <div class="inner">
            <div class="logo">
                <ul>
                    <li><a href="/">AwesomeKits <sup>Beta</sup></a></li>
                </ul>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="https://remotew.com">网址导航</a></li>
                    <li><a href="https://remotex.ooclab.org" target="_blank">工作机会</a></li>
                    <li><a href="https://jinshuju.net/f/Zasbh3" target="_blank">提交网址</a></li>
                </ul>
            </div>

        </div>
    </div>

    {% block content %}{% endblock %}
    <div id="footer">
        <div class="inner">
            <ul class="link">
                <li><a href="about">{{ __('foot.about') }}</a></li>
                <li><a href="https://github.com/tesreo/remotew/issues">{{ __('foot.issues') }}</a></li>
                <li><a href="https://tesreo.github.io/remotew/">更新计划</a></li>
            </ul>
            <div class="copyright">
                <p>Copyright © 2017 {{ __('app_name') }}</p>
            </div>
        </div>
    </div>

</div>
<!--javascript-->
<script src="//cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="public/js/index.js"></script>
</body>
</html>
