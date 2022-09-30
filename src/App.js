import './App.css';
import { useState } from 'react';
import {useTodoLayerValue} from "./context/TodoContext";
import TodoList from './components/TodoList';

function App() {
  const [{todos}, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();

    if(!content && content.length <1) return;

    const newTodo = {
      id: Math.floor(Math.random() * 423124569),
      content : content,
      isCompleted : false,
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    setContent("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input  type="text" 
                className="todo-input" 
                onChange={(event => setContent(event.target.value))} 
                value={content} />
        <button className="todo-button">EKLE</button>
      </form>

      {/* TODO LİSTESİ */}
      <TodoList todos = {todos} />
    </div>
  );
}

export default App;
