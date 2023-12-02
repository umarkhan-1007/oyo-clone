"use client";
import Cookies from "js-cookie";
// import Header1 from "@/Components/Header1";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Swipper from "@/Components/Swipper";

const SingleHotel = ({ hotel }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (Cookies) {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, []);

  return (
    <>
      {/* <head>
        <title>{hotel.name}</title>
      </head> */}
      {/* <Header1 /> */}
      <Swipper hotel={hotel} />
      <div className="flex w-full justify-center items-center p-10">
        <div className="left-site w-3/4 pl-24">
          <h1 className="text-3xl capitalize font-bold mb-3 line-clamp-1">
            {hotel.name}
          </h1>
          <div className="flex items-center gap-2 bg-[#f6ebe1] max-w-xs rounded-md my-4 justify-center h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="11"
              viewBox="0 0 13 11"
            >
              <path
                fill="none"
                stroke="#F49242"
                stroke-width="1.6"
                d="M6.498 9.957l.431-.362c3.13-2.617 4.122-3.558 4.792-4.703.324-.555.479-1.07.479-1.595C12.2 1.907 10.999.8 9.425.8c-.891 0-1.77.38-2.337.996l-.588.636-.588-.636C5.344 1.18 4.466.8 3.575.8 2.001.8.8 1.908.8 3.297c0 .523.153 1.036.475 1.588C1.943 6.031 2.93 6.968 6.07 9.6l.428.357z"
              ></path>
            </svg>{" "}
            <span className="text-[#d99a42] font-bold">
              location from: {hotel.location}{" "}
            </span>
          </div>
          <div className="discription w-4/5">
            <h2 className="text-2xl font-bold">Discription</h2>
            <span className="text-base text-slate-600 font-thin line-clamp-3 italic  text-start my-4">
              {hotel.description}
            </span>
          </div>
          <section className="w-5/6 ">
            <p className="font-bold text-2xl">Facillities</p>
            <ul className="flex justify-between w-3/4 font-semibold my-7">
              {hotel
                ? hotel.facillities?.map((fac, index) => {
                    return (
                      <li key={index} className="flex gap-2 items-center">
                        <span>
                          <Image
                            className="h-5 aspect-auto"
                            src={fac?.img}
                            alt=""
                          />
                        </span>
                        <span>{fac?.name}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </section>
        </div>
        <div className="right-side h-full w-2/4/4">
          <div className="booking-container w-auto border h-auto rounded-md ">
            <div className="login-container rounded-t-md w-full h-10  bg-gradient-to-bl from-orange-700  to-red-500 flex items-center gap-2 px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              >
                {" "}
                <g fill="none" fill-rule="nonzero">
                  {" "}
                  <path
                    fill="white"
                    d="M8.113.468L9.897.014a.467.467 0 0 1 .44.118l1.318 1.284a.467.467 0 0 0 .2.115l1.771.497a.467.467 0 0 1 .323.323l.498 1.769c.021.075.06.143.115.2l1.285 1.314a.467.467 0 0 1 .119.442l-.455 1.78a.466.466 0 0 0 0 .23l.455 1.78a.467.467 0 0 1-.119.442l-1.284 1.315a.467.467 0 0 0-.116.2l-.498 1.768a.467.467 0 0 1-.323.323l-1.772.498a.466.466 0 0 0-.199.114l-1.318 1.284a.466.466 0 0 1-.44.118l-1.784-.454a.467.467 0 0 0-.23 0l-1.784.454a.467.467 0 0 1-.44-.118L4.34 14.527a.467.467 0 0 0-.2-.115l-1.771-.498a.466.466 0 0 1-.323-.323l-.498-1.768a.466.466 0 0 0-.116-.2L.15 10.308a.466.466 0 0 1-.119-.441l.455-1.78a.466.466 0 0 0 0-.231L.03 6.076a.467.467 0 0 1 .119-.442L1.434 4.32a.467.467 0 0 0 .115-.2l.498-1.768a.467.467 0 0 1 .323-.323l1.772-.497a.466.466 0 0 0 .2-.115L5.658.132a.466.466 0 0 1 .44-.118l1.784.454c.075.02.155.02.23 0z"
                  ></path>{" "}
                  <path
                    fill="#DA315C"
                    d="M7.333 6c0 .735-.598 1.333-1.333 1.333A1.335 1.335 0 0 1 4.667 6c0-.735.598-1.333 1.333-1.333S7.333 5.265 7.333 6zM5.536 6a.464.464 0 1 0 .929-.001.464.464 0 0 0-.929.001zM10 8.667c.735 0 1.333.598 1.333 1.333s-.598 1.333-1.333 1.333A1.335 1.335 0 0 1 8.667 10c0-.735.598-1.333 1.333-1.333zm0 1.797a.464.464 0 1 0-.001-.929.464.464 0 0 0 .001.929zm.534-4.998a.455.455 0 0 1 0 .643l-4.425 4.425a.453.453 0 0 1-.643 0 .454.454 0 0 1 0-.643l4.425-4.425a.454.454 0 0 1 .643 0z"
                  ></path>{" "}
                </g>{" "}
              </svg>
              <span className="line-clamp-2 uppercase text-sm font-bold leading-4 text-white">
                Login now to get upto 15% lower prices
              </span>
              <Link href={"/login"}>
                <button className="uppercase bg-orange-400 bg-opacity-50 text-sm text-white h-7 rounded-sm w-20 font-bold">
                  Login
                </button>
              </Link>
            </div>
            <div className="price-container flex gap-3 justify-center py-14 items-center">
              <span className=" text-4xl font-bold">&#8377;{hotel.price}</span>
              <span className="text-2xl text-slate-600 font-semibold line-through">
                &#8377;{hotel?.rprice}
              </span>
              <span className="text-[#F6A623] text-xl font-semibold">75% off</span>
            </div>
            <div className="calender-container w-full flex justify-center">
              <input type="time" />
              <input type="week" />
            </div>

            <section className="btn  items-stretch flex gap-5 w-full justify-center">
              {auth ? (
                <Link href={`/payment/${hotel?._id}`}>
                  <button className="px-10 py-4 bg-red-600 text-white font-bold my-5 rounded-md">
                    Continue to Book
                  </button>
                </Link>
              ) : (
                <span className="text-xl">
                  please{" "}
                  <Link
                    href={"/login"}
                    className="text-red-800 font-bold underline"
                  >
                    Log in
                  </Link>{" "}
                  to get new offers !{" "}
                </span>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.HOST_URL}/api/hotels/${ctx.query.id}`);
  const data = await res.json();

  return {
    props: {
      hotel: data.hotel,
    },
  };
}

export default SingleHotel;
