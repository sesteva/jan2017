Hi, here is your project...

    - React
    - Redux
    - WebPack
    - ES6

And these are your tasks...

    1- Setup React-Router
    2- Replace Main Page with a 
        - Header with navigation (Home, My Flights and Profile)
        - Main Section
        - Footer
    3- On MyFlights the requirements are:
        A - when the page is loaded the app will request the flights for this month 
        hitting the following url: (GET) https://5xzsgyb175.execute-api.us-east-1.amazonaws.com/dev/rest/schedule
        This url contains activities that could be of various type ('CHECK', 'NO-OP', 'FLY' , etc)
        B - the page should render all the activities as a list. 
        C- For each type of activity we need to present 3 pieces of info. See image below as an example.
        D - the list needs to have separators per day, so basically the user can see the group of activities per day
        E - add a select or checkbox or any form type you want, so the user can filter the list by activity type. 

    The image below shows how to group the activities and an example of how to represent the FLY type activities.
    
    note: There is no need to render/display the calendar.

![Example](/mock.png))



