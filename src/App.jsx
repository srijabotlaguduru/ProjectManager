import ProjectBar from "./components/ProjectBar.jsx";
import NoProject from "./components/NoProject.jsx";
import Project from "./components/Project.jsx";
import Input from "./components/Input.jsx";


import { useContext } from "react";
import { ProjectContext } from "./store/project-context.jsx";

function App() {
  const cxt = useContext(ProjectContext);

  return (
    <main className="h-screen  flex gap-8">
      <ProjectBar />
      {!cxt.currProject && !cxt.editProject && <NoProject />}
      {cxt.editProject && <Input label="New Project" task={false} />}
      {cxt.currProject && !cxt.editProject && <Project />}
      </main>
  );
}

export default App;

