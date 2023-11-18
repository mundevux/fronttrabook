"use client";

import { Button, NextUIProvider } from "@nextui-org/react";
import Navigation from "./components/Navigaton";
import Image from "next/image";
import arrowDown from "./img/Vector 4855.svg";
import headerImageOne from "./img/ImageHeader_Image.png";
import headerImageTwo from "./img/Group 1000003524Header_Image.png";
import singUp from "./img/Sign Up.svg";
import worthOfMoney from "./img/Worth of Money.svg";
import exitingTravel from "./img/Exciting Travel.svg";
import Card from "./components/Card";
import Deals from "./components/Deals";
import Plans from "./components/Plans";
import Testimoniasl from "./components/Testimonials";
import Blog from "./components/Blog";
import TrabookLogo from "./img/VectorLogo_Icon.svg";

export default function Home() {
  const infoCards = [
    {
      src: singUp,
      textTitle: "Sign Up",
      textDescription:
        "Completes all the work associated with planning and processing",
    },
    {
      src: worthOfMoney,
      textTitle: "Worth of Money",
      textDescription:
        "After successful access then book from exclusive deals & pricing",
    },
    {
      src: exitingTravel,
      textTitle: "Exciting Travel",
      textDescription:
        "Start and explore a wide range of exciting travel experience.",
    },
  ];

  return (
    <NextUIProvider>
      <Navigation />
      <main className="">
        {/* Se Inicia la seccion Hero de la web */}
        <section className="container mx-auto mb-5">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 pt-5 ">
              <div className=" my-auto px-5">
                <p className="text-black font-bold text-5xl secondary-font">
                  Get started your exciting{" "}
                  <span className="text-color-principal">journey</span>
                  with us.
                </p>
                <br />
                <p className="text-color-secondary text-sm">
                  A Team of experienced tourism professionals will provide you
                  with the best advice and tips for your desire place.
                </p>
                <Button className="font-semibold mt-4 py-4 bg-white text-color-principal border-1 border-color-primary w-full md:w-auto">
                  Discover Now
                </Button>
              </div>
              <div className="py-5">
                <div className="relative flex justify-center items-center">
                  <Image
                    src={headerImageOne}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  <Image
                    src={headerImageTwo}
                    alt=""
                    className="object-cover h-60 w-60 md:h-80 md:w-80 lg:h-96 lg:w-96"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow-2xl rounded-lg px-4 py-2">
              <div className="m-5">
                <div className="flex items-center pb-2">
                  <p className="my-0 font-semibold">Location</p>
                  <Image src={arrowDown} alt="" className="ml-2" />
                </div>
                <p className="text-color-secondary font-size-personal my-0">
                  Where are you going
                </p>
              </div>
              <div className="m-5">
                <div className="flex items-center pb-2">
                  <p className="my-0  font-semibold">Date</p>
                  <Image src={arrowDown} alt="" className="ml-2" />
                </div>
                <p className="text-color-secondary font-size-personal my-0">
                  When you will go
                </p>
              </div>
              <div className="m-5">
                <div className="flex items-center pb-2">
                  <p className="my-0  font-semibold">Guest</p>
                  <Image src={arrowDown} alt="" className="ml-2" />
                </div>
                <p className="text-color-secondary font-size-personal my-0">
                  Number of guest
                </p>
              </div>
              <div className="flex justify-center items-center m-4">
                <Button className="bg-color-principal">Explore Now</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-color-secondary mt-16 py-10 px-2">
          <div className="container mx-auto flex-col justify-center">
            <div className="w-50 mx-auto">
              <h2 className="text-black font-bold text-5xl secondary-font text-center pb-3">
                {" "}
                Things you need{" "}
                <span className="text-color-principal">to do</span>
              </h2>
              <p className="text-color-secondary text-sm text-center w-75 mx-auto">
                We ensure that you’ll embark on a perfectly planned, safe
                vacation at a price you can afford.
              </p>
            </div>
            <div className=" w-auto mx-auto mt-14">
              <div className="grid grid-cols-1 md:grid-cols-3 place-items-center my-5">
                {/* Se inicial el mapeo del arreglo que contiene la informacion de las tarjetas */}
                {infoCards.map((card, index) => (
                  <Card
                    key={`${card}-${index}`}
                    src={card.src} // Se accede a la propiedad src dentro del objeto
                    textTitle={card.textTitle} // Se accede a la propiedad textTitle dentro del objeto
                    textDescription={card.textDescription} // Se accede a la propiedad textDescription dentro del objeto
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Se Termina la seccion Hero de la web */}

        {/* Se llaman los componentes, ofertas, testimonios, blog */}
        <Deals />
        <Plans />
        <Testimoniasl />
        <Blog />
        {/* Se termina de llamar los componentes, ofertas, testimonios, blog */}
      </main>

      {/* Se Inicia Footer de la web */}

      <footer className="bg-color-secondary p-5 mt-5">
        <div className="flex justify-center items-center py-5">
          <div className=" -mt-28 bg-color-principal text-center p-5 rounded-lg w-[800px]">
            <div className=" mx-auto">
              <h3 className="font-bold text-4xl secondary-font pb-3">
                Subscribe and get exclusive deals & offers
              </h3>
              <div className="flex justify-center items-center">
                <input
                  type="text"
                  className="form-control rounded-lg py-3 pl-3"
                  placeholder="Enter your email"
                />
                <div className="input-group-append mx-2">
                  <Button className=" bg-white" type="button">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-5 pt-5 ">
          <div className="grid grid-cols-5 pb-3 border-b-2 place-items-center">
            <div className="col col-span-2">
              <div className="flex justify-start items-center  cursor-pointer">
                <h1 className="secondary-font text-3xl font-bold text-inherit pr-2">
                  Trabook
                </h1>
                <Image src={TrabookLogo} alt="Icon Logo" className="" />
              </div>
              <p className="mb-4 text-sm text-color-secondary">
                Book your trip in minute, get full Control for much longer.
              </p>
              <div className="flex justify-start items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  className=" cursor-pointer"
                >
                  <g filter="url(#filter0_d_0_379)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30 48C41.0457 48 50 39.0457 50 28C50 16.9543 41.0457 8 30 8C18.9543 8 10 16.9543 10 28C10 39.0457 18.9543 48 30 48Z"
                      fill="white"
                    />
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.5449 25.7991C32.2326 25.7003 31.8735 25.6345 31.5456 25.6345C31.1397 25.6345 30.2654 25.9143 30.2654 26.4577V27.7583H32.3419V29.948H30.2654V35.9903H28.1733V29.948H27.1428V27.7583H28.1733V26.6552C28.1733 24.9924 28.8915 23.6094 30.6245 23.6094C31.2178 23.6094 32.2794 23.6423 32.8571 23.8563L32.5449 25.7991Z"
                    fill="#444444"
                  />
                  <defs>
                    <filter
                      id="filter0_d_0_379"
                      x="0"
                      y="0"
                      width="60"
                      height="60"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_379"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_379"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  className=" cursor-pointer"
                >
                  <g filter="url(#filter0_d_0_376)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30 48C41.0457 48 50 39.0457 50 28C50 16.9543 41.0457 8 30 8C18.9543 8 10 16.9543 10 28C10 39.0457 18.9543 48 30 48Z"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M37.317 23.1597C36.7365 23.4143 36.118 23.5831 35.4731 23.665C36.1365 23.2689 36.6429 22.6465 36.8809 21.8963C36.2624 22.265 35.5795 22.5255 34.8517 22.6709C34.2643 22.0455 33.4273 21.6582 32.5141 21.6582C30.7424 21.6582 29.3161 23.0963 29.3161 24.8592C29.3161 25.1128 29.3375 25.3567 29.3902 25.5889C26.7297 25.4592 24.3756 24.1841 22.7941 22.2416C22.518 22.7206 22.3561 23.2689 22.3561 23.8592C22.3561 24.9675 22.9268 25.9499 23.7775 26.5187C23.2634 26.5089 22.759 26.3597 22.3317 26.1245C22.3317 26.1343 22.3317 26.147 22.3317 26.1597C22.3317 27.7148 23.4409 29.0065 24.8956 29.3041C24.6351 29.3753 24.3512 29.4094 24.0565 29.4094C23.8517 29.4094 23.6448 29.3977 23.4507 29.3548C23.8653 30.6221 25.0419 31.5538 26.4409 31.5841C25.3522 32.4358 23.9697 32.9489 22.4731 32.9489C22.2107 32.9489 21.959 32.9372 21.7073 32.905C23.1248 33.8192 24.8048 34.3411 26.6165 34.3411C32.5053 34.3411 35.7248 29.4631 35.7248 25.2348C35.7248 25.0933 35.72 24.9567 35.7131 24.8211C36.3483 24.3704 36.8819 23.8075 37.317 23.1597Z"
                    fill="#444444"
                  />
                  <defs>
                    <filter
                      id="filter0_d_0_376"
                      x="0"
                      y="0"
                      width="60"
                      height="60"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_376"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_376"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  className="cursor-pointer"
                >
                  <g filter="url(#filter0_d_0_376)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30 48C41.0457 48 50 39.0457 50 28C50 16.9543 41.0457 8 30 8C18.9543 8 10 16.9543 10 28C10 39.0457 18.9543 48 30 48Z"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M37.317 23.1597C36.7365 23.4143 36.118 23.5831 35.4731 23.665C36.1365 23.2689 36.6429 22.6465 36.8809 21.8963C36.2624 22.265 35.5795 22.5255 34.8517 22.6709C34.2643 22.0455 33.4273 21.6582 32.5141 21.6582C30.7424 21.6582 29.3161 23.0963 29.3161 24.8592C29.3161 25.1128 29.3375 25.3567 29.3902 25.5889C26.7297 25.4592 24.3756 24.1841 22.7941 22.2416C22.518 22.7206 22.3561 23.2689 22.3561 23.8592C22.3561 24.9675 22.9268 25.9499 23.7775 26.5187C23.2634 26.5089 22.759 26.3597 22.3317 26.1245C22.3317 26.1343 22.3317 26.147 22.3317 26.1597C22.3317 27.7148 23.4409 29.0065 24.8956 29.3041C24.6351 29.3753 24.3512 29.4094 24.0565 29.4094C23.8517 29.4094 23.6448 29.3977 23.4507 29.3548C23.8653 30.6221 25.0419 31.5538 26.4409 31.5841C25.3522 32.4358 23.9697 32.9489 22.4731 32.9489C22.2107 32.9489 21.959 32.9372 21.7073 32.905C23.1248 33.8192 24.8048 34.3411 26.6165 34.3411C32.5053 34.3411 35.7248 29.4631 35.7248 25.2348C35.7248 25.0933 35.72 24.9567 35.7131 24.8211C36.3483 24.3704 36.8819 23.8075 37.317 23.1597Z"
                    fill="#444444"
                  />
                  <defs>
                    <filter
                      id="filter0_d_0_376"
                      x="0"
                      y="0"
                      width="60"
                      height="60"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_376"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_376"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="col">
              <h3 className="text-sm mb-4 cursor-pointer">Company</h3>
              <p className="mb-2 text-sm text-color-secondary cursor-pointer">
                About
              </p>
              <p className="mb-2 text-sm text-color-secondary cursor-pointer">
                Careers
              </p>
              <p className="mb-2 text-sm text-color-secondary cursor-pointer">
                Logistic
              </p>
              <p className="mb-2 text-sm text-color-secondary cursor-pointer">
                Privacy & Policy
              </p>
            </div>
            <div className="col">
              <h3 className="text-sm mb-4 cursor-pointer">Contact</h3>
              <p className="mb-2 text-sm text-color-secondary cursor-pointer">
                Help/FAQ
              </p>
              <p className="mb-2 text-sm text-color-secondary cursor-pointer">
                Press
              </p>
              <p className="mb-2 text-sm text-color-secondary cursor-pointer">
                Affilates
              </p>
            </div>
            <div className="col">
              <h3 className="text-sm mb-4  cursor-pointer">More</h3>
              <p className="mb-2 text-sm text-color-secondary cursor-pointer">
                Press Centre
              </p>
              <p className="mb-2 text-sm text-color-secondary cursor-pointer">
                Our Blog
              </p>
              <p className="mb-2 text-sm text-color-secondary cursor-pointer">
                Low fare tips
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="mb-2 text-sm text-color-secondary cursor-pointer">
              Copyright, Trabook 2022. All rights reserved.
            </p>
            <p className="mb-2 text-sm text-color-secondary cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
      </footer>
    </NextUIProvider>
  );
}
