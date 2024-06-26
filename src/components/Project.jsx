import Tasks from "./Tasks";
import Input from "./Input";

import { useState, useEffect } from "react";
import { useContext } from "react";
import { ProjectContext } from "../store/project-context.jsx";

export default function Project() {
  const {
    currProject,
    addTask,
    deleteProject,
    newProjectSelection,
    changeOver,
    editTask,
    setEditTask,
  } = useContext(ProjectContext);


  useEffect(() => {
    if (newProjectSelection) {
      setEditTask(false);
    }
  }, [newProjectSelection]);

  function settingDetails(task) {
    if (task) {
      addTask(task);
    }
    setEditTask(false);
  }

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">

            {currProject[0]}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={deleteProject}>
            Delete
          </button>
        </div>

        <p className="text-stone-600 whitespace-pre-wrap">{currProject[1]}</p>
      </header>
      <div>
        {editTask && !newProjectSelection && (
          <Input label={"Add New Task"} onSubmit={settingDetails} task={true} />
        )}
        {!editTask && <Tasks/>}
        <button
          className="bg-transparent hover:text-stone-400 text-stone-600 font-semibold py-2 px-4 border border-stone-400 hover:border-transparent rounded"
          onClick={() => {
            setEditTask(true);
            changeOver();
          }}
          >
          + Add Task
        </button>
      </div>
    </div>
  );
}
