<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">

    <link rel="stylesheet" href="/public/css/common.css" />
    <link rel="icon" href="/public/favicon.png" type="image/x-icon">
    <title>{% block title %}DemoStash{% endblock %}</title>
</head>
<body>
<div id="wrapper">
    <div id="header">
        <div id="app-nav">
            <el-row gutter="20">
                <el-col :span="4"><div class="grid-content"></div></el-col>
                <el-col :span="16">
                    <div class="grid-content">
                        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

                            <el-menu-item index="1">处理中心</el-menu-item>
                            <el-submenu index="2">
                                <template slot="title">我的工作台</template>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项2</el-menu-item>
                                <el-menu-item index="2-3">选项3</el-menu-item>
                            </el-submenu>
                            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                        </el-menu>
                    </div>
                </el-col>
                <el-col :span="4"><div class="grid-content"></div></el-col>
            </el-row>

            <div class="logo">
                Awesome
            </div>

        </div>
        <!--<div class="inner">-->
            <!--<div class="logo">-->
                <!--<ul>-->
                    <!--<li>ToolHub <sup>Beta</sup></li>-->
                <!--</ul>-->
            <!--</div>-->
            <!--<div class="menu">-->
                <!--<ul>-->
                    <!--<li><a href="https://remotew.com">网址导航</a></li>-->
                    <!--<li><a href="https://remotex.ooclab.org" target="_blank">工作机会</a></li>-->
                    <!--<li><a href="https://jinshuju.net/f/Zasbh3" target="_blank">提交网址</a></li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</div>-->
    </div>

    <div id="example">
        <my-component></my-component>
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
<!-- 先引入 Vue -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
    new Vue({
        el: '#app-nav',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    });
</script>
</body>
</html>
