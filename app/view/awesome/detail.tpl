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

<div class="container">
    <div class="row">
        <div class="col-lg-3 col-md-3">
            <div class="bs-sidebar hidden-print affix well" role="complementary">
                <ul class="nav bs-sidenav">

                    <li class="main active"><a href="#awesome-python">Awesome Python</a></li>

                    <li><a href="#admin-panels">Admin Panels</a></li>

                    <li><a href="#algorithms-and-design-patterns">Algorithms and Design Patterns</a></li>

                    <li><a href="#anti-spam">Anti-spam</a></li>

                    <li><a href="#asset-management">Asset Management</a></li>

                    <li><a href="#audio">Audio</a></li>

                    <li><a href="#authentication">Authentication</a></li>

                    <li><a href="#build-tools">Build Tools</a></li>

                    <li><a href="#cms">CMS</a></li>

                    <li><a href="#caching">Caching</a></li>

                    <li><a href="#chatops-tools">ChatOps Tools</a></li>

                    <li><a href="#code-analysis-and-linter">Code Analysis and Linter</a></li>

                    <li><a href="#command-line-tools">Command-line Tools</a></li>

                    <li><a href="#compatibility">Compatibility</a></li>

                    <li><a href="#computer-vision">Computer Vision</a></li>

                    <li><a href="#concurrency-and-parallelism">Concurrency and Parallelism</a></li>

                    <li><a href="#configuration">Configuration</a></li>

                    <li><a href="#cryptography">Cryptography</a></li>

                    <li><a href="#data-analysis">Data Analysis</a></li>

                    <li><a href="#data-validation">Data Validation</a></li>

                    <li><a href="#data-visualization">Data Visualization</a></li>

                    <li><a href="#database">Database</a></li>

                    <li><a href="#database-drivers">Database Drivers</a></li>

                    <li><a href="#date-and-time">Date and Time</a></li>

                    <li><a href="#debugging-tools">Debugging Tools</a></li>

                    <li><a href="#deep-learning">Deep Learning</a></li>

                    <li><a href="#devops-tools">DevOps Tools</a></li>

                    <li><a href="#distribution">Distribution</a></li>

                    <li><a href="#documentation">Documentation</a></li>

                    <li><a href="#downloader">Downloader</a></li>

                    <li><a href="#e-commerce">E-commerce</a></li>

                    <li><a href="#editor-plugins-and-ides">Editor Plugins and IDEs</a></li>

                    <li><a href="#email">Email</a></li>

                    <li><a href="#environment-management">Environment Management</a></li>

                    <li><a href="#files">Files</a></li>

                    <li><a href="#foreign-function-interface">Foreign Function Interface</a></li>

                    <li><a href="#forms">Forms</a></li>

                    <li><a href="#functional-programming">Functional Programming</a></li>

                    <li><a href="#gui">GUI</a></li>

                    <li><a href="#game-development">Game Development</a></li>

                    <li><a href="#geolocation">Geolocation</a></li>

                    <li><a href="#html-manipulation">HTML Manipulation</a></li>

                    <li><a href="#http">HTTP</a></li>

                    <li><a href="#hardware">Hardware</a></li>

                    <li><a href="#imagery">Imagery</a></li>

                    <li><a href="#implementations">Implementations</a></li>

                    <li><a href="#interactive-interpreter">Interactive Interpreter</a></li>

                    <li><a href="#internationalization">Internationalization</a></li>

                    <li><a href="#job-scheduler">Job Scheduler</a></li>

                    <li><a href="#logging">Logging</a></li>

                    <li><a href="#machine-learning">Machine Learning</a></li>

                    <li><a href="#mapreduce">MapReduce</a></li>

                    <li><a href="#microsoft-windows">Microsoft Windows</a></li>

                    <li><a href="#miscellaneous">Miscellaneous</a></li>

                    <li><a href="#natural-language-processing">Natural Language Processing</a></li>

                    <li><a href="#network-virtualization">Network Virtualization</a></li>

                    <li><a href="#networking">Networking</a></li>

                    <li><a href="#news-feed">News Feed</a></li>

                    <li><a href="#orm">ORM</a></li>

                    <li><a href="#package-management">Package Management</a></li>

                    <li><a href="#package-repositories">Package Repositories</a></li>

                    <li><a href="#permissions">Permissions</a></li>

                    <li><a href="#processes">Processes</a></li>

                    <li><a href="#queue">Queue</a></li>

                    <li><a href="#restful-api">RESTful API</a></li>

                    <li><a href="#rpc-servers">RPC Servers</a></li>

                    <li><a href="#science">Science</a></li>

                    <li><a href="#search">Search</a></li>

                    <li><a href="#serialization">Serialization</a></li>

                    <li><a href="#serverless-frameworks">Serverless Frameworks</a></li>

                    <li><a href="#specific-formats-processing">Specific Formats Processing</a></li>

                    <li><a href="#static-site-generator">Static Site Generator</a></li>

                    <li><a href="#tagging">Tagging</a></li>

                    <li><a href="#template-engine">Template Engine</a></li>

                    <li><a href="#testing">Testing</a></li>

                    <li><a href="#text-processing">Text Processing</a></li>

                    <li><a href="#third-party-apis">Third-party APIs</a></li>

                    <li><a href="#url-manipulation">URL Manipulation</a></li>

                    <li><a href="#video">Video</a></li>

                    <li><a href="#wsgi-servers">WSGI Servers</a></li>

                    <li><a href="#web-content-extracting">Web Content Extracting</a></li>

                    <li><a href="#web-crawling">Web Crawling</a></li>

                    <li><a href="#web-frameworks">Web Frameworks</a></li>

                    <li><a href="#websocket">WebSocket</a></li>


                    <li class="main "><a href="#services">Services</a></li>

                    <li><a href="#continuous-integration">Continuous Integration</a></li>

                    <li><a href="#code-quality">Code Quality</a></li>


                    <li class="main "><a href="#resources">Resources</a></li>

                    <li><a href="#podcasts">Podcasts</a></li>

                    <li><a href="#twitter">Twitter</a></li>

                    <li><a href="#websites">Websites</a></li>

                    <li><a href="#weekly">Weekly</a></li>


                    <li class="main "><a href="#other-awesome-lists">Other Awesome Lists</a></li>


                    <li class="main "><a href="#contributing">Contributing</a></li>


                </ul>
            </div>
        </div>
        <div class="col-lg-9 col-md-9">
            <div class="content">
                {{ readme }}
            </div>
        </div>
    </div>

</div>
{% endblock %}