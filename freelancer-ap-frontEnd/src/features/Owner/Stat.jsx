import { toPersianNumbers } from "../../utils/toPersianNumber";

const colors = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",
  orange: "bg-orange-100 text-orange-700",
};

function Stat({ icon, value, title, color }) {
  return (
    <div className="grid col-span-1 md:col-span-2 grid-rows-2  grid-cols-[6.4rem_1fr] bg-secondary-0 pr-1  pl-5 sm:mb-5  rounded-lg gap-x-1 lg:gap-x-2 sm:gap-r-1 py-5 lg:py-3 sm:pr-5 md:pr-1 lg:pr-4">
      <div
        className={`row-span-2 flex items-center justify-center
        rounded-full aspect-square 
       ${colors[color]}
  `}
      >
        {icon}
      </div>
      <h5 className="font-bold text-secondary-500 text-lg self-center">
        {title}
      </h5>
      <p className="text-3xl font-bold text-secondary-900">
        {toPersianNumbers(value)}
      </p>
    </div>
  );
}
export default Stat;
