import { FaTimes } from "react-icons/fa";

const Task = (props) => {
    const { task, deleteTask } = props;
    return (
        <div className={'task'}>
            <h3>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => {deleteTask(task.id)}}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;