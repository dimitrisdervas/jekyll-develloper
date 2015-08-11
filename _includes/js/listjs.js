// Filter for each category
  {% for menu in site.data.categories %} 
     $('#filter-{{ menu.name }}').click(function() {
     coursesList.filter(function(item) {
       if (item.values().categories == "{{ menu.name }}") {
         return true;
       } else {
         return false;
       }
     });
     return false;
   });
 {% endfor %}