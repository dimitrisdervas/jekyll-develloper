---
title: posts-list
tag: html-component
---

Just create a list of the posts either from a collection or a data file

{% highlight html %}
<!-- Check the content type - Datat or Collections - Posts -->
   {% include html_components/component_includes/componentContentType.html %}
<!-- COMPONENT OPTIONS -->

<!-- COMPONENT WRAPPER DIV -->
   <div {{ component-id }} {{ component-class }} {{ component-theme }} >
<!-- MASONRY -->
   {% include html_components/component_includes/div-masonry-sizer.html %}
<!-- Check the group div html element -->
     {{ groupdiv-ul }}
<!-- Loop through the posts and set a limit if there it exists -->
   {% for post in posts limit:{{include.component-data.limit}} %} 
<!--  IF div -->
     {{ groupdiv-div }} 
<!-- If list -->
     {{ groupdiv-li }}
<!--  If there is grouping div got fields -->
           {% if include.component-data.group != nill  %}
              {% assign groups = include.component-data.group %}
              {% for group in groups %}
                 <div class="{{ group.name }}">
                    {% assign fields = group.fields %}                   
                       {% include html_components/postsListCases/postsListCases.html %}
                 </div>
<!--  END loop in group -->
                {% endfor %}   
           {% else %}
<!-- Just print the fields -->
<!-- Loop each field in the component -->
              {% assign fields = include.component-data.fields %}    
              {% include html_components/postsListCases/postsListCases.html %}
<!--  END IF to check for GROUP -->
           {% endif %}
<!--    END Component HTML WRAPPER ELEMENT -->
         {{ groupdiv-li-end }}
         {{ groupdiv-div-end }}
<!-- End loop in posts -->
      {% endfor %} 
   {{ groupdiv-ul-end }}
</div>
{% endhighlight %}