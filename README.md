# jekyll-scaffold
build websites fast - for devellopers

# First step
Decide the content types
ex. http://html.blahlab.com/jekeo/
If each post must be shown in a separate page - url - permalink then you must use collections

## Content Types
-  **Blog**
   - **fields**: 
      - image / title / date / user / tags / long.text 
   - **style**: 
      - post.style
- **Portofolio**
   - **fields**:
      - image / title / short.text / client /date / webite url
   - **style**: 
      - data.style
- **Services**
   - **fields**: 
      - title / short.text / icon : 
   - **style**: 
      - data.style
- **About**
   - **fields**: 
      - team members ( image / name / subtitle / short.text / facebook / tweeter ): 
   - **style**: 
      - list.style
   - our history( title / text )
    - **style**: 
      - data.style
   - skills 
    - name / prcentage
 - **Clients**
   - image
 - **Slideshow**
   - title / subtitle / image 
 - ** Reviews**
   - name / company / text / image

#**TODO autocreate**
Global parapmeter for images path in config.yml
Pagination - to ietms ex portofolio -item - newxt project = solution to read a json and based oth current id to find next links ex. react - ejs
CSS - write always position e.x. float with tabs inwardin code
Masonry in blog doesnot work
to check https://developers.google.com/youtube/iframe_api_reference
Gulp to copy js files to assets
fix when we have to button same div - possible create the type fuction check if type=link not name=link
autcocreate-gulp posts for lorem ipsum for each collections
autocreate-gulp autocreate tags pages or dates for blogs
or
use react or ejs template to make pagination and blog group by
make the photos application
make the forms application
fix bacon jquery to fill posts