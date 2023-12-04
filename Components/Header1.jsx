"use client";
import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header1 = () => {
  const [loginAuth, setLoginAuth] = useState(false);

  useEffect(() => {
    if (Cookies) {
      setLoginAuth(true);
      return;
    }
    setLoginAuth(false);
  }, []);
  const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("user");
    router.push("/");
  };
  return (
    <>
      <div className="  flex h-20 border-b-2 items-center justify-between w-full pl-16">
        <div>
          <Image
            src={"/oyo-logo.png"}
            alt="oyo-logo"
            width={200}
            height={200}
            className="w-28 h-20  rounded-full "
          />
        </div>
        <div className="border-r-2 border-gray-300 flex h-full">
          <Block
            head={"Become a member"}
            para={"addtional 10% off on stays."}
            img={"./member.svg"}
          />
          <Block
            head={"OYO for Business"}
            para={"Trusted by 5000 Corporates"}
            img={"./business.svg"}
          />
          <Block
            head={"List your proparty"}
            para={"Start earning in 30 mins"}
            img={"./building.svg"}
          />
          <Block
            head={"91+ 9975102049"}
            para={"Call us to Book now"}
            img={"./phone-call.svg"}
          />
        </div>
        <div className="language flex border-r-2 items-center mr-2 ml-2">
          <Image
            src={"./globe.svg"}
            alt="demo"
            width={100}
            height={100}
            className="w-6 h-6 mr-2"
          />
          <h1 className="font-bold text-base">English</h1>
          <Image
            src={"./caret-down.svg"}
            alt="demo"
            width={100}
            height={100}
            className="w-6 h-6 mr-2"
          />
        </div>
        <div className="sig-log flex items-center border-none mr-10 ml-2">
          <Image
            src={"/profile.gif"}
            alt="profile"
            width={100}
            height={100}
            className="w-10 h-10 mr-2"
          />
          <div
            className="font-bold text-base cursor-pointer"
            onClick={handleLogout}
          >
            {loginAuth ? (
              <h3>Logout</h3>
            ) : (
              <Link href={"/login"}>
                <button className="font-bold text-base">Login / Signup</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header1;
