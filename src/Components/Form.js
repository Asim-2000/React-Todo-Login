import React from "react";

const Form = ({ setInputText, setTodos, todos, inputText,setStatus,isAdmin }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
    console.log("Hey");
  };

  const statusHandler = e => {
    setStatus(e.target.value)
  }

  return (
    <form onSubmit={SubmitHandler}>
      {!isAdmin && (
        <div>
          <input
            value={inputText}
            onChange={inputTextHandler}
            className="todo-input"
            type="text"
          />
          <button className="todo-btn" type="submit">
            <i className="fa fa-plus-square"></i>
          </button>
        </div>
      )}

      <div className="select">
        <select onChange={statusHandler} className="filter-todo" name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incompleted">InCompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
