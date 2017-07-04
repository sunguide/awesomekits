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
            <h1>{{ __('about.title') }}</h1>
            <p>{{ __('about.introduce') }}</p>
        </div>
    </div>

</div>
{% endblock %}