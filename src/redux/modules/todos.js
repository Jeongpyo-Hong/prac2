// 액션 타입
const ADD_TODO = "ADD_TODO";

// 액션 객체
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// 초기 상태값
const initialState = {
  todo: [
    {
      id: 0,
      title: "투두를 완성하자",
    },
  ],
};

// 리듀서
const todos = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todo, { title: action.payload }],
        // 기존 State에 NEW state 연결
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;
