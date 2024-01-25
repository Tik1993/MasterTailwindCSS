import SizeControlWrapper from "../../components/SizeControlWrapper";

export default function TypographyPage() {
  return (
    <>
      <SizeControlWrapper>
        <h1 className="mb-4 text-4xl font-bold">
          <span className="pb-1 border-b-4 border-sky-600">Typography</span>
        </h1>
        <h2 className="mb-1 text-2xl font-medium">
          When it comes to styling typography, consider these common properties:
        </h2>
        <ol className="mb-4 text-xl font-normal">
          <li>
            <span className="font-bold">Font Family: </span>
            <span className="text-sky-600">
              font-sans, font-serif, font-mono
            </span>
          </li>
          <li>
            <span className="font-bold">Font Size: </span>
            <span className="text-sky-600">
              text-xs, text-sm, text-base, text-lg, text-xl,...
            </span>
          </li>
          <li>
            <span className="font-bold">Font Wight: </span>
            <span className="text-sky-600">
              font-thin, font-extralight, font-light, font-normal,
              font-medium,...
            </span>
          </li>
          <li>
            <span className="font-bold">Text Color: </span>
            <span className="text-sky-600">text-white,text-black,...</span>
          </li>
          <li>
            <span className="font-bold">Letter Spacing: </span>
            <span className="text-sky-600">
              tracking-tight,tracking-normal, tracking-wide...
            </span>
          </li>
          <li>
            <span className="font-bold">Line Height: </span>
            <span className="text-sky-600">
              leading-3,leading-none, leading-tight, leading-normal,
              leading-loose,...
            </span>
          </li>
          <li>
            <span className="font-bold">Text Align: </span>
            <span className="text-sky-600">
              text-left,text-center, text-right...
            </span>
          </li>
          <li>
            <span className="font-bold">Vertical Align: </span>
            <span className="text-sky-600">
              align-baseline, align-middle, align-bottom,...
            </span>
          </li>
        </ol>
      </SizeControlWrapper>
    </>
  );
}
