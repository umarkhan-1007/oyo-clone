"use client"
import Link from "next/link";
import { useState } from "react";


const Header3 = () => {
  const [city, setCity] = useState(" ");
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 h-60 flex justify-center flex-col items-center ">
      <h1 className="text-4xl font-bold text-white">
        Over 157,000 hotels and homes across 35 countries
      </h1>
      <div className="grid grid-cols-5  p-6">
        <input
          type="text"
          placeholder="Search by city, Hotel"
          className="h-16 outline-none px-3 text-lg border-r-2 border-gray-300 col-span-2"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="date"
          min="2025-01-01" max="2025-12-31"
          placeholder="Search by city, Hotel"
          className="h-16 outline-none px-3 text-lg border-r-2 border-gray-300 col-span-1"
        />
        <input
          type="text"
          placeholder="Search by city, Hotel"
          className="h-16 outline-none px-3 text-lg border-r-2 border-gray-300 col-span-1"
        />
      
       <button
          type="submit"
          className="col-span-1 bg-green-500 text-white text-xl font-bold hover:bg-green-600"
        >
          <Link href={`/hotels?city=${city}`}>Search</Link>
        </button>
       
      </div>
      <div className="flex text-lg content-start w-9/12 text-white gap-7 font-semibold">
        <span>countinue your search</span>
        <button type="button" className="border-white w-40 h-8 font-bold text-sm border-2 rounded-sm hover:bg-red-800">Pune - 12 Nov</button>
      </div>
    </div>
  );
};

export default Header3;
