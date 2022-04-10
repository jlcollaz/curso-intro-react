import React from 'react';
import './CreateTodoButtom.css';

const TodoButton = (props) => {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  }

  return ( 
    <button className="CreateTodoButton"
    onClick={onClickButton}>+</button>
   );
}
 
export default TodoButton;