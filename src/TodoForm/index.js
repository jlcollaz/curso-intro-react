import React from "react";
import {TodoContext} from "../TodoContext"
import './TodoForms.css'

const TodoForm = () => {
  const [newTodoValue, setnewTodoValue] = React.useState();

  const {addTodo, setOpenModal} = React.useContext(TodoContext);

  const onChange = (event) => {
    setnewTodoValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }
  const onCancel = () => {
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To Do</label>
      <textarea
        placeholder="Escribe una nueva tarea"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
