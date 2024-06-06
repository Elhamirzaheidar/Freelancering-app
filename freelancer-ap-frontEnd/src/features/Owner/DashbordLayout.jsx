import useOwnerProjects from "../Projects/useOwnerProjects"
import DahboardHeader from "./DahboardHeader"
import Stats from "./Stats"
import Loading from "../../ui/Loading";
function DashbordLayout() {
   const{isLoading,projects}=useOwnerProjects();
   if(isLoading) return <Loading/>;
   
  return (
    <div >
        <DahboardHeader/>
        <Stats projects={projects}/>
    </div>
  )
}

export default DashbordLayout