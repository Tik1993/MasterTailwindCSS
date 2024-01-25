import { Link } from "react-router-dom";
import Intro from "../components/Intro";
export default function HomePage() {
  return (
    <>
      <div className=" bg-slate-200">
        <Intro />
      </div>

      <div className="max-w-screen-lg mx-auto p-4 ">
        <h1 className="mb-3 text-4xl font-extrabold">Components</h1>
        <Link
          to="/components/typography"
          className="block max-w-md p-6 my-3 border border-gray-200 rounded-lg shadow hover:bg-gray-100"
        >
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Typography
          </h3>
          <p className="font-normal text-gray-400">Let's look at typography!</p>
        </Link>
        <Link
          to="/components/buttons"
          className="block max-w-md p-6 my-3 border border-gray-200 rounded-lg shadow hover:bg-gray-100"
        >
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Button
          </h3>
          <p className="font-normal text-gray-400">Let's look at buttons!</p>
        </Link>
        <Link
          to="/components/badges"
          className="block max-w-md p-6 my-3 border border-gray-200 rounded-lg shadow hover:bg-gray-100"
        >
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Badge
          </h3>
          <p className="font-normal text-gray-400">Let's look at badges!</p>
        </Link>
        <Link
          to="/components/dropdownlist"
          className="block max-w-md p-6 my-3 border border-gray-200 rounded-lg shadow hover:bg-gray-100"
        >
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Dropdown list
          </h3>
          <p className="font-normal text-gray-400">
            Let's look at dropdown list!
          </p>
        </Link>
      </div>
    </>
  );
}
