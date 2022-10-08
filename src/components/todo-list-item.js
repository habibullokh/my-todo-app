import React from "react";

import './todo-list-item.css'

const TodoListItem = ({label , important = false}) => {

    const style = {
        color: important ? 'tomato' :'black',
        fontWeight: important? 'bold' : 'normal'
    };

    return(
        <span className="todo-list-item basic" style={ style }>{ label }</span>  
    )
}

export default TodoListItem