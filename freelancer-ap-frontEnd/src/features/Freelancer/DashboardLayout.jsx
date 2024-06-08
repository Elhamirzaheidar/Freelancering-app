import Loading from "../../ui/Loading";
import userProposals from "../Proposals/usePrposals";
import DashboardHeader from "./DashboardHeader";
import Stats from"./Stats";
function DashbordLayout() {
  const{isLoading,proposals}=userProposals();
if(isLoading) return <Loading/>;
  return (
    <div >
        <DashboardHeader/>
        <Stats proposals={proposals}/>
    </div>
  );
}

export default DashbordLayout