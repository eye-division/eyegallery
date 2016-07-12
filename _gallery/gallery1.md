---
title:  "In the Mediterranean"
image_path: "/assets/images/in-the-mediterranean-triptych_th.jpg"
description: ""
gallery_date: 2016-05-01
permalink: /gallery/in-the-mediterranean/
---

I began the first image at the end of 2014 in response to the refugee crisis in the Mediterranean. For more information, see these articles: [The challenges of depicting a humanitarian crisis](http://www.oxford.anglican.org/refugeetryptich/) and  *‘The spiritual work of depicting a humanitarian crisis’*
To buy cards of this series (£2.50, proceeds to refugee organisations), [email me](/contact/).

<div class="gallery" data-featherlight-gallery  data-featherlight-filter="a">
  {% for image in site.photos %}
    {% if image.gallery == "In the Mediterranean" %}
    <div class="gallery-box{% cycle '', ' last' %}">
        <a href="#" class="galleryphoto" data-featherlight="{{ image.image_path }}.jpg"><img src="{{ image.image_path }}_th.jpg" alt="{{ image.title }}"></a>
        <figcaption>{{ image.title}}</figcaption>
    </div>
    {% endif %}
  {% endfor %}
</div>