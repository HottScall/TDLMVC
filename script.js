class Model {
  constructor() {
    this.todos = [
      { id: 1, text: "Learn MVC", complete: false },
      { id: 2, text: "Learn Javascript", complete: false },
      { id: 3, text: "Learn React next", complete: false }
    ];
  }

  addToDo(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false
    };
    this.todos.push(todo);
  }

  editToDo(id, updatedText) {
    this.todos = this.todo.map(todo =>
      todo.id === id
        ? { id: todo.id, text: updatedText, complete: todo.complete }
        : todo
    );
  }

  deleteToDo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleToDo(id) {
    this.todos = this.todos.map(
      todo =>
        (todo.id = id
          ? { id: todo.id, text: todo.text, complete: !todo.complete }
          : todo)
    );
  }
}

class View {
  constructor() {
    // this communicates with the root in HTML file to render the below
    this.app = this.getElement("#root");

    // The title of the application
    this.title = this.createElement("h1");
    this.title.getContext = "To Do's ";

    // The form element
    this.form = this.createElement("form");

    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Add To Do";
    this.input.name = "todo";

    // The Submit button
    this.submitButton = this.createElement("button");
    this.submitButton.getContext = "Submit";

    // The visual representation of the to do list
    this.toDoList = this.createElement("ul", "todo-list");

    //Append the input and submit button to the form
    this.form.append(this.input, this.submitButton);

    // Append the title, form and todo list to the app
    this.app.append(this.title, this.form, this.toDoList);
  }

  displayTodo() {
    // Delete all the nodes upon any action being taken
    while (this.todoList.firstChild) {
      this.toDoList.removeChild(this.toDoList.firstChild);
    }

    // show the default message
    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContext("Nothing to do. Add something to do!");
      this.toDoList.append(p);
    } else {
      // create a todo item node for each todo in state
      todos.forEach(todo => {
        const li = this.createElement("li");
        li.id = todo.id;

        //Each to do list item will a check box you can toggle
        const checkbox = this.createElement("input");
        checkbox.type("checkbox");
        checkbox.checked = todo.complete;
      });

      // The todo item text will be in a contenteditable span
      const span = this.createElement("span");
      span.contenteditable = true;
      span.classList.add("editable");

      // if the todo list is completed it will have a strikethrough

      if (todo.complete) {
        const strike = createElement("s");
        strike.textContext = todo.text;
        span.append(strike);
      } else {
        // Just displat the text
        span.textContext = todo.text;
      }

      // The todo's will also have a delete button
      const deleteButton = this.createElement("button", "delete");
      deleteButton.textContext = "delete";
      li.append("checkbox", "span", "deleteButton");

      // Append nodes to the todo list
      this.toDoList.append(li);
    }
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  get _todoText() {
    return this.input.value;
  }

  _resetInput() {
    this.input.value = "";
  }
}

class Controller {
  constructor(model, view) {
    (this.model = model), (this.view = view);

    // display the initial todo's (if any)
    this.onTodoListChanged(this.model.todos);
  }

  onTodoListChanged = todos => {
    this.view.displayTodo(todos);
  };

  handleAddTodo = todoText => {
    this.model.addToDo(todoText);
  };

  handleEditTodo = (id, todoText) => {
    this.model.editToDo(id, todoText);
  };

  handleDeleteTodo = id => {
    this.model.deleteToDo(id);
  };

  handleToggleTodo = id => {
    this.model.toggleToDo(id);
  };
}

const app = new Controller(new Model(), new View());
