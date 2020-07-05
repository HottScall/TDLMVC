<h1 align="centre">MVC Model</h1>

Model - This manages the data of the application, in this project that will be the actual "todo's" and the relevant methods that will allow you to create, update and delete them.

View - This is how the data is displayed. In this application that will be rendered HTML in the DOM & css.

Controller - This connects the model and the view together. It takes the users input such as clicking or typing and handles all the callbacks relating to user interaction.

<h1 align="centre">Process</h1>

<h3 align="centre">Index.html</h3>

- Add initial template information to the index.html file. This will not change throughout the application as the JS file will manage everything for us.

<h3 align="centre">Script.js</h3>

- Start by adding the model and view class each with an empty constructor function. Then add a controller with a constructor function that takes model and view as arguments, set both those arguments using this keyword.
- Create an instance of the app which is set to a new Controller which takes a new model and a new view.

<h5 align="centre">Model</h5>

Its initially best to focus on the model as this doesnt have to handle any sort of events or DOM manipulation. It's simply storing and modifying data.

The state of the model is an array of objects populated with some pre made data. Each object consists of an id, text and whether it's completed or not, intially completed will be set to false.

AddTodo:

Create addToDo method where an instance of todo takes in the usual 3 objects:

id: asks whether the length of the todo's id is greater than zero, if so take take the length of the todo's id and add 1, if not stay at 1.

_Ternary Operators - Remember these are used when something should evaluate to true or false. Anything before the ? is the condition, before the question mark is the first expression, after the question mark is the second expression_

text: takes the argument todoText

completed: false

Then push the the todo into the todos array.

Edit Todo:

Map through all the todos and replace the text of the todo with the specified id

Delete Todo:

Filter a todo out of the array by id

Toggle Todo:

Map through all the todo's and check that the todo.id is equal to the id. Then the todo is either not todo.complete (remember that completed is originally set as flase, this is the opposite of false) or the to do remains the same.

Conclusion of Model: So now we have a a created model with methods which do all of the things through CRUD. We can create todos, edit them, delete them and toggle them as completed.

You should now be able to test this out in the browser, you won't see anything because there is no view but you can use the console to add and delete them using commands like:

app.model.addToDo('get lagging')

then check the todos array with:

app.model.todos

<h5 align="centre">View</h5>

_Note_ Neither the Model or the Controller should know any details of the view, the view should represent the DOM, HTML and CSS only.

- Create helper methods for to both retrieve and create and element.
- Firstly create an element with an optional css tag

_Read about creating and getting Elements. This is important information to know_

- Now within the constructor you set up all the things that you will need within your view which includes;

  - The root element of the app (#root)
  - The title heading (h1)
  - The form, the input and the submit button (form, input and submit)
  - The rendered list (ul)

- Ensure to make all these variables so you can easily access them throughout your code.

_Note_ Ensure that you understand creating Elements, getting Elements and the .notation calls such as type, placeholder, textContext and append!

- Now create a getter and a resetter method, set them both as private methods (with underscores) to ensure they are not used outside of the class.

This now finishes the set up of the view with the most complex part coming next, displaying the todos and ensuring they are added or deleted upon user request.

Displaying Todo's.

We have created a ul element for the todo's, but in order to display them we need to create a displayTodo method which will reset the list and display the new list every time a user creates, deletes, edits or check's off a to do. This will keep the view in sync with the model.

So the first thing we need to do is remove all the todo nodes everytime it's called then run a check whether there are any to do's already exist...

- if there are no todo's then we'll display an empty list message to the user.
- else we'll loop through the todo's and display a checkbox, span and a delete button for each to do

- Once this is completed append all the list nodes for the todo list app

Now the view is set up and the model is set up, We just need a way to connect events that watch for user input and handlers that handle the output of an event. The console currently acts as a controller so you can add and remove todos through it.

<h5 align="centre">Controller</h5>

And here it is, the link between the model and the view. Currently our constructor function contain the model and view arguments.

The first link we create is a is a method that calls displayToDo's and every time a To Do changes. We can also call it once in the constructor function to display the initial to do's if there are any.

The controller will handle all the events after they are fired. When you submit a todo, click edit, check the checkbox or click the button delete a todo and event is then fired. The view will listen for those events because they are the user input of the view, but it will dispatch the responsibility of the action to the controller.

So you create handlers for those events in the controller. See lines 150 - 166.

Setting up event listeners:

So the handles are in place but now we must flip back to the view and add event listeners. We'll respond to the submit, click and change events on the todo list.
