---
title: Add javascript plugins
---

##LOAD
FILE _data/pluginsSourceFiles.yml

put active to all the plugins that we want to call in the footer
All the plugins are add to this file js/components.js
##energise per page the components
e.x. owl slideshow

it will be automatics the code put in the footer 
_inludes/basic_components/javascriptPluginsCases
   $("#{{ component.data.id }}").owlCarousel( {
   {% for owlData in slideshowOwlData %}
   {{ owlData[0] }} : {{ owlData[1]}} {% unless forloop.last%},{% endunless%}
   {% endfor %}
   });

## the html that scans per page the javascript components
_inludes/basic_components/perpage_plugins.html 
this html is called from default layout