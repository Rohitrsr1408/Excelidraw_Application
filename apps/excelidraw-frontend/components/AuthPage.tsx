"use client";
import { HTTP_BACKEND } from "@/config";
import { Button } from "./ui/button";
import Navbar from "./ui/Navbar";
import axios from "axios";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightCircle } from "lucide-react";
import toast from "react-hot-toast";
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
      toast.success("Signed In Successfully");

      router.push("/room"); // ✅ navigate
    } catch (error) {
      toast.error("User doesn't Exist . Please Sign Up !!")
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
      toast.success("User Signed up Successfully!");
    } catch (error: any) {
      console.error(error);

      if (error.response?.status === 400) {
        toast.error("Incorrect Inputs");
        return;
      }

      toast.error("Email already registered ! Please Sign in")
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
            <div className="w-full text-center p-4 flex justify-evenly ">
              {isSignin ? "New User?  " : "Already have an account? "}

              {isSignin ? (
                <a href="/signup">Sign Up</a>
              ) : (
                <a href="/signin">Sign In</a>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
