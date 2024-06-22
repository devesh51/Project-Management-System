import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewTask, setTaskDetail } from "../utils/projectSlice";

const NewTask = ({
  enteredTask,
  setEnteredTask,
  editTaskId,
  setEditTaskId,
}) => {
  const dispatch = useDispatch();
  const selectedProjectId = useSelector(
    (store) => store.projectStore.selectedProjectId
  );

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    const taskId = Math.random(); //TODO: check if no id will be same
    dispatch(
      createNewTask({
        selectedProjectId,
        task: { id: taskId, content: enteredTask, isCompleted: false },
      })
    );
    setEnteredTask("");
  }

  const editTaskHandler = () => {
    dispatch(
      setTaskDetail({ id: editTaskId, key: "content", value: enteredTask })
    );
    setEnteredTask("");
    setEditTaskId(null);
  };
  console.log(editTaskId, "checkoutid");
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={editTaskId ? editTaskHandler : handleClick}
      >
        {!editTaskId ? "Add Task" : "Update Task"}
      </button>
    </div>
  );
};

export default NewTask;
