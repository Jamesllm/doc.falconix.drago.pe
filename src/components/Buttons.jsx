import Link from "@docusaurus/Link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Buttons() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Link
        className="bg-gray-950 text-white font-bold rounded-full px-4 py-2"
        to="/docs/intro"
      >
        Ver Demo
      </Link>
      <Link className="px-4 py-2 flex gap-3 items-center" to="/docs/intro">
        Ver la documentacion <MdOutlineKeyboardArrowRight />
      </Link>
    </div>
  );
}
