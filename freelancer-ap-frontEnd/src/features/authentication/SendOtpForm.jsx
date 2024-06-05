
import Textfild from "../../ui/Textfild";
import Loading from "../../ui/Loading";
function SendOtpForm({ onSubmit, isSendingOtp, phoneNumber, onChange }) {
  return (
    <div className="mx-1 sm:mx-0">
      <form className="space-y-5" onSubmit={onSubmit}>
        <Textfild
          value={phoneNumber}
          onChange={onChange}
          name={phoneNumber}
          label="شماره موبایل"
        />
        <div>
          {isSendingOtp ? (<Loading />) : (<button className="buttonFild" type="submit">
            ارسال کد تایید
          </button>)}
        </div>
      </form>
    </div>
  );
}

export default SendOtpForm;
