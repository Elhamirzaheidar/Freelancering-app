import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import userProposals from "./usePrposals"

function ProposalTable() {
    const{isLoading,proposals}=userProposals()
 
  if (isLoading) return <Loading />;

  if (!proposals.length) return <Empty resourceName="پروپوزال"  />;
  return (
 <Table>
  <Table.Header>
<th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        
  </Table.Header>
  <Table.Body>
{proposals.map((project,index)=>(
<ProposalRow key={project._id}  project={project} index={index}/>
))}
  </Table.Body>
     
</Table>
  );}
  export default ProposalTable

