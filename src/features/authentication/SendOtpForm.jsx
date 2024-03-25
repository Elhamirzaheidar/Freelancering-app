import { useState } from "react";
import Textfild from "../../ui/Textfild";

function SendOtpForm() {
  const [phoneNumber, setPhonenumber] = useState("");
  function sendOtpHandler(e){
e.preventDefault();
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
