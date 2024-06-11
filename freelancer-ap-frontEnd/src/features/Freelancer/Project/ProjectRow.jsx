import { useState } from "react";
import Table from "../../../ui/Table";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumber";
import truncateText from "../../../utils/truncateText";
import { MdAssignmentAdd } from "react-icons/md";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../Proposals/CreateProposal";
const ProjectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ project, index }) {
  const { status, title, budeget, deadline } = project;
  const [open, setIsOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{toPersianNumbersWithComma(budeget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        {
          <span className={`badge${ProjectStatus[status].className}`}>
            {ProjectStatus[status].label}
          </span>
        }
      </td>
      <td>
        <Modal
          open={open}
          title={`درخواست انجام ${title}`}
        >
<CreateProposal projectId={project._id} onClose={() => setIsOpen(false) }/>
        </Modal>
        <button onClick={() => setIsOpen(true)}>
          <MdAssignmentAdd />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
