import React, { useState } from "react";
import NewTask from "./NewTask";
import { useDispatch } from "react-redux";
import { deleteTask, toogleTaskCompletion } from "../utils/projectSlice";

const Task = ({ tasksData }) => {
  const dispatch = useDispatch();
  const [enteredTask, setEnteredTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);

  const removeTask = (id) => {
    dispatch(deleteTask({ id }));
  };

  const editTaskHandler = (id) => {
    setEditTaskId(id);
    setEnteredTask(tasksData.find((item) => item.id === id).content);
  };

  const taskStatusHandler = (id) => {
    dispatch(toogleTaskCompletion({ id }));
  };

  return (
    <section className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
      <NewTask
        editTaskId={editTaskId}
        setEditTaskId={setEditTaskId}
        enteredTask={enteredTask}
        setEnteredTask={setEnteredTask}
      />
      {!!tasksData.length ? (
        <ul className="space-y-4 mt-8">
          {tasksData.map((item) => (
            <li key={item.id} className="p-4 rounded-md bg-stone-100">
              <div className="flex justify-between items-center">
                <span className="flex-3">{item.content}</span>
                <div className="flex space-x-2">
                  <button
                    className="text-stone-700 hover:text-red-500"
                    onClick={() => removeTask(item.id)}
                  >
                    Clear
                  </button>
                  <button
                    className="text-stone-700 hover:text-red-500"
                    onClick={() => editTaskHandler(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-stone-700 hover:text-green-500"
                    onClick={() => taskStatusHandler(item.id)}
                  >
                    {item.isCompleted ? "Done" : "Yet to be done"}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
    </section>
  );
};

export default Task;
