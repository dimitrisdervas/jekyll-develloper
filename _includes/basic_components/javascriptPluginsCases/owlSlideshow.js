   $("#{{ component.data.id }}").owlCarousel( {
                              {% for owlData in slideshowOwlData %}
                              {{ owlData[0] }} : {{ owlData[1]}} {% unless forloop.last%},{% endunless%}
                              {% endfor %}
                           });