import React from 'react';

const Todo = ({ text,todo,todos,setTodos,isAdmin}) => {
    
    const deleteHandler = () => {
        setTodos(todos.filter(el=>el.id!==todo.id))

    }

    const completeHandler = () => {

        setTodos(todos.map(el => {
            if (el.id === todo.id) {
                return {
                    ...el,completed:!el.completed
                }
            }
            return el;
        }))
    }

    return (
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
        {!isAdmin && (
          <div>
            <button onClick={completeHandler} className="complete-btn">
              <i className="fa fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        )}
      </div>
    );
}

export default Todo;