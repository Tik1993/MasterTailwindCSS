import SizeControlWrapper from "../../components/SizeControlWrapper";

export default function BadgePage() {
  return (
    <>
      <SizeControlWrapper>
        <div className="mb-3">
          <h1 className="mb-2 text-4xl font-extrabold">
            Badge using span element
          </h1>
          <span className="px-2 py-1 me-2 rounded bg-blue-100 text-xs text-blue-800 font-medium">
            Default
          </span>
          <span className="px-2 py-1 me-2 rounded bg-red-100 text-xs text-red-800 font-medium">
            Red
          </span>
        </div>
      </SizeControlWrapper>
    </>
  );
}
