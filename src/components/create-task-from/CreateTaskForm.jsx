import { useState } from "react";
import "./CreateTaskForm.css";

export const CreateTaskForm = () => {
  const [formData, setFormData] = useState({
    taskName: "",
    taskDueDate: "",
    taskDetails: "",
  });

  const handleChangeName = (e) => {
    setFormData((prevState) => ({ ...prevState, taskName: e.target.value }));
  };

  const handleChangeDueDate = (e) => {
    setFormData((prevState) => ({ ...prevState, taskDueDate: e.target.value }));
  };
  const handleChangeDetails = (e) => {
    setFormData((prevState) => ({ ...prevState, taskDetails: e.target.value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="create-task-container">
      <form onSubmit={handleSubmitForm}>
        <div className="form-create-task-row">
          <label htmlFor="taskName">Task Name</label>
          <input
            className="input-primary"
            type="text"
            id="taskName"
            name="taskName"
            onChange={handleChangeName}
          />
        </div>
        <div className="form-create-task-row">
          <label htmlFor="taskDueDate">Due Date</label>
          <input
            className="input-primary"
            type="date"
            id="taskDueDate"
            name="taskDueDate"
            onChange={handleChangeDueDate}
          />
        </div>
        <div className="form-create-task-row">
          <label htmlFor="taskDetails">Task Details</label>
          <textarea
            className="input-primary"
            id="taskDetails"
            name="taskDetails"
            rows="4"
            cols="50"
            onChange={handleChangeDetails}
          />
        </div>
        <div className="create-task-btn">
          <button type="submit" className="btn-primaty">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};
