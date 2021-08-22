import React, {useContext, useEffect, useState} from 'react';
import './Todos-body.css'
import TodoItem from "./TodoItem/TodoItem";
import AddNewItem from "./CreateTodo/AddNewItem";
import { AppContext } from "../../Context/ContextProvider"



const TodosBody = () => {
    function getTodoByFilter(){
        if(filter === "All")
            if(ActiveTodos.length === 0 && FinishedTodos.length === 0)
                return <div className="empty"> Tasks list is empty</div>
            else
                return [...ActiveTodos, ...FinishedTodos]
        else if(filter === "Active")
            return ActiveTodos.length > 0 ? ActiveTodos : <div className="empty">Active Tasks list is empty</div>
        else
            return FinishedTodos.length > 0 ? FinishedTodos : <div className="empty">Finished Tasks list is empty</div>

    }
    const {todoList,getItems} = useContext(AppContext);
    useEffect(getItems,[])
    const [filter,setFilter] = useState("All")

    const ActiveTodos = todoList.filter(item=> item.isFinished===false)
        .map( item => <TodoItem body={item.body} isFinished={item.isFinished} id={item.id} key={item.id}/>)
    const FinishedTodos = todoList.filter(item=> item.isFinished===true)
        .map( item => <TodoItem body={item.body} isFinished={item.isFinished} id={item.id} key={item.id}/>)
    return (
        <div className="todos-body">
            <AddNewItem/>
            <h2><span className={filter==="All" ? "tasks-status selected":"tasks-status"}
                      onClick={() => setFilter("All")}>All tasks  </span> /
            <span className={filter==="Active" ? "tasks-status selected":"tasks-status"}
                      onClick={() => setFilter("Active")}>Active Tasks </span> /
                <span className={filter==="Finished" ? "tasks-status selected":"tasks-status"}
                      onClick={() => setFilter("Finished")}>Finished Tasks</span></h2>
            <div className="item-list">
                {getTodoByFilter()}
            </div>
        </div>
    );
}

export default TodosBody;