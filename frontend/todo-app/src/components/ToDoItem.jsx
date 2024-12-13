import React from 'react';
import axios from 'axios';

export default function ToDoItem({todo, onUpdate, onDelete}){
    const handleCheckBoxChange = () => {
        const updatedToDo = {
            ...todo,
            completed: !todo.completed
        };
        axios
            .put(`http://127.0.0.1:8000/api/task-update/${todo.id}/`, updatedToDo)
            .then(res => {
                onUpdate(res.data);
            })
            .catch(err => console.log(err));
    };
    const handleDelete = () => {
        axios
            .delete(`http://127.0.0.1:8000/api/task-delete/${todo.id}/`)
            .then(() => {
                onDelete(todo.id);
            })
            .catch(err => console.log(err));
    };
    return(
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <h3>{todo.title}</h3>
            <div class="right-todo">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleCheckBoxChange}
                />
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}