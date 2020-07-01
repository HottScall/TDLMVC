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
  constructor() {}
}

class Controller {
  constructor(model, view) {
    (this.model = model), (this.view = view);
  }
}

const app = new Controller(new Model(), new View());
