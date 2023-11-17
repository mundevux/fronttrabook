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

export default function Home() {
  return (
    <NextUIProvider>
      <Navigation />
      <main className="">
        <section className="container mx-auto   mb-5">
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

        <section className="bg-color-secondary mt-16 py-10">
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
                <div className="bg-white mx-4 py-4 px-4 rounded-lg shadow-xl w-60 h-full">
                  <Image src={singUp} alt="" className="h-25" />
                  <h3 className="my-2 font-semibold text-base">Sign Up</h3>
                  <p className="text-color-secondary font-size-personal my-0">
                    Completes all the work associated with planning and
                    processing
                  </p>
                </div>
                <div className="bg-white mx-4 py-4 px-4 rounded-lg shadow-xl w-60 h-full">
                  <Image src={worthOfMoney} alt="" className="h-25" />
                  <h3 className="my-2 font-semibold text-base">
                    Worth of Money
                  </h3>
                  <p className="text-color-secondary font-size-personal my-0">
                    After successful access then book from exclusive deals &
                    pricing
                  </p>
                </div>
                <div className="bg-white mx-4 py-4 px-4 rounded-lg shadow-xl w-60 h-full">
                  <Image src={exitingTravel} alt="" className="h-25" />
                  <h3 className="my-2 font-semibold text-base">
                    Exciting Travel
                  </h3>
                  <p className="text-color-secondary font-size-personal my-0">
                    Start and explore a wide range of exciting travel
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </NextUIProvider>
  );
}
