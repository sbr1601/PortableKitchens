# Portable Kitchens
Portable Kitchens (http://sbr1601.com/PortableKitchens/) is an interactive web application that allows users to search for food trucks by cuisine, or food items.
It displays the list of vendors on Google Maps and shows the menu for each vendor when clicked.

# Motivation behind Portable Kitchens
Everybody loves Food Trucks. But there is no good way for users to search for food trucks by "What they're craving for". There is no single application that specifies all the amazing food items available at a food truck vendor.
Portable Kitchens allows users to do exactly that. Users can search for items they want to eat, and the website will list all the vendors with that item on their menu.

# Limitations
Currently, data is only available for food trucks in San Francisco. New food trucks for many other cities will be added soon.

Missing Features:
 - Ability for a user to search for food trucks by specifying a particular address.
  - My initial thought was to use HTML5 navigator.geolocation to locate a user's location and show FoodTrucks closest to them
  - But that seemed to be more valid when data for many other cities would be available
  - Had I had more time, I would have added the ability for a user to zoom in on a location on the map, and load all the food trucks available in that location

Features (Coming Soon):
 - Add directions from user's current location to the selected vendor
 - Add ability for users to login via Facebook, Google, etc and give them an option to save/bookmark their favorite food trucks
  - Leverage this information to give users a more personalized feel
 - Display review information for vendors using the Yelp Developer API

# Architectural Choices
BackboneJS
 - It has been over 3 years since I worked with jQuery and have never had prior experiences working with MV* frameworks.
 - After reading many articles on which Framework should be chosen (usually between Angular, Backbone, and Ember), I decided to choose Backbone.
  - Because it is a light-weight MVC and had the closest resemblance to my previous work with pure jQuery and Javascript. Backbone seemed to have the quickest learning curve for me and the easiest to use
  - Being light-weight, it gave me the flexibility to design, and build the application the way I wanted to

Slim Micro Framework (REST API)
 - Having no prior experience building REST API, I was looking for a lightweight option to build a RESTful API using PHP
 - Slim, like BackboneJS, is a very light weight framework that is focused only on REST. 
 - It is very easy to setup and use. It also has a huge developer community to assist with any questions.
  - For eg: I had a lot of issues for "404 Page Not Found" errors. Looking at StackOverflow, Quora, and other forums I diagnozed the issue to be part of my .htaccess file.
  - Another post pointed me towards updating my apache config instead of creating a separate .htaccess file 

# Future Improvements
Load Times:
 - Setup Akamai caching to cache all static (CSS and JS) files
 - Minify all JavaScript and CSS files into 1 file

Back End:
 - Decrease the number of Database calls being made by adding a Memcache layer on top of the DB
 - Setup cron jobs to frequently pull data from "datasf.org" and update the database with the new content

Front End:
 - Use Asynchronous Module Definitions (AMD) like Require.js to implement a more modular and organized version of the app

Security:
 - Setup reports around the server's access logs to detect any attempts at XSS attacks
 - Implement IP rate limiting to stop automated scripts from flooding the server with API requests

# External Code
 - JS
  - All files inside www/js/libs are Javascript libraries downloaded from websites

 - CSS
  - All files inside www/css/libs are downloaded UI stylesheets
  - 70% of the CSS code in www/css/appStyle.css was used from various different sources (mostly tutorials) online

 - PHP
  - All code inside thirdparty was code generate by the Slim Framework

# Screenshots

![Map View] (http://i.imgur.com/klgoIJM.png http://i.imgur.com/k4DoHQH.png)

![Menu View] (http://i.imgur.com/k4DoHQH.png)
