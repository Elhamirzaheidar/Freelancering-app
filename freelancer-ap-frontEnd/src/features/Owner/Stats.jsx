import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "./Stat";
function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.status === 2).length;
  const numOfProposals = projects.reduce((acc, curr) => {
    curr.proposals.length + acc;
  }, 0);
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-4 lg:grid-cols-6  gap-3 pr-1  ">
      <Stat
        title="پروژه&nbsp;ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        value={numOfProjects}
        color="orange"
      />
     <Stat
        title="پروژه های واگذارشده"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        value={numOfAcceptedProjects}
        color="green"
      />
      <Stat
        title="درخواست&nbsp;ها"
        icon={<HiCollection className="w-20 h-20" />}
        value={numOfProposals} 
        color="primary"
      />
    </div>
  );
}

export default Stats;
