import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([
        {id: 0, text: 'Doctors', day: '6 dec', reminder: false},
        {id: 1, text: 'Work', day: '6 dec', reminder: false},
        {id: 2, text: 'Chil', day: '6 dec', reminder: false},
    ]);

    const addTask = (text, day, reminder) => {
        setTasks([
            ...tasks,
            {id: tasks.length, text: text, day: day, reminder: reminder}
        ])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(el => el.id !== id))
    }

    const toggleReminder = (id) => {
        setTasks(tasks.map(el => {
            return el.id === id ? {...el, reminder: !el.reminder} : el;
        }))
    }

    const showForm = () => () =>  {
        setShowAddTask(!showAddTask)
    }

    return (
        <div className={'container'}>
            <Header title={'Tracker'} onAddClick={showForm()} toggleForm={showAddTask}/>
            {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/> : 'No Tasks'}
            {showAddTask && <AddTask addTask={addTask}/>}
        </div>
    )
}

export default App;