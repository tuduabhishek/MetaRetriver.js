<div align="center">
    
  # MetaRetriver.js
 
 <p>A small library for extracting data from meta tags. This library can also be used to design link previews.</p>
 
</div>

## How To Use It ?

Get MetaRetriver.js Library [Download Code](https://github.com/tuduabhishek/MetaRetriver.js/blob/master/MetaRetriver.js)

```html
   <script src="MetaRetriver.js"></script>
```

then

```javascript
// Example Code

let url="https://api.allorigins.win/raw?url=https://www.animenewsnetwork.com/cms/.163738";

//specifying meta tags by property and name to get its content
let metaTags=["property=og:image","property=og:url","name=description"];

MetaRetriver(url).retrive(true,metaTags,function(data){

    console.log(data.get("property=og:image"));
    console.log(data.get("name=description"));
});

```

The library will get the meta tags contents from the webpage. Due to CORS issue I used [All Origins](https://github.com/gnuns/allorigins) to pull contents from page.

## Cached Results

The library caches the whole html page in HTML Web Storage API by default. If you don't want to cache html results then you can turn it off and use this code instead

```javascript
// Example Code

let url="https://api.allorigins.win/raw?url=https://www.animenewsnetwork.com/cms/.163738";

//specifying meta tags by property and name to get its content
let metaTags=["property=og:image","property=og:url","name=description"];

//Passing "false" as we don't want caching
MetaRetriver(url).retrive(false,metaTags,function(data){

    console.log(data.get("property=og:image"));
    console.log(data.get("name=description"));
});

```

the cached data can be accessed using this code

```javascript
// Example Code
let url="https://api.allorigins.win/raw?url=https://www.animenewsnetwork.com/cms/.163738";

console.log(localStorage.getItem(url));

```

## Designing Link Previews using MetaRetriver.js

Example Layout using [Bootstrap](https://getbootstrap.com/) and code

```html
   
    <div class="card" style="width: 18rem;">
            <img id="image" src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title" id="title"></h5>
              <p class="card-text" id="desc"></p>
            </div>
          </div>

```

```javascript

let url="https://api.allorigins.win/raw?url=https://www.animenewsnetwork.com/cms/.163948";
let metaTags=["property=og:image","property=og:title","name=description"];
MetaRetriver(url).retrive(true,metaTags,function(data){

    document.getElementById("image").setAttribute("src",data.get("property=og:image"));
    document.getElementById("desc").innerHTML=data.get("name=description");
    document.getElementById("title").innerHTML=data.get("property=og:title");
    
});

```




