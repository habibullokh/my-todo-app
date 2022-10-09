import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";

import './index.css'

const App = () => {
  
  const todoData = [
    {label:'Drink Cofee' , important: false, id: 1},
    {label:'Make Awsome App' , important: true, id: 2},
    {label:'Have a Lunch' , important: false, id: 3}
  ]

  return(
    <div className="container">
      <AppHeader/>
      <SearchPanel/>
      <TodoList todos = { todoData } />
      <ItemStatusFilter />  
    </div>
  )
};

ReactDOM.render(<App/>,
  document.getElementById('root')
)