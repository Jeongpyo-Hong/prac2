import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/modules/todos";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const [todo, setTodo] = useState();

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const onClickHandler = () => {
    console.log(todo);
    dispatch(addTodo(todo));
  };

  return (
    <div>
      <div>
        <div>투두리스트 만들기</div>
        <input type="text" onChange={onChangeHandler} />
        <button onClick={onClickHandler}>추가하기</button>
      </div>

      <div>
        {todo}
        {todos.map((value, index) => {
          console.log(value);
          return <div key={index}>{value.title}</div>;
        })}
      </div>
    </div>
  );
};

export default App;
