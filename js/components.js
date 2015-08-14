---
---
{% for plugin in site.data.pluginsSourceFiles %}
   {% if plugin.state == 'active' %}
     {% include {{ plugin.js }} %} 
   {% endif%}
{% endfor %}

