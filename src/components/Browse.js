import React from "react";
import ProjectSidebar from "./ProjectSidebar";
import NoProjectSelected from "./NoProjectSelected";

import { useDispatch, useSelector } from "react-redux";
import ShowSelectedProject from "./ShowSelectedProject";
import { setSelectedProjectId } from "../utils/projectSlice";
import PerformanceChart from "./PerformanceChart";
import Header from "./Header";

const Browse = () => {
  const dispatch = useDispatch();
  const selectedProjectId = useSelector(
    (store) => store.projectStore.selectedProjectId
  );
  const { showEditProjectPage, showProjectAddpage } = useSelector(
    (store) => store.pageView
  );

  const handleSelectedProject = (id) => {
    dispatch(setSelectedProjectId({ id }));
  };

  return (
    <div>
      <Header />
      <main className="h-screen my-2 flex gap-8">
        <ProjectSidebar onHandleSelectProject={handleSelectedProject} />
        {selectedProjectId && !showEditProjectPage && !showProjectAddpage ? (
          <ShowSelectedProject projectID={selectedProjectId} />
        ) : (
          <NoProjectSelected />
        )}
        {selectedProjectId && (
          <PerformanceChart projectID={selectedProjectId} />
        )}
      </main>
    </div>
  );
};

export default Browse;
