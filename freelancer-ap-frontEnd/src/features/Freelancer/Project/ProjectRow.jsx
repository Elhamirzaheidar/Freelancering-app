import Table from "../../../ui/Table";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumber";
import truncateText from "../../../utils/truncateText";
import { MdAssignmentAdd } from "react-icons/md";
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
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{toPersianNumbersWithComma(project.budeget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        {
          <span className={`badge${ProjectStatus[status].className}`}>
            {ProjectStatus[status].label}
          </span>
        }
      </td>
      <td>
        <button>
          <MdAssignmentAdd />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
