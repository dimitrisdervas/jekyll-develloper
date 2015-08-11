// Create a listsjs Filter for each category
  {% for work in site.work %} 
     $('#filter-{{ work.tag }}').click(function() {
        portofolioList.filter(function(item) {
          if (item.values().tag == "{{ work.tag }}") {
            return true;
          } else {
            return false;
          }
        });
        return false;
   });
 {% endfor %}
