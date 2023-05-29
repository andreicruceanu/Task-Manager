import "./CreateTaskForm.css";
import { useForm } from "react-hook-form";

export const CreateTaskForm = ({ addTask }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmitForm = (data) => {
    const newTask = {
      name: data.taskName,
      dueDate: data.taskDueDate,
      details: data.taskDetails,
    };

    addTask(newTask);
  };

  return (
    <div className="create-task-container">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form-create-task-row">
          <label htmlFor="taskName">Task Name</label>
          <input
            {...register("taskName", {
              required: { value: true, message: "Task Name is required" },
              maxLength: {
                value: 30,
                message: "Maximum allowed lenght is 30 charecters",
              },
            })}
            className={`input-primary ${errors.taskName && "error"}`}
            type="text"
            id="taskName"
            name="taskName"
          />
          {errors.taskName && (
            <p className="error-message">{errors.taskName.message}</p>
          )}
        </div>
        <div className="form-create-task-row">
          <label htmlFor="taskDueDate">Due Date</label>
          <input
            {...register("taskDueDate", {
              required: { value: true, message: "Due Date is required" },
            })}
            className={`input-primary ${errors.taskDueDate && "error"}`}
            type="date"
            id="taskDueDate"
            name="taskDueDate"
            min={new Date().toISOString().split("T")[0]}
          />
          {errors.taskDueDate && (
            <p className="error-message">{errors.taskDueDate.message}</p>
          )}
        </div>
        <div className="form-create-task-row">
          <label htmlFor="taskDetails">Task Details</label>
          <textarea
            {...register("taskDetails", {
              required: { value: true, message: "Task Details is required" },
            })}
            className={`input-primary ${errors.taskDetails && "error"}`}
            id="taskDetails"
            name="taskDetails"
            rows="4"
            cols="50"
          />
          {errors.taskDetails && (
            <p className="error-message">{errors.taskDetails.message}</p>
          )}
        </div>
        <div className="create-task-btn text-center">
          <button type="submit" className="btn-primary" disabled={!isValid}>
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};
