---
title:  "Sufi Stories"
image_path: "/assets/images/sufi_stories_child_light_th.jpg"
description: ""
gallery_date: 2016-05-01
permalink: /gallery/sufi-stories/
---

Four Sufi stories about light.

<div class="gallery" data-featherlight-gallery  data-featherlight-filter="a">
  {% for image in site.photos %}
    {% if image.gallery == "Sufi Stories" %}
    <div class="gallery-box{% cycle '', ' last' %}">
        <a href="#" class="galleryphoto" data-featherlight="{{ image.image_path }}.jpg" title="{{ image.title}}"><img src="{{ image.image_path }}_th.jpg" alt="{{ image.title}}"/></a>
        <figcaption><a href="#" class="galleryphoto" data-featherlight="{{ image.image_path }}.jpg">{{ image.title}}</a></figcaption>
    </div>
    {% endif %}
  {% endfor %}
</div>