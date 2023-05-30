import React,{useState} from 'react'
import "./TodoInput.css";

const TodoInput = ({createTodo}) => {
    const [task,setTask]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(task);
        setTask("");
    };
    return (
        <form className="TodoInput" onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Enter Task"
            id="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            <button>Add Task</button>
        </form>
    )
}


export default TodoInput;