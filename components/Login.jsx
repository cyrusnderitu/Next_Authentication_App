import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="login rounded-xl w-full flex h-full overflow-hidden">
      <div className="left flex justify-center items-center flex-1 bg-white">
        <div className="w-full px-24">
          <h1 className="font-bold font-nunits text-3xl">Welcome Back</h1>
          <p className="text-gray-300">
            we value your feedback whenever possible
          </p>

          <form action="">
            <div className="email flex flex-col">
              <label htmlFor="email" className="text-base font-semibold mt-2">
                Email
              </label>
              <input
                type="email"
                name=""
                id="email"
                className="bg-transparent py-1 border-[2px] indent-4 text-base bg-gray-300 rounded-lg outline-none text-gray-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="passwd flex flex-col">
              <label htmlFor="passwd" className="text-base font-semibold mt-2">
                Password
              </label>
              <input
                type="password"
                name=""
                id="passwd"
                className="bg-transparent py-1 border-[2px] indent-4 text-base bg-gray-300 rounded-lg outline-none text-gray-400"
                placeholder="Password"
              />
            </div>
            <div className="btn w-full grid gap-y-2 mt-4">
              <button className="border-none bg-black font-bold text-base text-white rounded-lg py-2">
                Sign In
              </button>
              <button className="border-[2px] flex flex-row font-bold items-center justify-center gap-x-2 py-2 rounded-lg">
                <FcGoogle className="text-xl" />
                Sign in with Google
              </button>
            </div>
          </form>
          <p className="text-gray-300 text-center text-xs mt-2">
            Not yet have an account ?{" "}
            <span className="font-bold text-black">Create a new Account</span>{" "}
          </p>
        </div>
      </div>
      <div className="right text-black font-nunits w-full flex-1 bg-[url('https://render.fineartamerica.com/images/rendered/default/print/8/8/break/images/artworkimages/medium/3/deliberation-mario-sanchez-nevado.jpg')] bg-cover h-full relative">
        <div className="absolute p-5 h-50 right-0 left-0 m-auto bottom-10 w-4/5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100">
          <p className="text-black font-nunits leading-7 text-xl w-[90%] mb-6">
            “Stay away from those people who try to disparage your ambitions. Small minds will always do that, 
            but great minds will give you a feeling that you can become great too.”
          </p>
          <span className="font-extrabold text-xl text-white">- Mark Twain -</span>
        </div>
      </div>
    </div>
  );
}
