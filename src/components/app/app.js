import React from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

import './app.css'

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


export default App