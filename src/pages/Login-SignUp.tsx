import React from "react";
import { Input } from "../components/lib/Input";

export const LoginSignUp: React.FC = () => {
  return (
    <div
      className="ls w-full min-h-[80vh] pt-[100px]
    max-xl:pt-12"
    >
      <div
        className="ls-container w-[580px] h-[600px] m-auto p-[40px_60px] bg-slate-50
      max-xl:w-auto max-xl:max-w-[500px] max-xl:max-h-[500px]
      max-md:p-[20px_30px]"
      >
        <h1
          className="m-[20px_auto] text-center text-2xl
        max-xl:my-3"
        >
          Sign Up
        </h1>
        <div
          className="ls-fields flex flex-col gap-7 mt-8
        max-xl:gap-5 max-xl:mt-5"
        >
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>
        <button
          className="w-full bg-red-400 text-white mt-8 border-none text-xl font-medium cursor-pointer h-12
        max-md:h-10 max-md:text-base"
        >
          Continue
        </button>
        <p
          className="ls-login mt-5 text-lg font-medium
        max-xl:text-base"
        >
          Already have an account?
          <span className="text-red-400 font-semibold cursor-pointer ml-3">
            Login here
          </span>
        </p>
        <div
          className="ls-agree flex items-center mt-6 gap-5 text-sm font-semibold
        max-xl:text-sm max-xl:gap-3"
        >
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
