
import CheckOtpForm from "../features/authentication/CheckOtpForm"
import SendOtpForm from "../features/authentication/sendOtpForm"

function Auth() {
  return (
   <div className="flex justify-center pt-10">
     <div className="w-full sm:max-w-sm">
{/* <CheckOtpForm/> */}
        <SendOtpForm/>
    </div>
   </div>
  )
}

export default Auth