import React from "react";

import './todo-list-item.css'

export default class TodoListItem extends React.Component{
    onClickLabel() {
        console.log(`Done: ${this.props.label}`)
    }
    
    render () {

        const {label , important = false} = this.props
        const style = {
            color: important ? 'steelblue' :'black',
            fontWeight: important? 'bold' : 'normal'
        };
    
        return(
            <span className="todo-list-item">
                <span className="todo-list-item-label" style={style}
                    onClick={ this.onClickLabel }>
                    {label}
                </span> 
                
                <button type="button" className="btn btn-outline-success">
                    <i className="fa fa-exclamation"/>  
                </button>
                <button type="button" className="btn btn-outline-danger">
                    <i className="fa-regular fa-trash"></i>
                </button>
            </span>  
        )
    }
}


