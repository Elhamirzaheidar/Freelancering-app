import http from "./Httpservice"

export function getOwnerProjectApi(){
    return (http.get("/project/owner-projects").then(({data})=>data.data));}

    export function getProjectApi() {
      return http.get("/project/list").then(({ data }) => data.data);
    }
