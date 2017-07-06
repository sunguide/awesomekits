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
            <aside class="aside-left-nav">
                {% for name,item in nav %}
                <dt><a href="#{{ name }}">{{ item.name }}</a></dt>
                <dd>
                    {% if item.child %}
                        <ul>
                        {% for name,item  in item.child %}
                            <li><a href="#{{ name }}">{{ item }}</a></li>
                        {% endfor %}
                        </ul>
                    {% endif %}
                {% endfor %}
                </dd>
            </aside>
        </div>
        <div class="col-lg-9 col-md-9">
            <div class="content-container">
                {{ readme }}
            </div>
        </div>
    </div>

</div>
{% endblock %}