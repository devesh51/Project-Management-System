import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleProjectAddpage } from "../utils/pageviewSlice";
import NewProject from "./NewProject";
import NoProjectImg from "../asset/no-projects.png";

const NoProjectSelected = () => {
  const dispatch = useDispatch();
  const { showProjectAddpage, showEditProjectPage } = useSelector(
    (store) => store.pageView
  );

  function StartAddProject() {
    dispatch(toggleProjectAddpage());
  }

  return showProjectAddpage || showEditProjectPage ? (
    <NewProject project />
  ) : (
    <div className="mt-24 text-center w-2/3">
      <img
        src={NoProjectImg}
        alt="empty image"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        {" "}
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p>
        <Button onClick={StartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
