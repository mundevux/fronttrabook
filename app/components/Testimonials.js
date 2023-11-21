import Image from "next/image";
import { useEffect, useState } from "react";

export default function Testimoniasl() {
  const [testimonials, setTestimonials] = useState([]);

  const loadTestimoniasl = async () => {
    const response = await fetch(
      "https://backendtrabook.onrender.com/testimonios"
    );
    const data = await response.json();
    setTestimonials(data);
  };

  useEffect(() => {
    loadTestimoniasl();
  }, []);

  return (
    <section className=" bg-color-secondary p-5">
      <div className="container mx-auto py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 mb-5">
          <div className="">
            <p className="text-black font-bold text-5xl secondary-font my-0">
              What people say <br />
              <span className="text-color-principal">about us</span>
            </p>
            <p className="text-color-secondary text-sm my-5">
              A Team of experienced tourism professionals will provide you with
              the best advice and tips for your desire place.
            </p>
            <div className="flex justify-start items-center mb-5">
              <button className=" rounded-full border-1 m-2 hover:border-[#fa7436] hover:bg-[#fa7436] text-[#666] hover:text-white transition duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                  />
                </svg>
              </button>
              <button className=" rounded-full border-1 m-2 hover:border-[#fa7436] hover:bg-[#fa7436]  text-[#666] hover:text-white  transition duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                class="w-75 rounded-3 bg-white shadow-lg m-5 p-5 rounded-lg"
              >
                <div className="grid grid-cols-3">
                  <Image
                    src={testimonial.imagenusuario}
                    alt=""
                    className="pt-5"
                    width={40}
                    height={40}
                  />
                  <p class="my-0 pt-5 pb-4 col-span-2">
                    {testimonial.testimonio}
                  </p>
                </div>
                <p class="my-0 font-semibold text-sm">{testimonial.nombre}</p>
                <p class="my-0 text-color-secondary text-xs">
                  {testimonial.locacion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
