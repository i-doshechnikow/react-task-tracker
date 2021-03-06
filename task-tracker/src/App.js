import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (text, day, reminder) => {
    await fetch(`http://localhost:5000/tasks/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: tasks.length,
        text: text,
        day: day,
        reminder: reminder,
      }),
    });

    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((el) => el.id !== id));
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const toggleReminder = async (id) => {
    let data = await fetchTask(id);
    console.log(data);
    let updTask = { ...data, reminder: !data.reminder };

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    setTasks(
      tasks.map((el) => {
        return el.id === id ? { ...el, reminder: !el.reminder } : el;
      })
    );
  };

  const showForm = () => () => {
    setShowAddTask(!showAddTask);
  };

  const TaskElement = () => {
    return (
      <div>
        <Header
          title={"Tracker"}
          onAddClick={showForm()}
          toggleForm={showAddTask}
        />
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            deleteTask={deleteTask}
            toggleReminder={toggleReminder}
          />
        ) : (
          "No Tasks"
        )}
        {showAddTask && <AddTask addTask={addTask} />}
      </div>
    );
  };

  return (
    <BrowserRouter>
      <div className={"container"}>
        <Routes>
          <Route path="/" element={<TaskElement />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
