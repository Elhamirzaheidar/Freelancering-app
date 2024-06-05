import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumber";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty resourceName="پروژه" />;
  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
<th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
          </tr>
        </thead>
        <tbody>
{projects.map((project,index)=>(
  <tr key={project._id} className="bg-orange-800 text-yellow-600">
    <td>{index+1}</td>
    <td>{truncateText(project.title,30)}</td>
    <td>{project.category.title}</td>
    <td>{toPersianNumbersWithComma(project.budget)}</td>
    <td>{toLocalDateShort(project.deadline)}</td>
    <td>
      <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
        {project.tags.map((tag)=>(
          <span className="bg-yellow-500" key={tag}>{tag}</span>
        ))}
      </div>
    </td>
    <td>{project.freelancer?.name || "-"}</td>
    <td>{project.status==="OPEN" ? (
    <span className="bg-green-700">باز</span> 
    ):(
    <span className="bg-red-500">بسته</span>)}</td>
  </tr>
))}
        </tbody>
      </table>
    </div>
   
  );
}
export default ProjectTable;

