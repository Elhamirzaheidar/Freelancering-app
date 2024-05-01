import { HiArrowRight } from "react-icons/hi";
import useMoveback from "../../hooks/useMoveback";

function NotFoundPage() {
  const navigate = useMoveback();
  return (
    <div className="flex justify-center">
      <div className="sm:max-w-sm flex justify-center">
        <div>
          <h1 className="text-xl font-bold text-gray-400 mb-8">
            صفحه ای که دنبالش بودید،پیدانشد{" "}
          </h1>
          <button onClick={navigate}>
            <HiArrowRight className="w-6 h-6 text-gray-900" />
            <span>برگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
