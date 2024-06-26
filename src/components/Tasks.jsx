import { useContext } from "react";
import { ProjectContext } from "../store/project-context.jsx";

export default function Tasks(){
  const {currProject, deleteTask} = useContext(ProjectContext);
  const tasks = currProject[2];
  console.log("Tasks " +tasks)
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task + Math.random()} className="flex justify-between my-4">
              <span>{task}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => deleteTask(task)}
              >
                Clear
              </button>             
            </li>
          ))}
        </ul>
      )}
    </section>   
  );
}
  