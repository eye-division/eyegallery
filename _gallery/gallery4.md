---
title:  "Women in Science"
image_path: "/assets/images/women_in_science_apgar_th.jpg"
description: ""
gallery_date: 2016-05-01
permalink: /gallery/women-in-science/
---

This is just a dummy thing. Lorem ipsum and all the rest.
<div class="gallery">
  {% for image in site.photos %}
    {% if image.gallery == "Women in Science" %}
        <div class="gallery-box{% cycle '', ' last' %}">
        <a href="#" class="galleryphoto"><img src="{{ image.image_path }}" alt="{{ image.title}}"/></a>
        </div>
    {% endif %}
  {% endfor %}
</div>