import { createSlice } from "@reduxjs/toolkit";

const pageviewSlice = createSlice({
  name: "pageView",
  initialState: {
    showProjectAddpage: false,
    showEditProjectPage: false,
  },
  reducers: {
    toggleProjectAddpage: (state, action) => {
      state.showProjectAddpage =
        action.payload === false ? false : !state.showProjectAddpage;
    },
    toggleProjectEditPage: (state, action) => {
      state.showEditProjectPage = !state.showEditProjectPage;
    },
  },
});

export const { toggleProjectAddpage, toggleProjectEditPage } =
  pageviewSlice.actions;
export default pageviewSlice.reducer;
