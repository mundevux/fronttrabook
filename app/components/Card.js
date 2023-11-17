import Image from "next/image";

export default function Card({ src, textTitle, textDescription }) {
  return (
    <div className="bg-white mx-4 my-4 md:my-0 py-4 px-4 rounded-lg shadow-xl w-60 md:h-full">
      <Image src={src} alt="" className="h-25" />
      <h3 className="my-2 font-semibold text-base">{textTitle}</h3>
      <p className="text-color-secondary font-size-personal my-0">
        {textDescription}
      </p>
    </div>
  );
}
