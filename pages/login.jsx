"use client";
import axios from "axios";
import Cookies from "js-cookie";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const router = useRouter();

  const handleSignUp = async () => {
    const res = await axios.post("/api/user/register", {
      name,
      email,
      password,
    });
    if (res?.data) {
      Cookies.set("user", res.data.token);
      alert(res.data.msg);
    }
  };

  const handleToggle = () => {
    setLogin(!login);
  };

  const handleLogin = async () => {
    const res = await axios.post("/api/user/login", {
      email,
      password,
    });
    if (res?.data) {
      Cookies.set("user", res.data.token, { expires: 7 });
      alert(res.data.msg);
      router.back();
    }
  };

  return (
    <div className="bg-login-background  bg-cover bg-no-repeat">
      <Head>
        <title>OYO : Login </title>
      </Head>
      <div className="log-header flex items-center h-20 w-full  p-14 ">
        <Image
          alt="oyo-logo"
          src={"/oyo-logo.png"}
          width={200}
          height={200}
          className="h-20 w-24 "
        />
        <h1 className=" font-semibold text-lg ml-5 text-white">
          Hotels and homes across 800 cities, 24+ countries
        </h1>
      </div>
      <div className="log-contener flex justify-between  h-screen px-32 items-center  ">
        {/* left side */}
        <div className="left h-full flex justify-center flex-col w-full ml-36">
          <h1 className="text-5xl w-full text-start text-white font-bold rounded-md">
            There a smarter way <br /> to OYO around
          </h1>
          <p className="text-white text-base font-semibold py-6">
            Sign up with your phone number and get exclusive access to discounts
            <br /> and savings on OYO stays and with our many travel partners.
          </p>
        </div>
        {/* right side */}
        <div className="right h-full flex justify-center items-center w-full ">
          <div className="white h-4/6 w-5/6  rounded-md bg-white">
            <h3 className=" bg-gradient-to-t h-10  text-white font-semibold text-base pt-2 px-10 from-red-600 to-red-700">
              Sign up & Get ₹500 OYO Money
            </h3>
            <div className="px-10 flex flex-col">
              <h1 className="text-4xl font-bold py-7">Login / Signup</h1>
              <h3 className=" font-semibold text-lg py-4">
                Please enter your phone number to continue
              </h3>
              {login ? (
                " "
              ) : (
                <input
                  type="text"
                  placeholder="enter your name"
                  className="outline-none border-2  border-gray-300 h-10 px-2 my-3"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="email"
                placeholder="enter your email"
                className="outline-none border-2  border-gray-300 h-10 px-2 my-3"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="enter your password"
                className="outline-none border-2  border-gray-300 h-10 px-2 my-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="w-48  bg-gray-300 h-12 font-bold  text-slate-700 text-lg rounded-md"
                onClick={login ? handleLogin : handleSignUp}
              >
                {login ? "Login" : "signUp"}
              </button>
              <div className="flex gap-3  py-6">
                <h2 className=" font-semibold ">
                  {login
                    ? "create an new account plz"
                    : "allready have account?"}
                </h2>{" "}
                <button
                  className="font-bold text-red-700 text-base border-b-2 border-red-500"
                  onClick={handleToggle}
                >
                  {login ? "SignUp" : "Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
