import { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container-fluid m-5 d-flex justify-content-center">
      <div className="row justify-content-center" style={{ width: "100%" }}>
        <div className="col-md-5  mt-4">
          <form onSubmit={handleSubmit} className="d-flex">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Add a new todo"
              className="form-control"
              style={{ width: "400px", height: "45px" }}
            />
            <button
              type="submit"
              className="btn btn-danger ms-4 "
              style={{ width: "150px", height: "45px" }}
            >
              Add Todo
            </button>
          </form>
        </div>
        <div
          className="col-md-5 mt-4 bg-white"
          style={{ marginTop: 0, borderRadius: "10px" }}
        >
          <h2 className="text-dark">Todo List</h2>
          <ul className="list-group">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{todo.text}</span>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
