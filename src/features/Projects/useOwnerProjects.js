import { useQuery } from "@tanstack/react-query";
import {getOwnerProjectApi} from "../../services/ProjectServices"
export default function useOwnerProjects() {
  const{data,isLoading} =useQuery({
    queryKey: ["Projects"],
    queryFn: getOwnerProjectApi,
  });

const{projects}=data ||{};
return {isLoading,projects};
}