import { useState } from "react";
import "./CreateTaskForm.css";

export const CreateTaskForm = ({ addTask }) => {
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

  const resetForm = () => {
    setFormData({
      taskName: "",
      taskDueDate: "",
      taskDetails: "",
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const newTask = {
      name: formData.taskName,
      details: formData.taskDetails,
      dueDate: formData.taskDueDate,
    };

    addTask(newTask);
    resetForm();
  };

  return (
    <div className="create-task-container">
      <form onSubmit={handleSubmitForm}>
        <div className="form-create-task-row">
          <label htmlFor="taskName">Task Name</label>
          <input
            value={formData.taskName}
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
            value={formData.taskDueDate}
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
            value={formData.taskDetails}
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
