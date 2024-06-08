import{useQuery} from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalService";
export default function userProposals(){
    const { data, isLoading } = useQuery({
      queryKey: ["proposals"],
      queryFn: getProposalsApi,
    });

    const{proposals}=data || {};
   return{isLoading,proposals};
}
