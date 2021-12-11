import { useState } from "react";

const AddTask = (props) => {
  const { addTask } = props;
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleChangeText = () => (e) => setText(text + e.nativeEvent.data);
  const handleChangeDay = () => (e) => setDay(day + e.nativeEvent.data);
  const handleChangeReminder = () => (e) => setReminder(!reminder);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return;
    }

    addTask(text, day, reminder);
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={handleChangeText()}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={handleChangeDay()}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          placeholder="Set Reminder"
          value={reminder}
          onChange={handleChangeReminder()}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
