---
title:  "Sufi Stories"
image_path: "/assets/images/sufi_stories_child_light_th.jpg"
description: ""
gallery_date: 2016-05-01
permalink: /gallery/sufi-stories/
---

Four Sufi stories about light.

<div class="gallery">
  {% for image in site.photos %}
    {% if image.gallery == "Sufi Stories" %}
    <div class="gallery-box{% cycle '', ' last' %}">
        <a href="{{ image.image_path }}.jpg" class="galleryphoto"  data-lightbox="poets" data-title="{{ image.title}}"><img src="{{ image.image_path }}_th.jpg" alt="{{ image.title}}"/></a>
        <figcaption><a href="{{ image.image_path }}.jpg" data-lightbox="poets" data-title="{{ image.title}}">{{ image.title}}</a></figcaption>
    </div>
    {% endif %}
  {% endfor %}
</div>