# Phase 2 Project - thirstPlant 
In order to see the project you'll need to install the React npm package
`npx create-react-app` and then `npm start` once the package is installed.
You should be able to see the application in the browser window. 
This SPA is getting its data from a local db.json so in your additional terminal run the following `json-server --watch db.json --port 3001`. 

# Application introduction
thirstPlant is a single page application designed to remind ourselves the last time we watered our plants. I have been there and I am sure you are as well. 

Once the application is loaded in the broswer window you will be able to see the Home page with a navigation bar on top of the page in the left corner: Home, Plant Collection and Add New Plant.

- The Home component will contain the background image, the title and a short message.
- The Plant collection holds the cards of each plant we have in our db.json server.
Each card contains the picture of the plant, the name, the sunglight level (🔆) and water level (💧) required by the plant; a last time the plant was watered date (notified by a day of the week) and the user has the ability to introduce a new day when the plant was watered.
- Add New Plant component hosts the form that allows us to add a new plant entry in our page. After hitting 'Submit' by using {useHistory} -> history.push(URL) the user is automatically sent back to the Plant Collection component where the new entry is rendered without refreshing the page by the onSubmit() function. 
After the new entry was rendered on the page, inside the handleSubmit() function a new fetch request POST will add the entry in our db.json server.


# Curriculum aid
For this application I have taken inspiration from the following labs in our curriculum at FlatIron School:
- Phase 1: [Toy Tale lab](https://learning.flatironschool.com/courses/5649/assignments/207816?module_item_id=479146)
This was used in order to create the cards for the plants.

# Additional resources
- For the form CSS styling I have taken inspiration for YouTube [video](https://www.youtube.com/watch?v=LcKHti3gCJw) 
- For the backgrounds and plant cards I have used pictures from [freepike](www.freepik.com)
- For CSS styling I have used [w3b school](www.w3school.com)
