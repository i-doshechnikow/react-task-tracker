import { FaTimes } from "react-icons/fa";

const Task = (props) => {
  const { task, deleteTask, toggleReminder } = props;
  return (
    <div
      className={task.reminder ? "task reminder" : "task"}
      onDoubleClick={() => {
        toggleReminder(task.id);
      }}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            deleteTask(task.id);
          }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
