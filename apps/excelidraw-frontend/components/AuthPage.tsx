"use client";
import { HTTP_BACKEND } from "@/config";
import { Button } from "./ui/button";
import Navbar from "./ui/Navbar";
import axios from "axios";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export function AuthPage({ isSignin }: { isSignin: boolean }) {
  const router = useRouter();
  const nameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // ✅ Signin
  async function signinfunction() {
    try {
      const response = await axios.post<{ token: string }>(
        `${HTTP_BACKEND}/signin`,
        {
          username: usernameRef.current?.value,
          password: passwordRef.current?.value,
        }
      );

      const token = response.data.token;
      localStorage.setItem("token", token);
      alert("Signed In successfully!!");

      router.push("/room"); // ✅ navigate
    } catch (error) {
      alert("User doesn't exist !!");
    }
  }

  // ✅ Signup
  async function signupfunction() {
    try {
      const response = await axios.post(`${HTTP_BACKEND}/signup`, {
        name: nameRef.current?.value,
        username: usernameRef.current?.value,
        password: passwordRef.current?.value,
      });
      router.push("/signin");
      console.log(response);
      alert("User created successfully");
    } catch (error: any) {
      console.error(error);

      if (error.response?.status === 400) {
        alert("Incorrect Inputs");
        return;
      }

      alert("Email Already Exists");
    }
  }

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center bg-[#F3F3F7]">
        <div className="bg-amber-50 rounded-xl w-30% ">
          <h1 className="text-5xl font-extrabold text-center p-4 ">
            {isSignin ? "Sign in" : "Sign up"}
          </h1>
          <div className="p-6 m-2 rounded w-full mt-8">
            {/* Only show Name input in Signup */}
            {!isSignin && (
              <div className="p-2 text-black">
                <input
                  ref={nameRef}
                  className="p-2 w-96 font-bold h-12"
                  type="text"
                  minLength={3}
                  placeholder="Name"
                  required
                />
              </div>
            )}

            <div className="p-2 text-black">
              <input
                ref={usernameRef}
                className="p-2 w-96 font-bold h-12"
                type="text"
                required
                placeholder="Email"
              />
            </div>

            <div className="p-2 text-black">
              <input
                ref={passwordRef}
                className="p-2 w-96 font-bold h-12"
                type="password"
                minLength={6}
                required
                placeholder="Password"
              />
            </div>

            <div className="p-2">
              <Button
                variant="hero"
                className="w-108 h-16 cursor-pointer text-xl mt-4"
                onClick={isSignin ? signinfunction : signupfunction}
              >
                {isSignin ? "Sign in" : "Sign up"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
