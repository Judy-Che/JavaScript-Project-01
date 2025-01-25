const todos = [
  {
    title: "Initial Todo",
    description: "This is the initial todo",
    complete: false,
  }
];

function addTodo(title, description) {
  todos.push({
    title,
    description,
    complete: false
  });
}

function removeTodo(index) {
  if (index >= 0 && index < todos.length) {
    todos.splice(index, 1);
  } else {
    console.log("Invalid index. Unable to remove todo.");
  }
}

function editTodo(index, title, description) {
  if (index >= 0 && index < todos.length) {
    todos[index].title = title || todos[index].title;
    todos[index].description = description || todos[index].description;
  } else {
    console.log("Invalid index. Unable to edit todo.");
  }
}

function markTodoComplete(index) {
  if (index >= 0 && index < todos.length) {
    todos[index].complete = true;
  } else {
    console.log("Invalid index. Unable to mark todo as complete.");
  }
}

function displayTodoLength() {
  console.log(`You have ${todos.length} todos`);
  const completedCount = todos.filter(todo => todo.complete).length;
  console.log(`Completed todos: ${completedCount}`);
}

function app() {
  console.log('Welcome to the Todo Application');
  console.log('================================');
  
  // Add todos
  addTodo("Second Todo", "This is the second todo");
  addTodo("Third Todo", "This is the third todo");

  // Remove a todo (optional example)
  // removeTodo(1);

  // Edit a todo
  editTodo(1, "Updated Second Todo", "This is the updated second todo");

  // Mark a todo as complete
  markTodoComplete(1);

  // Display todo length
  displayTodoLength();

  console.log('Here is a list of your todos:');
  
  // Print the todos
  todos.forEach((todo, index) => {
    console.log(`Todo ${index + 1}`);
    console.log(`The title of the todo: ${todo.title}`);
    console.log(`The description of the todo: ${todo.description}`);
    console.log(`This todo is ${todo.complete ? "complete" : "not complete"}`);
  });
}

app();
