import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../../services/authservice";

export default function useLogout(){
    const queryClient=useQueryClient();
    const navigte=useNavigate();
    const{isPending , mutate:logout }=useMutation({
mutationFn:logoutApi,
onSuccess:()=>{
    queryClient.removeQueries();
    navigte("/auth",{replace:true});
},
    });
    return{isPending,logout};
}