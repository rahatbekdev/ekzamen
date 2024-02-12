import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./component/header/Header";
import AddTodo from "./component/addTodo/AddTodo";

function App() {
  const [count, setCount] = useState([]);

  return (
    <>
      <Header />
      <AddTodo />
    </>
  );
}

export default App;
