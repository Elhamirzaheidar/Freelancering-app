import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../Owner/Stat"
import { toPersianNumbersWithComma } from "../../utils/toPersianNumber";


function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
 const balance=acceptedProposals.reduce((acc,curr)=>acc+curr.price,0);
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-4 lg:grid-cols-6  gap-3 pr-1  ">
      <Stat
        title="درخواست&nbsp;ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        value={numOfProposals}
        color="orange"
      />
     <Stat
        title="درخواست های تاییدشده"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        value={acceptedProposals}
        color="green"
      />
      <Stat
        title="کیف پول"
        icon={<HiCollection className="w-20 h-20" />}
        value={toPersianNumbersWithComma(balance)} 
        color="primary"
      />
    </div>
  );
}

export default Stats;
