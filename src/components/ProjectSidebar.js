import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleProjectAddpage } from "../utils/pageviewSlice";
import { setSelectedProjectId } from "../utils/projectSlice";

const ProjectSidebar = ({ onHandleSelectProject }) => {
  const dispatch = useDispatch();
  const projectDetails = useSelector((store) => store.projectStore.projects);

  function StartAddProject() {
    dispatch(toggleProjectAddpage());
    dispatch(setSelectedProjectId({ id: null }));
  }

  const showProjectInfo = (id) => {
    onHandleSelectProject(id);
    dispatch(toggleProjectAddpage(false));
  };

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-800 text-stone-100 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <Button
          className="text-stone-200 bg-stone-700 p-2 rounded hover:bg-stone-600 "
          onClick={StartAddProject}
        >
          {" "}
          + Add Project{" "}
        </Button>
      </div>
      <ul className="mt-8">
        {projectDetails.map((item) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
          if (item.id) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={item.id}>
              <button
                onClick={() => showProjectInfo(item.id)}
                className={cssClasses}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;
