/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const page = () => {
  const [showPasswordButton, setShowPasswordButton] = useState(false);
  const [buttonText, setButtonText] = useState("Sign In with Email");

  const handleSignInClick = () => {
    setShowPasswordButton(true);
    setButtonText("Sign In"); // Change the button text after clicking
  };

  return (
    <div className="flex h-screen w-full">
      <div
        className="flex-1 flex overflow-hidden dark:bg-[#651c2b55] bg-[#651c2b] relative 
justify-center items-center"
      >
        <img
          src="/redis-logo.svg"
          alt="Redis Logo"
          className="absolute -left-[15%] opacity-25 -bottom-52 lg:scale-130 xl:scale-100 scale-[2]
pointer-events-none select-none -z-1"
        />

        <div className="flex flex-col gap-2  px-4 xl:ml-40 text-center   md:text-start font-semibold">
          <Image
            src={"/logo.png"}
            alt="RediStash Logo"
            width={763}
            height={173}
            className="mt-20 w-[420px] z-0 pointer-events-none select-none"
          />

          <p className="text-2xl md:text-3xl text-balance z-10">
            The{" "}
            <span className="bg-red-500 px-2 rounded font-bold text-white">
              ULTIMATE
            </span>{" "}
            Chat App
          </p>

          <p className="text-2xl md:text-3xl mb-32 text-balance z-10">
            You{" "}
            <span className="bg-green-500/90 rounded font-bold px-2 text-white">
              NEED TO
            </span>{" "}
            USE
          </p>
        </div>
        <div className="flex-1 p-50 relative overflow-hidden justify-center items-center hidden md:flex bg-noise">
          <div className="flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="mx-auto h-6 w-6"
            >
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>
            <p className=" text-center font-semibold text-3xl ">Welcome back</p>
            <p className="text-center font-extralight text-s text-gray-300 ">
              Enter your email to signin to your account
            </p>
            <div className="text-white pt-4 w-full">
              <Input
                type="email"
                placeholder="Email"
                className="placeholder-white text-white"
              />
            </div>
            {showPasswordButton && (
              <div className="text-white pt-4 w-full">
                <Input
                  type="password"
                  placeholder="Password"
                  className="placeholder-white text-white"
                />
              </div>
            )}
            <div className="pt-2 w-full">
              <Button
                className="w-full"
                size={"lg"}
                variant={"default"}
                onClick={handleSignInClick}
              >
                {buttonText}
              </Button>
            </div>

            <div className="flex pt-2 justify-between items-center text-balance">
              <hr className="w-[29%] h-0.5 border-0 rounded bg-gray-200" />
              <p className="text-sm mx-4 text-balance font-extralight  whitespace-nowrap">
                or continue with
              </p>
              <hr className="w-[29%] h-0.5 border-0 rounded bg-gray-200" />
            </div>
            <div className="pt-1 ">
              <Button size={"lg"} variant={"default1"} className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-white  ml-2 mr-3"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                </svg>
                <div>Gith Hub</div>
              </Button>
            </div>
            <div className="text-center pt-2">
              <p className="font-thin">
                Dont have a Account?{" "}
                <span className="text-lg font-semibold underline cursor-pointer">
                  signup
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
