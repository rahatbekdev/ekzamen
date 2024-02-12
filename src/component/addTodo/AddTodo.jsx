import React, { useState, useEffect } from "react";
import axios from "axios";
import scss from './AddTodo.module.scss'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const apiUrl = 'https://api.elchocrud.pro/api/v1/154b8c2e288dee86e4f1f9dd62316fde/tdos';

  // const apiUrl = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(apiUrl);
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = async () => {
    try {
      if (newTodo.trim() !== "") {
        await axios.post(apiUrl, {
          value: newTodo
        });
        setNewTodo("");
        fetchTodos();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (_id) => {
    try {
      await axios.delete(`${apiUrl}/${_id}`);
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={scss.divOne}>
      <div className={scss.divTwo}>
        <input
        className={scss.inputList}
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((el) => (
          <li className={scss.divBox} key={el.id}>
            {el.value}
            <button onClick={() => deleteTodo(el._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
