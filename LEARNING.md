<h1 align="centre">MVC Model</h1>

Model - This manages the data of the application, in this project that will be the actual "todo's" and the relevant methods that will allow you to create, update and delete them.

View - This is how the data is displayed. In this application that will be rendered HTML in the DOM & css.

Controller - This connects the model and the view together. It takes the users input such as clicking or typing and handles all the callbacks relating to user interaction.

<h1 align="centre">Process</h1>

Index.html

- Add initial template information to the index.html file. This will not change throughout the application as the JS file will manage everything for us.

Script.js

- Start by adding the model and view class each with an empty constructor function. Then add a controller with a constructor function that takes model and view as arguments, set both those arguments using this keyword.
- Create an instance of the app which is set to a new Controller which takes a new model and a new view.
