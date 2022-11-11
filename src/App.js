import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

const { useState } = require("react");

// const App = () => {
//   const [count, setCount] = useState(0);

//   const increase = () => {
//     setCount((prev) => prev +1);
//   };

//   return (
//     <div>
//       <h1>부모</h1>
//       <hr />
//       <Child1 data={count} setData={increase} />
//     </div>

//     // callback 구조(자식이 부모 함수를 사용)

//   );
// };

// const App = () => {
//   const [count, setCount] = useState();

//   const increase = () => {
//     setCount((prev) => prev +1);
//   };

//   return (
//     <div>
//       <h1>부모</h1>
//       <hr />
//       <Child1 setData={increase} />
//       <Child2 data={count} />
//     </div>

//    // 부모는 자식에게 데이터를 주고, 기능은 자식1이 실행해서 자식2에게 넘겨주는 구조

//   );
// };

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    const tempTodoList = [...todoList];
    tempTodoList.push(todo);
    setTodoList(tempTodoList);
  };

  const deleteTodo = (index) => {
    const tempTodoList = [...todoList];
    tempTodoList.splice(index, 1);
    setTodoList(tempTodoList);
  };

  return (
    <div>
      <h1>부모</h1>
      <hr />
      <Child1 setData={addTodo} />
      <Child2 data={todoList} deleteData={deleteTodo} />
    </div>

    // 부모는 자식에게 데이터를 주고, 기능은 자식1이 실행해서 자식2에게 넘겨주는 구조
  );
};

export default App;
