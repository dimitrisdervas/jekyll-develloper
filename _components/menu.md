---
title: menu
tag: html component
---


{% highlight html %}
   <!-- Check the content type - Datat or Collections - Posts -->
      {% include html_components/component_includes/componentContentType.html %}
   {% for menu in posts  %}
      <div class="menu-item" data-theme-menu="{{ include.data-theme }}"><a href="{{ site.baseurl }}/{{ menu.url }}">{{ menu.name }}</a></div>
   {% endfor %}
{% endhighlight %}