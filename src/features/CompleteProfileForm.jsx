import { useState } from "react";
import Textfild from "../ui/Textfild";
import Radio from "../ui/Radio";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../services/authservice";
import toast from "react-hot-toast";
import Loading from "../ui/Loading";
import { useNavigate } from "react-router-dom";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState();
  const navigate=useNavigate()
  const {mutateAsync,isPending}=useMutation({
   mutationFn:completeProfile,
  });
  const handleSubmit = async(e) => {
    e.preventDefault();
       try {
      const { message, user } = await mutateAsync({ name,email,role });
      if(user.status!==2){navigate("/");
      toast.error("پروفایل شما در انتظار تایید است");
      return;
       }
        if(!user.role==="owner") return navigate("/owner");
      if(user.role==="freelancer")return navigate("/freelancer");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm ">
        <form className="space-y-8 mx-2" onSubmit={handleSubmit}>
          <div>
            <Textfild
              label="نام و نام خانوادگی"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Textfild
              label="ایمیل"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="flex items-center justify-center gap-x-8 ">
              <Radio
                label="کارفرما"
                value="owner"
                onChange={(e) => setRole(e.target.value)}
                name="Role"
                id="owner"
                checked={role === "owner"}
              />
              <Radio
                label="فریلنسر"
                value="Freelancer"
                onChange={(e) => setRole(e.target.value)}
                name="Role"
                id="Freelancer"
                checked={role === "Freelancer"}
              />
            </div>
          </div>
         
            <div>
          {isPending? (<Loading />) : (<button className="buttonFild" type="submit">
          تایید
          </button>)}
        </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
