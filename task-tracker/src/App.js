import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([
        {id: 1, text: 'Doctors', day: '6 dec', reminder: true},
        {id: 2, text: 'Work', day: '6 dec', reminder: true},
        {id: 3, text: 'Chil', day: '6 dec', reminder: false},
    ]);

    const deleteTask = (id) => {
        setTasks(tasks.filter(el => el.id !== id))
    }

    return (
        <div className={'container'}>
            <Header title={'Tracker'}/>
            {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} /> : 'No Tasks'}
        </div>
    )
}

export default App;