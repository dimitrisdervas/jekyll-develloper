---
title: Component's Content Type
tag: global use custom
---

{% highlight html %}
   <!-- If data type is from yml or other data file  sent to find file in _data/content folder -->
   {% if include.component-data.data-type == 'data-list' %}
      {% assign posts = site.data.content.[include.component-data.content-type] %}
   <!-- If there is no post-tile it will look only for the file not inside the file -->
      {% if include.component-data.post-title %}
         {% assign onepost = posts.[include.component-data.post-title] %}
      {% else %}
           {% assign onepost = posts %}
         {% endif %}
   {% else %}
   <!-- else if it is collection -->
      {% assign posts = site.[include.component-data.content-type] %}
      {% assign onepost = posts | where:'title','include.component-data.post-title' %}   
   {% endif %}
{% endhighlight %}