import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import useOwnerProjects from "./useOwnerProjects"

function ProjectTable() {
    const{isLoading,projects}=useOwnerProjects();
if(isLoading) return <Loading/>
if(!projects.length) return <Empty resourceName="پروژه"/>
  return (
    <div>projectTable</div>
  )
}

export default ProjectTable