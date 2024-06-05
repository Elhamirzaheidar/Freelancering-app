import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumber";
import truncateText from "../../utils/truncateText";
import { TbPencilMinus } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";
import Modal from "../../ui/Modal";
import { useState } from "react";
function ProjectRow({ project, index }) {
    const[isEditeOpen,setIsEditeOpen]=useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budeget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <div className="flex flex-wrap items-center gap-w max-w-[200px]">
        {project.tags.map((tag) => (
          <span className="badge badge--secondary" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <td>{project.freelancer?. name || "-"}</td>
      <td>
        {project.status === "open" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <button onClick={()=>setIsEditeOpen(true)}>
            <TbPencilMinus className="w-5 h-5 text-blue-600" />
          </button>
          <Modal title="modal title" open={isEditeOpen} onClose={()=>setIsEditeOpen(false)}>
            This Is Modal...
          </Modal>
          <button>
            <HiOutlineTrash className="w-5 h-5 text-rose-900" />
          </button>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
