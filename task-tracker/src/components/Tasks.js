import Task from "./Task";

const Tasks = (props) => {
    const { tasks, deleteTask, toggleReminder } = props;
    return (
        <>
            {tasks.map(task => {
                return (
                    <Task key={task.id} task={task} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
                )
            })}
        </>
    )
}

export default Tasks;