import { useState } from "react";
import Textfild from "../ui/Textfild";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm ">
        <form className="space-y-8 mx-2">
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
              <div className="flex items-center gap-x-2 text-gray-600 mt-6">
                <input className="cursor-pointer accent-green-600" type="radio" name="Role" id="owner" value="owner" />
                <label htmlFor="owner">کارفرما</label>
              </div>
              <div className="flex items-center gap-x-2 text-gray-600 mt-6">
                <input className="cursor-pointer accent-green-600"
                  type="radio"
                  name="Role"
                  id="freelancer"
                  value="freelancer"
                />
                <label htmlFor="freelancer">فریلنسر</label>
              </div>
            </div>
            <button
              className="bg-green-700 w-full p-3 rounded-xl my-8 text-white shadow-lg"
              type="button"
            >
              تایید
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
