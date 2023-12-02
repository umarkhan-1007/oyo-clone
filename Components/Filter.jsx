import axios from "axios";
import React, { useState, useEffect } from "react";

const Filter = ({price, setPrice, handlerPrice, checkList, setCheckList}) => {
  const [list, setList] = useState([]);

  const fatchFacillities = async () => {
    try {
      // this api fatching to present facillities like [wifi, praking, swmming pool and Tv, Ac]
      const { data } = await axios.get(`api/facillities`);
      const facillities = data.facillities;
      setList(facillities);
    } catch (error) {
      console.error(`error will factch facillities`);
    }
  };

  const handleCheckList = async (e) => {
    let newList = [];

    if (e.target.checked) {
      newList.push(e.target.value);
      setCheckList(newList);
      return;
    }

    newList = newList.filter((i) => i !== e.target.value);
    setCheckList(newList);
  };

  useEffect(() => {
    fatchFacillities();
  }, []);

  return (
    <>
      <div className=" h-10 rounded-md">
        <section className="p-10 flex gap-3 ">
          <label htmlFor="price" className="text-xl font-sans font-semibold">
            Price :{" "}
          </label>
          <input
            type="range"
            name="price"
            id="price"
            min={500}
            max={3000}
            className=""
            onChange={(e) => setPrice(e.target.value)}
            defaultValue={price ? price : 0}
          />
          <span className="font-semibold">&#8377; {price ? price : ""}</span>
        </section>
        <div className=" flex justify-center -mt-5">
          <button
            className="w-40 h-10 bg-green-300 rounded-md text-lg font-semibold cursor-pointer my-3"
            onClick={handlerPrice}
          >
            Search
          </button>
        </div>
        <h1 className="text-xl font-semibold pl-5">Filter By Facillities :</h1>
        <section className=" my-5 pl-5">
          {list.map((e) => {
            return (
              <p key={e} className="items-center my-3 grid grid-cols-5 ">
                <label htmlFor="checkBox" className="col-span-3">
                  {e}
                </label>
                <input
                  type="checkbox"
                  name="checkBox"
                  id="checkBox"
                  className="w-5 h-5 ml-3 col-span-2"
                  value={e}
                  onChange={handleCheckList}
                />
              </p>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Filter;
