# Portable Kitchens
Portable Kitchens (http://sbr1601.com/PortableKitchens/) is an interactive web application that allows users to search for food trucks by cuisine, or food items.
It displays the list of vendors on Google Maps and shows the menu for each vendor when clicked.

# Motive beind Portable Kitchens
Everybody loves Food Trucks. But there is no good way for users to search for food trucks by "What they're craving for". There is no single application that specifies all the amazing food items available at a food truck vendor.
Portable Kitchens allows users to do exactly that. Users can search for items they want to eat, and the website will list all the vendors with that item on their menu.

# Limitations
Currently, data is only available for food trucks in San Francisco. New food trucks for many other cities will be added soon.
Features (Coming Soon):
 - Zoom in on a location on the map, and the website will show all the food trucks available in that location
 - Add directions from user's current location to the selected vendor

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

# Screenshots

![Map View] (http://i.imgur.com/klgoIJM.png http://i.imgur.com/k4DoHQH.png)
![Menu View] (http://i.imgur.com/k4DoHQH.png)
