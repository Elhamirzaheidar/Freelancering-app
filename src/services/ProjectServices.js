import http from "./Httpservice"

export default getOwnerProjectApi(){
    return http.get("/project/owner-projects").then(({data})=>data.data);
}