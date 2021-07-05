import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import { useState } from 'react';
import UseArrayHook from './components/UseArrayHook';
import ArrayRemove from './components/ArrayRemove';

function App() {

  
  const todos = UseArrayHook(["a","c","d"]);



  return (
    <div className="App">
      <Counter/>
      <hr/>
      <CounterHooks/>
      <div>
        <div> MyToDos </div>
        <button onClick={()=>todos.add(Math.random())}>Add</button>
        <ul>
          {todos.value.map((todo,i)=> (
            <li key={i}>
              {todo}-{i}
              <button onClick={()=>todos.removeIndex(i)}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={todos.clear}>Clear Todos</button>
        <hr/>
        <ArrayRemove/>
      </div>
    </div>
  );
}

export default App;
