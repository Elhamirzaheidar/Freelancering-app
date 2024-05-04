import useOwnerProjects from "./useOwnerProjects"

function ProjectTable() {
    const{isLoading,projects}=useOwnerProjects();
  return (
    <div>projectTable</div>
  )
}

export default ProjectTable