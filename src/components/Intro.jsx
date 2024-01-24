import SizeControlWrapper from "./SizeControlWrapper";
export default function Intro() {
  return (
    <SizeControlWrapper>
      <div className="flex flex-col mb-3 font-serif">
        <h1 className="mb-3 text-4xl font-extrabold">
          Why did I create this website?
        </h1>
        <p className="mb-2 text-2xl text-gray-700">
          Ever felt overwhelmed when diving into the world of styling your
          website? I've been there too! The endless questions of setting the
          right font weight, choosing the perfect background color, and deciding
          on the ideal margin and padding can be daunting.
        </p>
        <p className="mb-2 text-2xl text-gray-700">
          This website is my attempt to simplify the process of learning
          Tailwind CSS. Through my journey, I aim to assist you in organizing
          your approach and making the art of styling more accessible. To get
          you started, I've structured the content around the following key
          patterns:
        </p>
        <ol className="mb-2 text-xl text-gray-800">
          <li>
            <span className="font-black">Layout:</span> Explore the various
            display options.
          </li>
          <li>
            <span className="font-black">Flexbox/Grid:</span> Learn the power of
            flexible layouts
          </li>
          <li>
            <span className="font-black">Spacing:</span> Master the art of
            padding and margin.
          </li>
          <li>
            <span className="font-black">Sizing:</span> Understand width and
            height attributes.
          </li>
          <li>
            <span className="font-black">Borders & Effects: </span>Elevate your
            design with borders and effects.
          </li>
          <li>
            <span className="font-black">Background:</span> Dive into the world
            of background styling.
          </li>
          <li>
            <span className="font-black">Typography:</span> Unleash the
            potential of text styling.
          </li>
        </ol>
        <p className="text-2xl text-gray-700">
          But that's not all! I'll be building small components and showing you
          how to combine them effectively. Let's kick things off by creating a
          button. Together, we'll start small and gradually build up your
          Tailwind CSS skills. Excited? I am too! Happy coding!
        </p>
      </div>
    </SizeControlWrapper>
  );
}
