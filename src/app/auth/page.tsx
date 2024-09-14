/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="flex h-screen w-full">
      <div
        className="flex-1 flex overflow-hidden dark:bg-[#651c2b55] bg-[#651c2b] relative 
justify-center items-center"
      >
        <img
          src="/redis-logo.svg"
          alt="Redis Logo"
          className="absolute -left-1/4 opacity-25 -bottom-52 lg:scale-125 xl:scale-100 scale-[2]
pointer-events-none select-none -z-1"
        />

        <div className="flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold">
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
        <div className="flex-1 relative overflow-hidden justify-center items-center hidden md:flex bg-noise">
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
            <div className="text-white pt-4">
              <Input type="email" placeholder="Email" />
            </div>
            <div className="pt-2">
              <Button size={"lg"} variant={"default"}>
                Sign In with Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
