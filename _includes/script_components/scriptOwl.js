---
---
// Check all configuration files in current page
{% for conf in site.data.pages.[page.confFile]  %}
// Select the second half with the clean configuration file ( just json)
{% assign confData = conf[1] %}
// Loop through the divs in each page file
   {% for divs in confData %}
// Select current div
      {% assign currentDiv = divs.divs %}
// Loop through the components in  current div
      {% for component in currentDiv %}
// Select the components that have a component slideshow.html      
         {% assign slideshowComponent = component.components | where: 'component','slideshow.html' %}
// Loop through each of the slildeshow components       
         {% for slideshow in slideshowComponent %}
// Select just the data of the slideshow         
            {% assign slideshowData = slideshow.data %}
// Select the owl slideshow api data            
            {% assign slideshowOwlData = slideshowData.owl-data %}
// Print the owl carousel configuration data
            $("#{{ slideshowData.slideshow-id }}").owlCarousel( {
               {% for owlData in slideshowOwlData %}
               {{ owlData[0] }} : {{ owlData[1]}} {% unless forloop.last%},{% endunless%}
               {% endfor %}
            });
         {% endfor %}
      {% endfor %}
   {% endfor %}
{% endfor %}

