import React, { useState } from "react"
import { Input } from "../components/lib/Input"
import { ajax } from "../lib/ajax"

type formData = {
  name?: string
  email: string
  password: string
}

export const LoginSignUp: React.FC = () => {
  const [formState, setFormState] = useState<string>("Login")
  const [formData, setFormData] = useState<formData>({
    email: "",
    password: ""
  })
  const toggleFormState = () => {
    if (formState === "Login") {
      setFormState("Sign Up")
      formData.name = ""
    } else {
      setFormState("Login")
      delete formData.name
    }
  }
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    await ajax
      .post("/login", formData, {
        headers: { "Content-Type": "application/json" }
      })
      .then(
        (res) => {
          localStorage.setItem("auth-token", res.data.token)
          window.location.replace("/")
        },
        (err) => {
          alert(err.response.data.error)
        }
      )
  }

  const signUp = async () => {
    await ajax
      .post("/signup", formData, {
        headers: { "Content-Type": "application/json" }
      })
      .then(
        (res) => {
          localStorage.setItem("auth-token", res.data.token)
          window.location.replace("/")
        },
        (err) => {
          alert(err.response.data.error)
        }
      )
  }

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
          {formState}
        </h1>
        <div
          className="ls-fields flex flex-col gap-7 mt-8
        max-xl:gap-5 max-xl:mt-5"
        >
          {formState === "Sign Up" ? (
            <Input
              name="name"
              value={formData.name}
              type="text"
              placeholder="Your Name"
              onChange={changeHandler}
            />
          ) : null}
          <Input
            name="email"
            value={formData.email}
            type="email"
            placeholder="Email"
            onChange={changeHandler}
          />
          <Input
            name="password"
            value={formData.password}
            type="password"
            placeholder="Password"
            onChange={changeHandler}
          />
          <button
            className="w-full bg-red-400 text-white border-none text-xl font-medium cursor-pointer h-12
        max-md:h-10 max-md:text-base"
            onClick={() => {
              formState === "Login" ? login() : signUp()
            }}
          >
            Continue
          </button>
        </div>

        {formState === "Sign Up" ? (
          <p
            className="ls-login mt-5 text-lg font-medium
        max-xl:text-base"
          >
            Already have an account?
            <span
              className="text-red-400 font-semibold cursor-pointer ml-3"
              onClick={toggleFormState}
            >
              Login here
            </span>
          </p>
        ) : (
          <p
            className="ls-login mt-5 text-lg font-medium
        max-xl:text-base"
          >
            Create an account?
            <span
              className="text-red-400 font-semibold cursor-pointer ml-3"
              onClick={toggleFormState}
            >
              Click here
            </span>
          </p>
        )}
        <div
          className="ls-agree flex items-center mt-6 gap-5 text-sm font-semibold
        max-xl:text-sm max-xl:gap-3"
        >
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
