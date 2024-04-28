
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { HiArrowRight } from "react-icons/hi";
import { useMutation } from "@tanstack/react-query"
import { checkOtp } from "../../services/authservice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function CheckOtpForm({ phoneNumber, onBack,onResendOtp }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(90);
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp })
      toast.success(message);
      if (user.isActive) {
        ///
      } else {
        navigate("/complete-profile");

      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time])
  return (
    <div className="mx-2" >
      <button onClick={onBack}><HiArrowRight className="w-6 h-6 text-gray-500" /></button>
    <div className="mb-4 text-gray-400">{time >0 ? <p>{time}ثانیه تا ارسال مجدد کد</p>:<button onClick={onResendOtp}>ارسال مجدد کد تایید</button>}</div>
      <form action="" className="space-y-8" onSubmit={checkOtpHandler}>
        <p className="font-bold text-blue-500 my-3 ">کدتایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span> - </span>}
          renderInput={(props) => <input type="number"{...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid gray",
            borderRadius: "0.5rem"
          }}
        />
        <button className="buttonFild">تایید</button>
      </form>
    </div>
  );
}

export default CheckOtpForm;
