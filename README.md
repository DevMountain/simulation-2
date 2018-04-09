<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

This project is designed to give you an opportunity to build something from scratch and to teach you how to connect all the pieces of an application together. All of the instructions give you an idea of what order to do things in, but there won't be any guidance or solutions on how to write the code itself. The styling of the project is not included in the instructions at all and should be completed at your discretion. 

This project is broken into two parts. The setup instructions are more detailed and are designed to get you started. The parts have varying levels of detail, with the newer concepts explained more. This gives you a chance to practice your skills on your own. Your mentors have also been asked to provide only minimal guidance. They can point you in the right direction, but cannot help you code. This project is a chance for you to combine and showcase the skills you've learned so far.

## Competencies
Competencies covered by this project

### Setup
["Student can use git to create, manage, and synchronize commits locally and remotely (Local and remote repository in-sync, .gitignore)"](https://github.com/DevMountain/simulation-2#database) </br>
["Student can use class based components in react and it's features (render, JSX, nested components)"](https://github.com/DevMountain/simulation-2#react) </br>
["Student can apply ES6 constructs in React for better code (import, export, destructuring)"](https://github.com/DevMountain/simulation-2#react) </br>
["Student can create Node servers using the Express package (Server running)"](https://github.com/DevMountain/simulation-2#server) </br>
["Student can create tables in a database"](https://github.com/DevMountain/simulation-2#database) </br>
["Student can connect to their database in their NodeJS servers using Massive"](https://github.com/DevMountain/simulation-2#database) </br>

### Part 1
<strong>Step 1</strong> </br>
["Student can add ReactRouter to their code base (HashRouter)"](https://github.com/DevMountain/simulation-2#step-1) </br>
["Student can add ReactRouter to their code base (Switch, Route, component)"](https://github.com/DevMountain/simulation-2#step-1) </br>
["Student can add ReactRouter to their code base (Link)"](https://github.com/DevMountain/simulation-2#step-1) </br>

<strong>Step 2</strong> </br>
["Student can use class based components in react and it's features (state, setState, constructors)"](https://github.com/DevMountain/simulation-2#step-2) </br>
["Student can use class based components in react and it's features (events)"](https://github.com/DevMountain/simulation-2#step-2) </br>
["Student can apply ES6 constructs in React for better code (arrow functions)"](https://github.com/DevMountain/simulation-2#step-2) </br>

<strong>Step 3</strong> </br>
["Student can use class based components in react and it's features (props)"](https://github.com/DevMountain/simulation-2#step-3) </br>
["Student can create functional components that receive and render props"](https://github.com/DevMountain/simulation-2#step-3) </br>
["Student can interact with the web via axios and REST"](https://github.com/DevMountain/simulation-2#step-3) </br>
["Student can use componentDidMount in their code"](https://github.com/DevMountain/simulation-2#step-3) </br>
["Student can create a RESTful API (Status codes)"](https://github.com/DevMountain/simulation-2#step-3) </br>
["Student can create a RESTful API (GET endpoint)"](https://github.com/DevMountain/simulation-2#step-3) </br>
["Student can create SQL statements to manipulate data in their databases (Select)"](https://github.com/DevMountain/simulation-2#step-3) </br>
["Student can run SQL commands in their NodeJS servers using Massive"](https://github.com/DevMountain/simulation-2#step-3) </br>

<strong>Step 4</strong> </br>
["Student can create a RESTful API (body parser)"](https://github.com/DevMountain/simulation-2#step-4)(https://github.com/DevMountain/simulation-2#step-4) </br>
["Student can create a RESTful API (POST endpoint)"](https://github.com/DevMountain/simulation-2#step-4) </br>
["Student can create SQL statements to manipulate data in their databases (Insert)"](https://github.com/DevMountain/simulation-2#step-4) </br>

<strong>Step 5</strong> </br>
["Student can use class based components in react and it's features (.bind)"](https://github.com/DevMountain/simulation-2#step-5) </br>
["Student can create a RESTful API (params)"](https://github.com/DevMountain/simulation-2#step-5) </br>

### Part 2
<strong>Step 2</strong> </br>
["Student can utilize Redux in their code to manage state (store, reducer)"](https://github.com/DevMountain/simulation-2#step-2-1) </br>
["Student can utilize Redux in their code to manage state (connect, mapStateToProps, share state)"](https://github.com/DevMountain/simulation-2#step-2-1) </br>
<strong>Step 3</strong> </br>
["Student can utilize Redux in their code to manage state (actions, action builders, mapDispatchToProps object)"](https://github.com/DevMountain/simulation-2#step-3-1) </br>
["Student can create Node servers using the Express package (Serving static files)"](https://github.com/DevMountain/simulation-2#final-step) </br>

Don't worry too much about the competencies; they will be covered as you build this project. Good luck and work hard!

# Setup

This section will help you create the files you need and install the packages you need.

## Color Palette & Font

<img src="https://github.com/DevMountain/simulation-2/blob/master/assets/style_guide.png" />

<b>[Google Font - Open Sans](https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans)</b>

## React
1) Run `create-react-app houser` and cd into the folder to get started.
2) Run `npm i axios react-router-dom --save`.
3) Create a component folder inside of src
4) Inside your component folder create a folder for each component you will be using (Dashboard, House, Wizard, and Header)
5) Inside each of these folders create a Javascript file named the same thing. Make sure to capitalize the first letter!
6) Create a simple class component in the Dashboard and Wizard files. For now just return a div containing the component's name from the render method.
7) Create a functional component (created with the function keyword) in the Header and House files. For now just return a div containing the component's name.
8) Now render the Dashboard, Wizard, and Header components in App.
9) Render the House component inside Dashboard.
10) Create a route.js file inside the src folder. We will use this for our routing later.
11) Run `npm start` to make sure everything is working. You should see the names of all the components displayed.

## Server
1) Run `npm i express body-parser --save`
2) Create a folder called server at the root of the project.
3) Create an index.js file and a controller.js file inside of that folder.
4) Open index.js and require your packages and the controller file.
5) Setup a basic Express server (you will add endpoints later, just get the server ready to run).
6) Open your package.json. Add your main property (so nodemon will work) and your proxy (so our axios requests will work).
    * Your main should look like `"main": "server/index.js"`
    * Your proxy should look like `"proxy": "http://localhost:4000"` using whatever port your server is setup to run on (the port should not be 3000 because that is what React will be running on).
7) Run `nodemon` and make sure your server runs.

## Database
1) Run `npm i massive dotenv --save`
2) Create an .env file at the root of the project.
3) Open your .gitignore and add the .env file to it.
4) Open server/index.js and require masssive and dotenv (make sure to invoke config on dotenv).
5) Go to [Heroku](https://heroku.com) and create a database (you can also use a database you already have created, but just be careful not to name your table for Houser the same thing as any of the tables that already exist in your database)
6) Copy the connection URI for your new or existing database and save it in your .env file (make sure you put `?ssl=true` on the end of the string).
7) Create a folder called db at the root of the project.
8) Set up massive in your server using the connection string you saved in your .env file.
9) Make sure to run `nodemon` again and make sure your database is connecting.
10) Copy the connection string from your .env file into SQLTabs and create the houses table.
11) It's helpful to insert some dummy data into your database at this point to help you test as you go along. 

# Part 1

<b>Live example [here](https://cl.ly/3p0v0k2L2m43). Filled out planning sheet [here](https://github.com/DevMountain/simulation-2/blob/master/PLANNING_SHEET.md)</b>

In the first part you will set up routing, the abiltiy to view the houses, add a new house, and delete a house from the list. 

Functionality of the Wizard View:
* A user should be able to add a name, address, city, state, and zipcode for a house.
* A user should be able to click the 'Cancel' button.
    * This should NOT add a house to the database.
    * This should redirect the user to the Dashboard.
* A user should be able to click the 'Complete' button.
    * This should add a new house to the database.
    * This should redirect the user to the Dashboard

Funcitonality of the Dashboard View:
* A user should be able to see all the houses that have been added to the database.
* Each house should display its name, address, city, state, and zipcode information.
* A user should be able to click the 'Add New Property' button to be taken to the Wizard view.
* A user should be able to delete any single house.

## Design
Dashboard
<img src="https://github.com/DevMountain/simulation-2/blob/master/assets/views/pt1_dashboard.png" />
Wizard
<img src="https://github.com/DevMountain/simulation-2/blob/master/assets/views/pt1_wizard.png" />

## Step 1
You are going to begin by setting up the routing.

* Open src/index.js and bring in HashRouter from `react-router-dom`. Wrap App with HashRouter.
* Now open routes.js. Bring in Switch and Route from `react-router-dom`. Also bring in the Dashboard component and the Wizard component.
* Set up the Switch element as the default export of the file.
* Inside the Switch, setup a Route for both of the components you brought in.
   * Dashboard should have '/' for its path.
   * Wizard should have '/wizard' for its path.
* Open App.js and change what you're bringing into the component.
   * Remove Dashboard and Wizard from the component.
   * Instead bring in routes from routes.js and render them instead of the other two components.
   * The Header component should remain, as this will show on every view. 
   * If you open your application in the browser you should see the header at all times, but the two views should display only when you visit the corresponding path in the URL.
* Create the 'Add New Property' button in the Dashboard view. Set it up to navigate to the Wizard view when clicked.
* Create the 'Cancel' button in the Wizard view. Set it up to navigate to the Dashboard when clicked. 

## Step 2
Now that routing is setup, the first thing you will do is set up the form in the Wizard View.

* Set up initial state in Wizard for name, address, city, state, and zipcode.
* Create a corresponding input box in the JSX for each property in state.
* Set up the input boxes to update the correct piece of state on change. 

## Step 3
Now you can add the ability to see all the houses.

* Setup initial state in Dashboard. You will need to store the list of houses that the server returns. 
* Map over the list in your render method, returning the House component for each house (this won't display anything until we get the list from the backend).
* Write a GET endpoint in your server.
   * The endpoint should respond with a list of all the houses in the database.
* Write a method in Dashboard that sends an axios request to the endpoint you just wrote. 
   * Once the response comes back, update state with the list of houses.
* Invoke this method as soon as the Dashboard view loads.
* You should see the word "House" repeated as many times as you have houses in your database.
* Update your House component to display the details of each house.
   * Change where you're mapping over the list in Dashboard to pass the house information down to the House component.
   * In the House component write JSX to display the house information that was passed down. 
   * Add a 'Delete' button in the House componenet. You will make it functional later. 

## Step 4
Next you will add the ability to add a new house.

* Write a POST endpoint in your server.
   * The endpoint should pull the name, address, city, state, and zipcode off of the body.
   * The endpoint should respond with the 'all good' status code once it has added the house to the database.
* Write a method in Wizard that sends an axios request to the endpoint you just wrote.
   * The axios request should take all the values from state and put them in the body of the request.
   * Once the request comes back, navigate the user to the Dashboard View.
* Set up the 'Complete' button to fire the method.
   
## Step 5
Then you will add the ability to delete a house.

* Write DELETE endpoint in your server.
   * The endpoint should should use a parameter to determine which house to remove from the database. 
   * The endpoint should respond with the 'all good' status code once it has removed the house to the database.
* Write a method in Dashboard that sends an axios request to the endpoint you just wrote.
    * The method should accept a parameter to determine which house to remove from the database.
    * Once the response comes back from the server, invoke the method you wrote to get all the houses from the database.
* Pass the method from Dashboard to each House component through props. 
    * The method should fire when a user clicks any of the 'Delete' buttons.
    * Remember to pass an argument into the method to identify which house should be deleted.
   
# Part 2

<b>Live example [here](https://cl.ly/3F0S2m1c261U)</b>

In this part we will expand our Wizard to have three steps instead of just one.

Functionality of the Wizard:
* The Wizard should have three steps.
* A user should be able to navigate between the steps.
   * The inputs on each step should be remembered. If the user selects a previous step they should see the previously entered values.
   * It is acceptable to lose the values on refresh.
* In Step One:
   * A user should be able to add a name, address, city, state, and zipcode for a house.
   * A user should be able to click the 'Next Step' button to navigate to Step Two.
* In Step Two:
   * A user should be able to add an image URL.
   * A user should be able to click the 'Next Step' button to navigate to Step Three.
   * A user should be able to click the 'Previous Step' button to navigate to Step One.
* In Step Three:
   * A user should be able to add the monthly mortgage amount. 
      * This should populate a 'Recommended Rent' field. This amount should be 1.25 times the monthly mortgage amount.
   * A user should be able to add the desired monthly rent.
   * A user should be able to click the 'Complete' button.
      * This should add a new house with to the database.
      * This should clear the inputs of the Wizard.
      * This should redirect the user to the Dashboard.
* A user should be able to click the 'Cancel' button on any step.
    * This should NOT add a house to the database.
    * This should clear the inputs of the Wizard.
    * This should redirect the user to the Dashboard.

Functionality of the Dashboard View:
* A user should be able to see all the houses that have been added to the database.
* Each house should display its image, name, address, city, state, zipcode, montly mortgage, and desired rent information.
* A user should be able to click the 'Add New Property' button to be taken to the Wizard view.
* A user should be able to delete any single house.

## Design
Dashboard
<img src="https://github.com/DevMountain/simulation-2/blob/master/assets/views/pt2_dashboard.png" />
Wizard - Step One
<img src="https://github.com/DevMountain/simulation-2/blob/master/assets/views/pt2_step1.png" />
Wizard - Step Two
<img src="https://github.com/DevMountain/simulation-2/blob/master/assets/views/pt2_step2.png" />
Wizard - Step Three
<img src="https://github.com/DevMountain/simulation-2/blob/master/assets/views/pt2_step3.png" />
 
## Step 1
In this step you will prepare your application to work with Redux.

* First, run `npm i --save redux react-redux`
* Use SQLTabs to connect to your database. Alter the houses table, adding colums for the image, monthly mortgage amount, and desired rent (hint: save the SQL command for this to show your mentor).
* Create a folder called ducks inside the src folder.
* Inside ducks, create a file called store.js and a file called reducer.js
* Now create three components, one for each step.
* Your Wizard component has most of the functionality of Step One in it right now. Move state, the methods needed for the inputs to update state, and the input boxes from Wizard to Step One.
* Leave the 'Cancel' button in Wizard.
* Build the components for steps two and three to roughly match Step One. Just change the input boxes to be different for each view.
* Move the method that saves a house to the database and the 'Complete' button from Wizard to Step Three.
* Now Wizard should be mostly empty. We are going to use it to organize our new routes. 
   * Bring in Route from `react-router-dom`, and the three step components you just made.
   * Set up a route for each step. The path should look like '/wizard/step#' with the number matching each step. 
   * By setting up the routes for the steps inside Wizard instead of inside routes.js we keep our routing tree organized. 
* Now set up the navigation buttons in each step to flip through the steps. Also go to the 'Add New Property' button in Dashboard and change it to navigate to '/wizard/step1' instead of '/wizard'

## Step 2

Now you will get the Redux store set up and talking to a component.

* Open reducer.js and create an object called initialState. This object should store all the values entered in the wizard.
* Export a function named reducer. This function should take in two parameters: state (with the default value of initialState), and action.
* Set up a switch statement inside the reducer based on the action type. For now just setup a default case that returns state.
* Now open store.js and bring in createStore from `redux` and the reducer from reducer.js. 
   * Create a store using the reducer you just brought in.
   * Export that store.
* Open src/index.js and bring in the Provider from `react-redux` and the store from store.js.
   * Wrap HashRouter with the Provider.
   * Pass the store to the Provider.
* Go back to Step One and bring in connect from `react-redux`.
   * Write the mapStateToProps function at the bottom of the file.
   * Take the name, address, city, state, and zipcode off of the Redux state.
   * Now invoke connect, passing in mapStateToProps. Immediately invoke it again passing in the name of the component.
* Now if you console.log props inside your render method you should see the values coming from the Redux state. 

## Step 3

Then you will setup your Step One component to update Redux state.

* In reducer.js write an action builder that takes in a parameter for each value entered in Step One. 
* The function should return an action object with two properties: a type and a payload.
   * The type should be a string that describes what this action is supposed to do. These action type strings are usually stored in a constant outside the function.
   * The payload should be an object with a property for every parameter that was passed into the function.
   * The function should be exported.
* In your reducer function, add a case to the switch statement. The case should make the action type you just wrote.
   * This case should return an object that includes all the values stored on state. The values for img, monthly mortgage, and desired rent should remain what they were, and the values for name, address, city, state, and zipcode should be updated based on the values of the action payload.
* Bring the action builder you just wrote into Step One.
* Add an object to the connect method at the bottom of the component. Add the action builder you just brought into Step One as a value to this object. 
* Now setup the 'Next Step' button to fire this action.
   * The button should still navigate to the next step.

## Step 4

Now that you have Step One connected to Redux, you will replicate the process for steps two and three.

For both components:
* Bring in connect from `react-redux`.
* Write the mapStateToProps function at the bottom of the file.
   * In Step Two, take the image off of the Redux state.
   * In Step Three, take all the properties off of the Redux state (we'll need these to make our axios request).
* Invoke connect, passing in mapStateToProps. Immediately invoke it again passing in the name of the component.

## Step 5 

Then replicate the process of saving the values to Redux state for steps two and three.

* In reducer.js write an action builder each for both components.
   * The function should take in parameters for each value entered in the corresponding step. 
   * The function should return an action object with two properties: a type and a payload.
   * The type should be a string that describes what this action is supposed to do.
   * The payload should be an object with a property for every parameter that was passed into the function.
   * The function should be exported.
* In your reducer function, add a case each for both action builders to the switch statement. 
   * The cases should match the action types you just wrote.
   * The cases should return an object that includes all the values stored on state. The values added in other steps should remain what they were, and the values for the current step should be updated based on the values of the action payload.
* Bring the corresponding action builder into the components.
* Add an object to the connect method at the bottom of the components. Add the action builders you just brought in as a value to this object.  
* Set up the action builders to fire when the navigation buttons are clicked.
   * The action builder that saves the image URL should fire when the 'Previous Step' or the 'Next Step' buttons are clicked in Step Two.
   * The action builder that saves the monthly mortgage amount and the desired rent should fire when the 'Previous Step' button is click in Step Three.
   
## Step 6

Next you'll make sure the saved values show up in each step if the user navigates between steps.

* In each step, use a component lifecycle method to update state as soon as the component loads. 
   * Every step has been hooked up to Redux state, so take the the values stored in Redux and set them on state.
   * This should make the input boxes display the values previously entered. 
 
## Step 7

Now you will set up you cancel button to forget all values from the Wizard.

* In reducer.js write an action builder
   * The function should return an action object with two properties: a type and a payload.
   * The type should be a string that describes what this action is supposed to do.
   * The payload should be equal to intialState.
   * The function should be exported.
* In your reducer function, add a case for the action builder to the switch statement. 
   * The case should match the action type you just wrote.
   * The case should return the payload. In this case we DO want to forget all the values that were stored in state.
* In Wizard, bring in connect from `react-redux` and the action builder you just wrote.
   * Invoke connect, passing in null for the first argument. This is because you don't need to map any Redux state to your props in this component.
   * Pass in an object for the second argument. This object should contain the action builder you brought in.
   * Immediately invoke connect again passing in the name of the component.
* Set up the 'Cancel' button to fire the action builder.
   * The button should still navigate to the Dashboard view.
   
## Step 8

Finally you will update the ability to add a new house to use all these new values

* Change the sql file you wrote for your POST endpoint to accept additional parameters and insert them into the new columns you added.
* Update the POST endpoint to pull the additional values off of the body and pass them into the massive function.
* Open Step Three and update the method that saves a new house to the database.
   * The axios request should send all the values from all three steps on the body.
   * name, address, city, state, zipcode, and the image URL should be pulled from Redux, but the monthly mortgage amount and the desired rent should be pulled from local state.
   * This is because Redux is only updated when the navigation buttons are clicked, so on the final step the values stored in Redux may be out of date.
   * The method should invoke the action builder that clears the Redux state once the house has been added. Remember to bring the action builder in at the top of the file and add it to your connect function at the bottom.
   * The method should still navigate to the Dashboard once the house has been added.
* Lastly update the House component to display the additional values for each House.

## Final Step
Once you have completed all the functionality of your application you are ready to set up your server to server the front end files
* Run `npm run build`
* Use express.static to serve the build from your server.

<b>Congratulations! You've completed 31 competencies and built your second full-stack application!</b>
