import SizeControlWrapper from "../../components/SizeControlWrapper";
export default function ButtonPage() {
  return (
    <>
      <SizeControlWrapper>
        <div className="mb-3 font-serif">
          <h1 className="mb-2 text-4xl font-extrabold">
            Button using div element
          </h1>
          <p className="mb-2 text-gray-500 ">
            Property:padding, margin, text(size/weight/font-color), background
            color, border(rounded/color), Pseudo-classes(hover/focus/active)
          </p>
          <div className="inline-block px-3 py-0.5 me-2 mb-2 text-sm font-medium text-center text-blue-500 cursor-pointer rounded-full border border-blue-500  hover:bg-blue-500 hover:text-white active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
            button
          </div>
          <div className="inline-block px-3 py-0.5 me-2 mb-2 text-sm font-medium text-center text-white cursor-pointer rounded-full bg-blue-500  hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
            button
          </div>
        </div>
        <div className="mb-3">
          <h1 className="mb-2 text-4xl font-extrabold">
            Exercise: Button using button element
          </h1>
          <p className="mb-2 text-gray-500">Style the button</p>
          <p className="mb-2 text-red-500">
            By default, button is displayed as inline-block
          </p>
          <button className="border-2 rounded">button</button>
        </div>
        <div className="mb-3">
          <h1 className="mb-2 text-4xl font-extrabold">Button group</h1>
          <p className="mb-2 text-gray-500">Container: property: inline-flex</p>
          <p className="mb-2 text-gray-500">
            Children: property: broder: rounded-s-lg & rounded-e-lg, focus:z-10
            to show the outline
          </p>
          <div className="inline-flex rounded-md shadow-sm">
            <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
              Profile
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
              Settings
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
              Messages
            </button>
          </div>
        </div>
      </SizeControlWrapper>
    </>
  );
}
