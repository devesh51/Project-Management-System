import React from "react";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { removeProject } from "../utils/projectSlice";
import { toggleProjectEditPage } from "../utils/pageviewSlice";

const ShowSelectedProject = ({ projectID }) => {
  // Subscribing the store using a useselector hook
  const projectDetails = useSelector((store) => store.projectStore.projects);
  const selectedProject = projectDetails.find((proj) => proj.id === projectID);
  // console.log(projectDetails, "projectdetails");

  const dispatch = useDispatch();
  const DeleteProject = (id) => {
    dispatch(removeProject(id));
  };

  const editProjectHandler = () => {
    dispatch(toggleProjectEditPage());
  };

  return (
    <div className="w-[35rem] mt-16 p-6 bg-white rounded-lg shadow-md">
      {selectedProject && (
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">
              {selectedProject.title}
            </h1>
            <div className="flex space-x-2">
              <button
                className="text-stone-600 hover:text-stone-950"
                onClick={editProjectHandler}
              >
                Edit
              </button>
              <button
                className="text-stone-600 hover:text-stone-950"
                onClick={() => DeleteProject(selectedProject.id)}
              >
                Delete
              </button>
            </div>
          </div>
          <p className="mb-4 text-stone-400">{selectedProject.dueDate}</p>
          <p className="text-stone-600 whitespace-pre-wrap">
            {selectedProject.description}
          </p>
        </header>
      )}
      {selectedProject && <Task tasksData={selectedProject.tasks} />}
    </div>
  );
};

export default ShowSelectedProject;
