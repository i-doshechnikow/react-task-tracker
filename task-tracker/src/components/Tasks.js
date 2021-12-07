import Task from "./Task";

const Tasks = (props) => {
    const { tasks, deleteTask } = props;
    return (
        <>
            {tasks.map(task => {
                return (
                    <Task key={task.id} task={task} deleteTask={deleteTask}/>
                )
            })}
        </>
    )
}

export default Tasks;