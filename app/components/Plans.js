import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function Plans() {
  const [plans, setPlans] = useState([]);
  const loadPlans = async () => {
    const response = await fetch("https://backendtrabook.onrender.com/planes");
    const data = await response.json();
    setPlans(data);
  };
  useEffect(() => {
    loadPlans();
  }, []);

  return (
    <section className="container mx-auto py-5 my-5">
      <div className="">
        <h2 className="text-black font-bold text-5xl secondary-font text-center pb-3">
          Best
          <span className="text-color-principal"> vacation plan</span>
        </h2>
        <p className="text-color-secondary text-sm text-center">
          Plan your perfect vacation with our travel agency. Choose among
          hundreds of all-inclusive offers!
        </p>
      </div>
      <div className="flex justify-end items-center mb-5">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mb-5">
        {plans.map((plan) => (
          <div key={plan.id} className="mx-4 px-0 shadow-lg rounded-lg w-52">
            <div>
              <div className="card">
                <Image
                  src={plan.imagendestino}
                  alt=""
                  className="object-cover rounded-t-lg w-full h-48"
                  width={300}
                  height={200}
                />
                <div className="card-img-overlay">
                  <Button className="bg-color-principal border-0 px-4 py-2 rounded-1 mx-2 font-semibold shadow-personal">
                    Book Now
                  </Button>
                </div>
              </div>
              <div class="flex justify-between items-center mt-4 px-3">
                <p class="my-0 font-semibold text-base">{plan.ciudad}</p>
                <p class="my-0 text-color-principal font-semibold text-base">
                  {plan.precio}
                </p>
              </div>
              <div class="flex justify-between items-center my-4 px-3">
                <div class="flex">
                  <Image
                    src={plan.imagenduracion}
                    alt=""
                    width={10}
                    height={10}
                  />
                  <p class="my-0 text-color-secondary ml-1 text-sm">
                    {plan.duracion}
                  </p>
                </div>
                <div class="flex">
                  <Image src={plan.imagenstar} alt="" width={10} height={10} />
                  <p class="my-0 text-color-secondary ml-1 text-sm">
                    {plan.calificacion}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
