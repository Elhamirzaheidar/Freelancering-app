import { useForm } from "react-hook-form";
import Textfild from "../../ui/Textfild";
import Loading from "../../ui/Loading";
function CreateProposal({ onClose, projectId }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <Textfild
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />
        <Textfild
          label="قیمت"
          name="price"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "قیمت ضروری است",
          }}
          errors={errors}
        />
        <Textfild
          label="مدت زمان"
          name="duration"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "مدت زمان ضروری است",
          }}
          errors={errors}
        />
        <div className="!mt-8">
          {0 ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposal;
