import { useState } from "react";
import Textfild from "../ui/Textfild";
import Radio from "../ui/Radio";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
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
          <button
            className="bg-green-700 w-full p-3 rounded-xl my-8 text-white shadow-lg"
            type="button"
          >
            تایید
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
