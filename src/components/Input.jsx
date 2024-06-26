import { useContext, useRef } from "react";
import { ProjectContext } from "../store/project-context.jsx";

export default function Input({ label, task, ...props }) {
  const { addProject, addTask, setEditingProject, setEditTask } =
    useContext(ProjectContext);
    const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  function handleChange() {
    if (task) {
      const taskDetails = titleRef.current.value;
      addTask(taskDetails);
      //setEditTask(false);
    } else {
      const projectDetails = {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      };
      addProject(projectDetails);
      descriptionRef.current.value = "";
    }
    titleRef.current.value = "";
  }

  function onCancel() {
    if (task) {
      setEditTask(false);
    } else {
      setEditingProject(false);
    }
  }

  const buttonClass =
    "bg-transparent hover:text-stone-700 text-stone-400 font-semibold py-2 px-4 border border-stone-900 hover:border-transparent rounded";
  const divClass =
    " relative flex flex-col mt-6  bg-stone-600 shadow-md bg-clip-border rounded-xl w-96 h-64";
  const labelClass = "text-sm font-bold uppercase text-stone-400";

  return (
    <div className={task ? undefined : divClass}>
      <p className="flex flex-col gap-1 my-4 mx-4">
        <label
          className={
            task ? "text-sm font-bold uppercase text-stone-600" : labelClass
          }
        >
          {label}
        </label>
        {task ? (
          <input name="title" className={classes} {...props} ref={titleRef} />
        ) : (
          <>
            <input name="title" className={classes} {...props} ref={titleRef} />
            <textarea
              name="description"
              className={classes}
              {...props}
              ref={descriptionRef}
            />
          </>
        )}
        <button
          className={
            task
              ? "bg-transparent hover:text-stone-400 text-stone-600 font-semibold py-2 px-4 border border-stone-400 hover:border-transparent rounded"
              : buttonClass
          }
          onClick={handleChange}
        >
          Submit
        </button>
        <button
          className={
            task
              ? "bg-transparent hover:text-stone-400 text-stone-600 font-semibold py-2 px-4 border border-stone-400 hover:border-transparent rounded"
              : buttonClass
          }
          onClick={onCancel}
        >
          Cancel
        </button>
      </p>
      </div>
  );
}
