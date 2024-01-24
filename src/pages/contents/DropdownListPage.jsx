import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SizeControlWrapper from "../../components/SizeControlWrapper";

export default function DropdownListPage() {
  const [isExpand, setIsExpand] = useState(false);
  const listItems = (
    <div className="w-44 bg-white border rounded-lg shadow   ">
      <ul className="py-2 text-sm text-gray-700">
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Settings
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
  return (
    <>
      <SizeControlWrapper>
        <div className="mb-3">
          <h1 className="mb-2 text-4xl font-extrabold">Dropdown button</h1>{" "}
          <p className="mb-2 text-gray-500">
            state hook: isExpand <br />
            icon: fontawesome
          </p>
          <button
            className="w-44 px-3 py-1 mb-2 rounded bg-blue-500 text-white text-sm cursor-pointer hover:bg-blue-700"
            onClick={() => setIsExpand(!isExpand)}
          >
            Dropdown button{" "}
            {!isExpand ? <FontAwesomeIcon icon={faChevronDown} /> : ""}
          </button>
          {isExpand && listItems}
        </div>
      </SizeControlWrapper>
    </>
  );
}
