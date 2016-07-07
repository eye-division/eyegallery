---
title:  "Women in Science"
image_path: "/assets/images/women_in_science_apgar_th.jpg"
description: ""
gallery_date: 2016-05-01
permalink: /gallery/women-in-science/
---

<div class="gallery" data-featherlight-gallery  data-featherlight-filter="a">
  {% for image in site.photos %}
    {% if image.gallery == "Women in Science" %}
        <div class="gallery-box{% cycle '', ' last' %}">
            <figure>
                <a href="#" class="galleryphoto" data-featherlight="{{ image.image_path }}.jpg"><img src="{{ image.image_path }}_th.jpg" alt="{{ image.title}}"/></a>
            <figcaption>{{ image.title}}</figcaption>
            </figure>
        </div>
    {% endif %}
  {% endfor %}
</div>