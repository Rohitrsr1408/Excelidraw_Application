"use client";

export function AuthPage({ isSignin }: { isSignin: boolean }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="p-6 m-2 bg-white rounded">
        <div className="p-2  text-black ">
          <input className="p-2" type="text" placeholder="Email"></input>
        </div>
        <div className="p-2 text-black">
          <input className="p-2" type="password" placeholder="password"></input>
        </div>

        <div className="p-2">
          <button className="bg-red-200 rounded p-2 hover:bg-red-600 cursor-pointer " onClick={() => {}}>
            {isSignin ? "Sign in" : "Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}
