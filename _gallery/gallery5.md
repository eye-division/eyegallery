---
title: Testing
image_path: /assets/images/3522-cr_0337.jpg
description:
gallery_date: 2016-05-01T00:00:00.000Z
permalink: /gallery/testing/
---


<div class="gallery">
  {% for image in site.photos %}
    {% if image.gallery == title %}
     <div class="gallery-box{% cycle '', ' last' %}">
        <a href="{{ image.image_path }}.jpg" class="galleryphoto" data-lightbox="poets" data-title="{{ image.title}}"><img src="{{ image.image_path }}_th.jpg" alt="{{ image.title}}" /></a>
        <figcaption><a href="{{ image.image_path }}.jpg" data-lightbox="poets" data-title="{{ image.title}}">{{ image.title}}</a></figcaption>
    </div>
    {% endif %}
  {% endfor %}
</div>