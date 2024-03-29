# Intro
Mobile-focused web app was built using Next.js and Chakra UI.
This is the front-end for the E85 Station app.

# Overview
### Map and Markers
The application focuses on the map, provided by Leaflet-react. 
On visit, we make an API call to an endpoint that retrieves all of the markers for E85 gas stations.
All the markers are cached, along with a date. We make another API call to check if the cache is outdated.

### Drawer
This is a sidebar that houses most of the interactive UI. It's controlled by the DrawerContext, which wraps the application.
The drawer can have several UIs:
1. Additional marker info
2. Settings
3. Profile

### Additional marker info
Marker state is controlled by the LocationContext, where we store the name of the station and its id.
To get more details such as general info, images, and comments, we'll make an API call with the ID.

### Navbar / footer
In mobile mode, the navbar becomes a footer for ease of use. The links provided simply control the state of the drawer, specifying which mode it should be in (marker info, settings, profile)

### Notificiations
Notification provider can now accept multiple HTML elements with pre-defined functions.

### API Call wrappers
All API calls from the client-side are run thru an axios wrapper (axiosClient). Same for the server-side (fetchClient).
The client-side acts as an additional layer between the various services and the front-end. Security checks will live here. 
Meanwhile the front-end just handles simple axios calls that focus on error handling and retry logic. 

