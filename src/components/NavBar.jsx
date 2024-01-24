import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <nav className="border-b-4">
        <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between ">
          <Link to={"/"}>
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Master Tailwind CSS
            </span>
          </Link>
          <ul className="flex flex-row space-x-8 font-medium">
            <li>
              <Link to={"/"} className="hover:text-blue-700">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-700">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
