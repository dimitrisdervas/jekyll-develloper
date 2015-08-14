   // LISTSJS
   // Add the name of the classes to serach within for words
   var options = {
     valueNames: [ '{{ component.data.categories }}' ]
   };

   // Assign the list to Listjs - use the id of the container <div>
   var portofolioList = new List('filters', options);  
   // copied from here
   // http://pastebin.com/UPB095pk also in test.html
   // Create a listsjs Filter for each category
   // Create this only in the portofolio.html component page

                           {% assign listjsFilters = component.data.filters %}                        
                             {% for filter in listjsFilters %} 
   //                           Check for filter All or None
                                   {% if filter.filter == 'all' or filter.filter == 'none'%}
                                          $('#filter-{{ filter.filter }}').click(function() {
                                             portofolioList.filter();
                                                 });
                                    {% else %}
                                            $('#filter-{{ filter.filter }}').click(function() {
                                               portofolioList.filter(function(item) {
//                                                   {{ component.data.categories }}
                                                 if (item.values().{{ component.data.categories }} == "{{ filter.filter }}") {
                                                   return true;
                                                 } else {
                                                   return false;
                                                 }
                                               });
                                               return false;
                                          });
                                        {% endif %}
                              {% endfor %}
         
   //  Filter None - clear
    $('#filter-none').click(function() {
       featureList.filter();
    });