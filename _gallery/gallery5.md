---
title:  "Various"
image_path: "/assets/images/buskers_th.jpg"
description: ""
gallery_date: 2016-05-01
permalink: /gallery/various/
---

This is just a dummy thing. Lorem ipsum and all the rest.
<div class="gallery">
  {% for image in site.photos %}
    {% if image.gallery == "Various" %}
        <div class="gallery-box{% cycle '', ' last' %}">
        <a href="#" class="galleryphoto"><img src="{{ image.image_path }}" alt="{{ image.title}}"/></a>
        </div>
    {% endif %}
  {% endfor %}
</div>