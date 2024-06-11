import { useQuery } from "@tanstack/react-query";
import { getProjectApi } from "../services/ProjectServices";

export default function useProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjectApi,
  });

  const { projects } = data || {};
  return { isLoading, projects };
}
