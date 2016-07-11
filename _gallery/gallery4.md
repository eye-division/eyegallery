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
        <a href="#" class="galleryphoto" data-featherlight="{{ image.image_path }}.jpg"><img src="{{ image.image_path }}_th.jpg" alt="{{ image.title}}"/></a>
        <figcaption><a href="#" class="galleryphoto" data-featherlight="{{ image.image_path }}.jpg">{{ image.title}}</a></figcaption>
    </div>
    {% endif %}
  {% endfor %}
</div>