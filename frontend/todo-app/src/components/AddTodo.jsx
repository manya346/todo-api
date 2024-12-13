import React, { useState } from 'react';
import axios from 'axios';

export default function AddToDo(onNewToDo){
        const [title, setTitle] = useState('');
        const handleSubmit = (e) => {
            e.preventDefault();
            
            const newToDo = {
                title,
                completed: false
            };
            axios
                .post('http://127.0.0.1:8000/api/task-create/', newToDo)
                .then(res => {
                    onNewToDo(res.data);
                    setTitle('');
                })
                .catch(err => console.log(err));
        };
        return(
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <button type="submit">Add ToDo</button>
            </form>
        )

}