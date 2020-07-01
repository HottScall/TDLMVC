class Model {
  constructor() {}
}

class View {
  constructor() {}
}

class Controller {
  constructor(model, view) {
    (this.model = model), (this.view = view);
  }
}

var app = new Controller(new Model(), new View());
