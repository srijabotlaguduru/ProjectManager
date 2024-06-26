import { useContext } from "react";
import { ProjectContext } from "../store/project-context.jsx";

export default function ProjectBar() {
  const { projects, displayProject, setEditingProject } =
    useContext(ProjectContext);
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={setEditingProject}
        >
          + Add project
        </button>
      </div>
      <ul className="mt-8">
        {projects.length > 0 &&
          projects.map((item) => {
            return (
              <li key={item[0]}>
                <button onClick={() => displayProject(item)}>{item[0]}</button>
              </li>
            );
          })}
      </ul>
      </aside>
  );
}
