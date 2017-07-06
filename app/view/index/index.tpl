{% extends "../layout/layout.tpl" %}

{% block content %}
<div class="news-view view v-transition">
    {% for item in list %}
    {% set index = ((page-1) * pageSize + loop.index) %}
    {% include "./item.tpl" %}
    {% endfor %}

    <div class="nav">
        {% if page > 1 %}
        <a href="/news?page={{ page - 1 }}">&lt; prev</a>
        {% endif %}
        <a href="/news?page={{ page + 1 }}">more...</a>
    </div>
</div>

<div class="container main-container">
    <div class="row awesome-category-list">
        <div class="col-lg-3 col-md-3 col-sm-3">
            <aside class="aside-left-nav">
                <div class="mobile-menu">
                    <ul>
                        <li><a href="/zh-cn/intro/" alt="指南">指南</a></li>
                        <li><a href="/api/" alt="API">API</a></li>
                        <li><a href="/zh-cn/tutorials/index.html" alt="教程">教程</a></li>
                        <li><a href="https://github.com/search?q=topic%3Aegg-plugin&amp;type=Repositories"
                               alt="插件">插件</a></li>
                        <li><a href="https://github.com/eggjs/egg/releases" alt="发布日志">发布日志</a></li>
                    </ul>
                </div>
                <dl>
                    <dt><a href="/languages">编程语言</a></dt>
                    <dd>
                        <ul><li>汇集NodeJS、Java、PHP、Python等十余种流行编程语言。</li></ul>
                    </dd>
                    <dt><a href="#">云计算</a></dt>
                    <dt>前端开发</dt>
                    <dd>
                        <ul>
                            <li><a href="/awesome-react/">React</a></li>
                            <li><a href="/awesome-vue/">Vue</a></li>
                            <li><a href="/awesome-html5/">Html5</a></li>
                        </ul>
                    </dd>
                    <dt>后端开发</dt>
                    <dd>
                        <ul><li><a href="/awesome-laravel">Laravel（PHP）</a> </li></ul>
                    </dd>
                    <dt>计算机科学</dt>
                    <dt><a href="/awesome-bigdata">大数据</a></dt>
                    <dt><a href="/awesome-devenv">部署开发环境</a></dt>
                    <dd>
                        <ul><li>工欲善其事必先利其器</li></ul>
                    </dd>
                    <dt>硬件</dt>
                    <dt>CMS</dt>
                    <dt>安全</dt>
                    <dt>数据库</dt>
                    <dt>大杂烩</dt>
                    <!--<dd>-->
                        <!--<ul>-->
                            <!--<li><a href="/zh-cn/intro/index.html">Egg.js 是什么?</a></li>-->
                            <!--<li><a href="/zh-cn/intro/egg-and-koa.html">Egg.js 和 Koa</a></li>-->
                            <!--<li><a href="/zh-cn/intro/quickstart.html">快速入门</a></li>-->
                        <!--</ul>-->
                    <!--</dd>-->
                    <!--<dt>基础功能</dt>-->
                    <!--<dd>-->
                        <!--<ul>-->
                            <!--<li><a href="/zh-cn/basics/structure.html">目录结构</a></li>-->
                            <!--<li><a href="/zh-cn/basics/objects.html">内置对象</a></li>-->
                            <!--<li><a href="/zh-cn/basics/env.html">运行环境</a></li>-->
                            <!--<li><a href="/zh-cn/basics/config.html">配置</a></li>-->
                            <!--<li><a href="/zh-cn/basics/middleware.html">中间件</a></li>-->
                            <!--<li><a href="/zh-cn/basics/router.html">Router</a></li>-->
                            <!--<li><a href="/zh-cn/basics/controller.html">Controller</a></li>-->
                            <!--<li><a href="/zh-cn/basics/service.html">Service</a></li>-->
                            <!--<li><a href="/zh-cn/basics/schedule.html">定时任务</a></li>-->
                            <!--<li><a href="/zh-cn/basics/extend.html">框架扩展</a></li>-->
                            <!--<li><a href="/zh-cn/basics/app-start.html">启动自定义</a></li>-->
                        <!--</ul>-->
                    <!--</dd>-->
                    <!--<dt>核心功能</dt>-->
                    <!--<dd>-->
                        <!--<ul>-->
                            <!--<li><a href="/zh-cn/core/development.html">本地开发</a></li>-->
                            <!--<li><a href="/zh-cn/core/unittest.html">单元测试</a></li>-->
                            <!--<li><a href="/zh-cn/core/deployment.html">应用部署</a></li>-->
                            <!--<li><a href="/zh-cn/core/logger.html">日志</a></li>-->
                            <!--<li><a href="/zh-cn/core/httpclient.html">HttpClient</a></li>-->
                            <!--<li><a href="/zh-cn/core/cookie-and-session.html">Cookie and Session</a></li>-->
                            <!--<li><a href="/zh-cn/core/cluster-and-ipc.html">多进程模型和进程间通讯</a></li>-->
                            <!--<li><a href="/zh-cn/core/view.html">模板渲染</a></li>-->
                            <!--<li><a href="/zh-cn/core/error-handling.html">异常处理</a></li>-->
                            <!--<li><a href="/zh-cn/core/security.html">安全</a></li>-->
                            <!--<li><a href="/zh-cn/core/i18n.html">国际化</a></li>-->
                        <!--</ul>-->
                    <!--</dd>-->
                    <!--<dt>教程</dt>-->
                    <!--<dd>-->
                        <!--<ul>-->
                            <!--<li><a href="/zh-cn/tutorials/progressive.html">渐进式开发</a></li>-->
                            <!--<li><a href="/zh-cn/tutorials/mysql.html">MySQL</a></li>-->
                            <!--<li><a href="/zh-cn/tutorials/restful.html">RESTful API</a></li>-->
                            <!--<li><a href="/zh-cn/tutorials/async-function.html">Async Function</a></li>-->
                        <!--</ul>-->
                    <!--</dd>-->
                    <!--<dt>进阶</dt>-->
                    <!--<dd>-->
                        <!--<ul>-->
                            <!--<li><a href="/zh-cn/advanced/loader.html">Loader</a></li>-->
                            <!--<li><a href="/zh-cn/advanced/plugin.html">插件开发</a></li>-->
                            <!--<li><a href="/zh-cn/advanced/framework.html">框架开发</a></li>-->
                            <!--<li><a href="/zh-cn/advanced/cluster-client.html">多进程研发模式增强</a></li>-->
                            <!--<li><a href="/zh-cn/advanced/view-plugin.html">模板插件开发规范</a></li>-->
                        <!--</ul>-->
                    <!--</dd>-->
                    <!--<dt>社区</dt>-->
                    <!--<dd>-->
                        <!--<ul>-->
                            <!--<li><a href="/zh-cn/plugins/">内置插件列表</a></li>-->
                            <!--<li><a href="/zh-cn/contributing.html">如何贡献</a></li>-->
                            <!--<li><a href="/zh-cn/resource.html">资源</a></li>-->
                            <!--<li><a href="/zh-cn/faq.html">常见问题</a></li>-->
                        <!--</ul>-->
                    <!--</dd>-->
                </dl>
            </aside>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9">
            {% for category in categories %}
            <div class="col-lg-3 col-md-3 col-sm-3">
                <a href="{{ category.url }}">
                    <div class="box">
                        <img src="{{ category.img }}" >
                        <div class="caption">
                            <h3>{{ category.title }}</h3>
                            <p>{{ category.introduce }}</p>
                        </div>
                    </div>
                </a>
            </div>
            {% endfor %}
        </div>
    </div>

</div>
{% endblock %}