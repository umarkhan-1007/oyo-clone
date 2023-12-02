import Filter from "@/Components/Filter";
import Header1 from "@/Components/Header1";
import Hotel from "@/Components/Hotel";
import axios from "axios";
import { useEffect, useState } from "react";

const Hotels = ({ hotels }) => {
  const [price, setPrice] = useState(1000);
  const [list, setList] = useState([]);
  const [checkList, setCheckList] = useState([]);

  const handleCheckList = async () => {
    const { data } = await axios.get(
      `api/facillities/search?val=${checkList}`
    );
    if (data?.hotels) {
      setList(data.hotels);
    }
  };

  useEffect(() => {
    if (checkList) {
      handleCheckList();
    }
  },);

  const handlerPrice = async () => {
    const { data } = await axios.get(`api/facillities/range?price=${price}`);
    if (data?.hotels) {
      setList(data?.hotels);
    }
  };

  //
  return (
    <>
      <Header1 />
      <div className="grid grid-cols-12">
        <div className="col-span-3  border-r-2 border-black border-opacity-10">
          <Filter
            price={price}
            setPrice={setPrice}
            handlerPrice={handlerPrice}
            checkList={checkList}
            setCheckList={setCheckList}
          />
        </div>
        <div className="col-span-9">
          {list?.length > 0
            ? list.map((e) => {
                return (
                  <div className="m-5" key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : hotels
            ? hotels.map((e) => {
                return (
                  <div className="m-5" key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.HOST_URL}/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}

export default Hotels;
