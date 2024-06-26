import { useState } from "react";
import CheckOtpForm from "./CheckOtpForm";
import SendOtpForm from "./sendOtpForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authservice";

function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhonenumber] = useState("");
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: OtpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      console.log(data.message);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            setStep={setStep}
            isSendingOtp={isSendingOtp}
            phoneNumber={phoneNumber}
            onSubmit={sendOtpHandler}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            phoneNumber={phoneNumber}
            onBack={() => setStep(1)}
            onResendOtp={sendOtpHandler}
            OtpResponse={OtpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
