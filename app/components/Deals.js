import { Button, Card } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Deals() {
  const [deals, setDeals] = useState([]);

  const loadDeals = async () => {
    const response = await fetch("http://localhost:4000/ofertas");
    const data = await response.json();
    setDeals(data);
  };

  useEffect(() => {
    loadDeals();
  }, []);

  return (
    <section className="container mx-auto py-5 my-5">
      <div className="mb-10">
        <h2 className="text-black font-bold text-5xl secondary-font text-center pb-3">
          Exclusive
          <span className="text-color-principal"> deals & discounts</span>
        </h2>
        <p className="text-color-secondary text-sm text-center">
          Discover our fantastic early booking discounts & start planning your
          journey.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 mb-5">
        {deals.map((deal) => (
          <div key={deal.id} className="mx-4 px-0 shadow-lg rounded-lg w-52">
            <div className="card">
              <Image
                src={deal.imagendestino}
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
            <div className="flex justify-between items-center mt-4 px-3">
              <p className="my-0 fw-semibold">{deal.ciudad}</p>
              <div className="flex items-center">
                <Image src={deal.imagenstar} alt="" width={10} height={10} />
                <p className="my-0 text-color-secondary ms-1">
                  {deal.calificacion}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3 mb-4  px-3">
              <div className="flex">
                <Image
                  src={deal.imagenubicacion}
                  alt=""
                  className="text-color-secondary"
                  width={10}
                  height={10}
                />
                <p className="my-0 text-color-secondary ml-1 font-medium">
                  {deal.location}
                </p>
              </div>
              <div className="flex items-center">
                <p className="my-0 line-through text-color-secondary">
                  {deal.precio}
                </p>
                <p className="my-0 bg-color-tertiary text-color-principal font-semibold px-2 py-1 ml-3 rounded-lg">
                  {deal.descuento}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
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
    </section>
  );
}
