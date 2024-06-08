import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projectStore",
  initialState: {
    projects: [],
    selectedProjectId: null,
  },
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action) => {
      const selectedProjectIdx = state.projects.findIndex(
        (project) => project.id === action.payload.id
      );
      state.projects.splice(selectedProjectIdx, 1);
      state.selectedProjectId = null;
    },
    clearProject: (state) => {
      state.projects.length = 0;
    },
    setSelectedProjectId: (state, action) => {
      state.selectedProjectId = action.payload.id;
    },
    createNewTask: (state, action) => {
      state.projects
        .find((project) => project.id === action.payload.selectedProjectId)
        .tasks.push(action.payload.task);
    },
    deleteTask: (state, action) => {
      const selectedProject = state.projects.find(
        (project) => project.id === state.selectedProjectId
      );
      const selectedTaskIdx = selectedProject.tasks.findIndex(
        (item) => item.id === action.payload.id
      );
      selectedProject.tasks.splice(selectedTaskIdx, 1);
    },
    setTaskDetail: (state, action) => {
      const selectedProject = state.projects.find(
        (project) => project.id === state.selectedProjectId
      );
      const selectedTaskIdx = selectedProject.tasks.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(action, selectedTaskIdx, "checkouthere");
      selectedProject.tasks[selectedTaskIdx][action.payload.key] =
        action.payload.value;
    },
    setProjectDetails: (state, action) => {
      let selectedProject = state.projects.find(
        (item) => item.id === state.selectedProjectId
      );
      selectedProject.title = action.payload.title;
      selectedProject.description = action.payload.description;
      selectedProject.dueDate = action.payload.dueDate;
    },
    toogleTaskCompletion: (state, action) => {
      const selectedProject = state.projects.find(
        (project) => project.id === state.selectedProjectId
      );
      const selectedTaskIdx = selectedProject.tasks.findIndex(
        (item) => item.id === action.payload.id
      );
      selectedProject.tasks[selectedTaskIdx].isCompleted =
        !selectedProject.tasks[selectedTaskIdx].isCompleted;
    },
  },
});

export const {
  addProject,
  removeProject,
  clearProject,
  setSelectedProjectId,
  createNewTask,
  deleteTask,
  setTaskDetail,
  setProjectDetails,
  toogleTaskCompletion,
} = projectSlice.actions;
export default projectSlice.reducer;
