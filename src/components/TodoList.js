import React from 'react';
import TodoInput from './TodoInput';
import Todo from "./Todo.js";
import "./TodoList.css";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useSelector, useDispatch} from "react-redux";
import {completeTodo, addTodo, removeTodo, updateTodo } from "../redux/action";

const TodoList = () => {
    const state= useSelector((state) => ({ ...state.todos}));
    const dispatch= useDispatch();

    const create = (newTodo) => {
        dispatch(addTodo(newTodo));
    };

    const update = (id, updatedTask) => {
        dispatch(updateTodo({id, updatedTask}))
    }

  return (
    <div className='TodoList'>
        <h1> To-Do App</h1>
        <TodoInput createTodo={create} />
        <ul>
            <TransitionGroup >
                {state.todos && state.todos.map((todo)=>{
                    return(
                        <CSSTransition key={todo.id} className="todo">
                            <Todo
                            key={todo.id}
                            id={todo.id}
                            task={todo.task}
                            completed={todo.completed}
                            toggleTodo={() => dispatch(completeTodo(todo))}
                            removeTodo={() => dispatch(removeTodo(todo))}
                            updateTodo={update}
                            />
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </ul>
    </div>
  );
};

export default TodoList