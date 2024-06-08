import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice";
import userReducer from "./userSlice";
import pageaddReducer from "./pageviewSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    projectStore: projectReducer,
    pageView: pageaddReducer,
  },
});

export default appStore;
