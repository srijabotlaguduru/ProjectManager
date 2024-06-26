import ProjectContextProvider from "./store/project-context"
import App from "./App"
export default function Index(){
  return(
    <ProjectContextProvider>
      <App/>
    </ProjectContextProvider>
  )
}