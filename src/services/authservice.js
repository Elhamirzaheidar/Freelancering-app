import http from "./Httpservice";

 export function getOtp(data){
    return http.post("/user/get-otp",data)
}


export function checkOtp(data){
    return http.post("/user/check-otp",data)
}