import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoItem from './ToDoItem.jsx';
import AddToDo from './AddTodo.jsx';

export default function ToDoList(){
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/task-list/')
            .then(res => {
                setTodos(res.data)
            })
            .catch(err => console.log(err));
    }, []);
    const handleNewTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };
    const handleUpdateTodo = (updatedTodo) => {
        const updatedTodos = todos.map(todo => {
            todo.id === updatedTodo.id ? updatedTodo : todo;
        });
        setTodos(updatedTodos);
    };
    const handleDeletedTodo = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    };

    return(
        <div>
            <AddToDo onNewTodo={handleNewTodo} />
            {todos.map(todo => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    onUpdate={handleUpdateTodo}
                    onDelete={handleDeletedTodo}
                />
            ))}
        </div>
    );
};