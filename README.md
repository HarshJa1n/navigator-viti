# React Google Maps Application

This application uses the @react-google-maps/api library to render a Google Map and provide directions between two or more locations with the help of waypoints. The application also calculates the distance, ETA and duration of the route.


## Features
- Input form validation
- The application displays a Google Map with the ability to provide directions between two or more locations.
- The application supports four modes of travel: DRIVING, WALKING, TRANSIT, and BICYCLING.
- The user can add waypoints to the route.
- The application calculates the distance and duration of the route in real-time.
- The application displays a success or warning toast based on whether the user has chosen a valid place or not.
## How to use the application
Enter the origin, destination, and mode of travel.
Click on the "Add Waypoint" button to add a waypoint to the route (if required).
Click on the "Calculate Distance" button to calculate the distance and duration of the route.
The distance and duration will be displayed below the "Calculate Distance" button.
The directions will be displayed on the map.
## Dependencies
- @react-google-maps/api - This library provides a set of React components that wrap the underlying Google Maps JavaScript API v3 instances.
- react-toastify - This library is used to display success and warning toasts.
