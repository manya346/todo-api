import './App.css'

import ToDoList from './components/ToDoList'

export default function App(){
    return(
        <div className="Container">
            <h1>ToDo App</h1>
            <ToDoList />
        </div>
    )
}