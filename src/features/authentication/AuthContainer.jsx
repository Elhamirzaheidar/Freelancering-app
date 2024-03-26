
import { useState } from 'react';
import CheckOtpForm from './CheckOtpForm'
import SendOtpForm from './sendOtpForm'

function AuthContainer() {
     const[step,setStep]=useState(1);
     const renderStep=()=>{
        switch (step){
            case 1:
                return <SendOtpForm setStep={setStep}/>;
                case 2:
                    return <CheckOtpForm/>;
                   default:
                    return null;
        }
     };
    return  <div className="w-full sm:max-w-sm">{renderStep()}</div>
    }

export default AuthContainer;