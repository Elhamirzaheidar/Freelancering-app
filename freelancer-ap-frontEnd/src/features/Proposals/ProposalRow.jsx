import Table from "../../ui/Table"
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumber"
import truncateText from "../../utils/truncateText"
  const statusStyle=[
        {
            label:"ردشده",
        className:"badge--danger",
         },{
            label:"درانتظارتایید",
        className:"badge--secondary",
         },
          {
            label:"تاییدشده",
        className:"badge--success",
         },
    ];
function ProposalRow({proposal,index}) {
    const{description,duration,price,status}=proposal;
  
return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(description, 60)}</td>
      <td>{toPersianNumbers(duration)} روز</td>
      <td>{toPersianNumbersWithComma(price)}</td>
    <td>
        <span className={`badge ${statusStyle[status].className}`}>
        {statusStyle[status].label}
        </span>
    </td>
     </Table.Row>
);}
     export default ProposalRow;