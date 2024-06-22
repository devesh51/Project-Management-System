import React, { useState, useEffect } from "react";
import { addProject, setProjectDetails } from "../utils/projectSlice";
import Input from "./input";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleProjectAddpage,
  toggleProjectEditPage,
} from "../utils/pageviewSlice";
import NoProjectSelected from "./NoProjectSelected";

const NewProject = () => {
  const [Invalid, setInValid] = useState(false);
  const [showproject, setShowproject] = useState(false);
  const dispatch = useDispatch();
  const { projects, selectedProjectId } = useSelector(
    (store) => store.projectStore
  );
  const showEditProjectPage = useSelector(
    (store) => store.pageView.showEditProjectPage
  );
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const selectedProject = projects.find(
    (proj) => proj.id === selectedProjectId
  );

  useEffect(() => {
    if (selectedProject) {
      setFormData(selectedProject);
    }
  }, []);

  console.log(formData, "cvcjkafdlkjfdsa fds");

  console.log(formData, "check formdata");

  function handleSave() {
    const projectId = Math.random();

    // validation..

    if (
      formData.title.trim() === "" ||
      formData.description.trim() === "" ||
      formData.dueDate.trim() === ""
    ) {
      setInValid(true);
      return;
    }

    dispatch(
      addProject({
        title: formData.title,
        description: formData.description,
        dueDate: formData.dueDate,
        id: projectId,
        tasks: [],
      })
    );
    setShowproject((prev) => !prev);
    dispatch(toggleProjectAddpage());
  }

  function closeModal() {
    setInValid((prev) => !prev);
    return;
  }

  function CancelAddProjcet() {
    dispatch(toggleProjectAddpage());
  }

  function formChangeHandler(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleUpdate(e) {
    dispatch(setProjectDetails(formData));
    dispatch(toggleProjectEditPage());
  }

  return Invalid ? (
    <Modal onCloseModel={closeModal} />
  ) : showproject ? (
    <NoProjectSelected />
  ) : (
    <div className="w-[35rem] mt-16 p-6 bg-white rounded-lg shadow-md">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={CancelAddProjcet}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={showEditProjectPage ? handleUpdate : handleSave}
          >
            {!showEditProjectPage ? "Save" : "Update"}
          </button>
        </li>
      </menu>
      <div>
        <Input
          name="title"
          type="text"
          label="Title"
          value={formData.title}
          onChange={(e) => formChangeHandler(e)}
        />
        <Input
          name="description"
          label="Description"
          textarea
          value={formData.description}
          onChange={(e) => formChangeHandler(e)}
        />
        <Input
          name="dueDate"
          type="date"
          label="Due Date"
          value={formData.dueDate}
          onChange={(e) => formChangeHandler(e)}
        />
      </div>
    </div>
  );
};

export default NewProject;
