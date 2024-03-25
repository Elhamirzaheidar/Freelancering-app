import { useState } from "react";
import Textfild from "../../ui/Textfild";
import { useMutation } from "@tanstack/react-query";
import {getOtp}from "../../services/authservice";
import toast from "react-hot-toast";
function SendOtpForm() {
  const [phoneNumber, setPhonenumber] = useState("");
  const {isPending,error,data,mutateAsync}=useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler= async (e)=>{
e.preventDefault();
try{
 const data=await mutateAsync({phoneNumber});
 console.log(data.message);
 toast.success(data.message);
}catch(error){
  toast.error(error?.response?.data?.message);
}
  };

  return (
    <div className="mx-1 sm:mx-0">
      <form className="space-y-5" onSubmit={sendOtpHandler}>
        <Textfild
          value={phoneNumber}
          onChange={(e) => setPhonenumber(e.target.value)}
          name={phoneNumber}
          label="شماره موبایل"
        />

        <button className="buttonFild" type="submit">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOtpForm;
