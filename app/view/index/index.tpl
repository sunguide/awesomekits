{% extends "../layout/layout.tpl" %}

{% block content %}

<div class="container main-container">
    <div class="row awesome-category-list">
        <div class="col-lg-3 col-md-3 col-sm-3">
            <aside class="aside-left-nav">
                <div class="mobile-menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                    </ul>
                </div>
                <dl>
                    <dt><a href="/languages">{{ __('aside.nav.language') }}</a></dt>
                    <dd>
                        <ul><li>{{ __('aside.nav.language_intro') }}</li></ul>
                    </dd>
                    <dt><a href="#">{{ __('aside.nav.cloud_computing') }}</a></dt>
                    <dd>
                        <ul>
                            <li><a href="/awesome-docker/">{{ __('aside.nav.docker') }}</a></li>
                        </ul>
                    </dd>
                    <dt>{{ __('aside.nav.frontend_development') }}</dt>
                    <dd>
                        <ul>
                            <li><a href="/awesome-react/">{{ __('aside.nav.react') }}</a></li>
                            <li><a href="/awesome-vue/">{{ __('aside.nav.vue') }}</a></li>
                            <li><a href="/awesome-html5/">{{ __('aside.nav.html5') }}</a></li>
                        </ul>
                    </dd>
                    <dt>{{ __('aside.nav.backend_development') }}</dt>
                    <dd>
                        <ul><li><a href="/awesome-laravel">{{ __('aside.nav.laravel') }}</a> </li></ul>
                    </dd>
                    <dt>{{ __('aside.nav.computer_science') }}</dt>
                    <dt><a href="/awesome-bigdata">{{ __('aside.nav.bigdata') }}</a></dt>
                    <dt><a href="/awesome-devenv">{{ __('aside.nav.devenv') }}</a></dt>
                    <dd>
                        <ul><li>{{ __('aside.nav.devenv_intro') }}</li></ul>
                    </dd>
                    <dt>{{ __('aside.nav.hardware') }}</dt>
                    <dt>{{ __('aside.nav.cms') }}</dt>
                    <dt>{{ __('aside.nav.bigdata') }}</dt>
                    <dt>{{ __('aside.nav.database') }}</dt>
                    <dt>{{ __('aside.nav.miscellaneous') }}</dt>
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