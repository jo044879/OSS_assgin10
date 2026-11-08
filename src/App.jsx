import { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [inputText, setInputText] = useState('');

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault(); 
    if (inputText === '') return;

    setTodos([...todos, { text: inputText, completed: false }]);
    setInputText('');
  };

  const deleteTodo = (index) => {
    const newList = todos.filter((_, id) => index !== id);
    setTodos(newList);
  };

  const toggleTodo = (index) => {
    const newList = todos.map((todo, id) => {
      if (id === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newList);
  };

  return (
    <div id='main-container'>
      <Header/>
      <main>
        <form onSubmit={addTodo}>
          <div id='todo-container'>
            <h2 id='todo-list-header'>오늘의 할 일</h2>
            <div id='todo-input-group'>
              <input 
                type="text" 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)} 
                placeholder='Type something...' 
                maxLength={100}
              />
              <button type="submit" id='submit_button'>추가</button>
            </div>
          </div>
        </form>
        <ul id='todo-list'>
          {todos?.map((todo, id) => {
            return <Todo key={id} id={id} todo={todo} onDelete={deleteTodo} onToggle={toggleTodo} />
          })}
        </ul>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
