<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link rel="stylesheet" href="/public/css/news.css" />
    <link rel="icon" href="/public/favicon.png" type="image/x-icon">
    <title>{% block title %}DemoStash{% endblock %}</title>
</head>
<body>
<div id="wrapper">
    <div id="header">
        <div class="inner">
            <div class="logo">
                <ul>
                    <li>ToolHub <sup>Beta</sup></li>
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
                <li><a href="https://tesreo.github.io/remotew/about.html" target="_blank">关于本站</a></li>
                <li><a href="https://github.com/tesreo/remotew/issues" target="_blank">留言反馈</a></li>
                <li><a href="https://tesreo.github.io/remotew/" target="_blank">更新计划</a></li>
            </ul>
            <div class="copyright">
                <p>Copyright © 2017 Version 1.0</p>
            </div>
        </div>
    </div>
</div>
</body>
</html>
