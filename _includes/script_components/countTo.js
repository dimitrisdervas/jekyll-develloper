---
---
{% for conf in site.data.pages %}
{% assign confData = conf[1] %}
   {% for divs in confData %}
      {% assign currentDiv = divs.divs %}
      {% assign counterComponent = currentDiv.components | where: 'component','countTo.html' %}
            {% if counterComponent %}
                  $(".countTo").countTo();
               {% endif%}
   {% endfor %}
{% endfor %}

