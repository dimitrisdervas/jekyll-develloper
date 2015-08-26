---
layout: default
---

   #Tags - LINK URL _ PARAMATER   
   
   <div style="float:left">
   <ul class="tag-box inline">  
   
     <li><a href="{{ site.baseurl}}/tags?tags=featured">Featured</a></li>
     <li><a href="{{ site.baseurl}}/tags?tags=life.style">Life.style</a></li>
   </ul>
   </div>
   #Tags - Click and load template
   <div style="float:left">
   
   
   <ul class="tag-box inline">  
   
     <li><a class="tag-param" data-tags="featured">Featured</a></li>
     <li><a class="tag-param" data-tags="life.style">Life.style</a></li>
   </ul>
 </div>
 <button id="load-more" type="button">Load More</button>




<script id="entry-template">


   <ul>
   {#posts}
   {@eq key=tags value=currentTag }
       <li>{title} {tags}</li>{~n}
          {/eq}
       {/posts}
   </ul>
   


</script>

<div id="output" style="float:left"></div>