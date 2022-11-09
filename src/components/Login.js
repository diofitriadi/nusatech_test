import React from "react";

const Login = () => {
  return (
    <main className="bg-black text-[#F2F0FF] ">
      <section>
        <div className="flex flex-row">
          <img className="h-[60%]" src="/Rectangle7.png" alt="logo" />
          <p>Dogecoin</p>
        </div>
      </section>
      <div className="flex">
        <section>
          <img src="/image4.png" alt="roket" />
        </section>
        <section className="w-[60%] ml-10">
          <div>
            <h1 className="text-3xl font-bold mb-5">Sign Up</h1>
            <p className="text-xs">Use your openID to sign up</p>
          </div>
          <form className="flex flex-col">
            <label htmlFor="email" className="mt-5 mb-3 text-sm">
              Email :{" "}
            </label>
            <input
              className="w-[30%] rounded-sm mb-3 px-2 py-1"
              type="text"
              placeholder="please insert your email"
            />
            <label htmlFor="password" className="mb-3">
              Password :{" "}
            </label>
            <input
              className="w-[30%] rounded-sm"
              type="password"
              placeholder="please insert your password"
            />
            <label htmlFor="password " className="my-3">
              Confirm Password :{" "}
            </label>
            <input
              className="w-[30%] rounded-sm"
              type="password"
              placeholder="please insert your password"
            />
          </form>
          <div className="flex flex-row">
            <p className="ml-2">Referal Id</p>
            <select className="w-[50%]">
              <option>Optional</option>
            </select>
          </div>
          <button className="bg-[#02C3BD] w-[30%] my-5 px-2 py-2 rounded-md hover:bg-[#4062BB] transition">
            <p className="font-bold">Sign Up</p>
          </button>
        </section>
      </div>
    </main>
  );
};

export default Login;
