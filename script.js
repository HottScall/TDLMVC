class Model {
  constructor() {
    this.todos = [
      { id: 1, text: "Learn MVC", completed: false },
      { id: 2, text: "Learn Javascript", completed: false },
      { id: 3, text: "Learn React next", completed: false }
    ];
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
