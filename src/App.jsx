import React, {Fragment, useState } from "react";
import { TodoList } from "./components/TodoList";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRecycle} from '@fortawesome/free-solid-svg-icons';

export function App(){
    const [todos, setTodos] = useState([
        {id:1, task: 'Tarea1', completed:false},
        {id:2, task: 'Tarea2', completed:true }
    ])
    return (

    <Fragment>
       
    <TodoList todos={todos}/>
    <input type="text" placeholder="Nueva Tarea" />
    <button> <FontAwesomeIcon icon={faRecycle}/></button>
    {/* estilo del button : style={{fontSize:"15px", color:"blueviolet"}} */}
    </Fragment>
    );
}