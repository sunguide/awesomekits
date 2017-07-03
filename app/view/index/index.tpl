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
{% endblock %}