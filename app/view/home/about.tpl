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
    <div class="row">
        <div class="about-container">
            <h1>初衷</h1>
            <p>致力于为开发者提供最好的开发工具集和最佳实践。</p>
        </div>
    </div>

</div>
{% endblock %}