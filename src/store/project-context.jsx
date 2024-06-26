import { createContext, useState, useReducer, useRef } from "react";

export const ProjectContext = createContext({
  currProject: undefined,
  projects: [undefined, undefined, []],
  addProject: () => {},
  deleteProject: () => {},
  addTask: () => {},
  deleteTask: () => {},
  editProject: false,
  newProjectSelection: false,
  displayProject: () => {},
  changeOver: () => {},
  setEditingProject: () => {},
  editTask: false,
  setEditTask: () => {},
});

export default function ProjectContextProvider({ children }) {
  const [projects, setProject] = useState([]);
  const [currProject, setCurrProject] = useState(undefined);
  const [editing, setEditing] = useState(false);
  const [newProject, setNewProject] = useState(false);
  const [editTask, setEditTask] = useState(false);

  function addNewProject(projectDetails) {
    setEditing(false);
    if (projectDetails) {
      const addValue = [projectDetails.title, projectDetails.description, []];
      setProject((prev) => [...prev, addValue]);
    }
  }

  function deleteProject() {
    setProject((prev) => {
      return prev.filter((item) => item[0] !== currProject[0]);
    });
    setCurrProject(undefined);
    setEditing(false);
  }

  function addTask(task) {
    setProject((prev) => {
      prev.map((item) => {
        if (item[0] === currProject[0]) {
          if(item[2].indexOf(task) == -1){
            item[2].push(task);
          }          
        }
      });
      console.log([...prev]);
      return [...prev];
    });
    setEditTask(false);
  }

  function deleteTask(task) {
    setProject((prev) => {
      prev.map((item) => {
        if (item[0] === currProject[0]) {
          for (let i = 0; i < item[2].length; i++) {
            if (item[2][i] === task) {
              item[2].splice(i, 1);
            }
          }
        }
      });
      setEditTask(false);
      return [...prev];
    });
  }

  function changeOver() {
    console.log("Previous Project Only");
    setNewProject(false);
  }

  function handleDisplayProject(project) {
    console.log("New Project");
    if (currProject !== project) {
      setNewProject(true);
      setCurrProject(project);
    }
  }

  function setEditingToValue(value = true) {
    console.log("called");
    setEditing(value);
  }

  const values = {
    currProject: currProject,
    projects: projects,
    addProject: addNewProject,
    deleteProject: deleteProject,
    addTask: addTask,
    deleteTask: deleteTask,
    editProject: editing,
    newProjectSelection: newProject,
    displayProject: handleDisplayProject,
    changeOver: changeOver,
    setEditingProject: setEditingToValue,
    editTask: editTask,
    setEditTask: setEditTask,
  };
  return (
    <ProjectContext.Provider value={values}>
      {children}
    </ProjectContext.Provider>
  );
}
