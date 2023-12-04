import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
  return (
    <>
      <section className=" border-2 flex justify-between shadow-md rounded-lg h-full w-full mb-5 p-5">
        <section className="left-side flex w-3/6 justify-end">
          <Image
            width={300}
            height={300}
            src={e?.banner}
            alt="hotelImage"
            className="w-96 h-96"
          />
          <section className="grid grid-rows-3 ml-1 mr-10">
              {e
                ? e.gallery?.map((gal, index) => {
                    return (
                      <Image
                        key={index}
                        width={300}
                        height={400}
                        src={gal}
                        alt="hotelImage"
                        className="w-20 h-20"
                      />
                    );
                  })
                : ""}
          </section>
        </section>
        <section className="right-side flex flex-col justify-start  w-3/6">
          <span className="font-bold text-3xl line-clamp-2 my-4">
            {e?.name}
          </span>
          <span className="font-semibold text-lg text-gray-500 w-3/4 line-clamp-4">
            {e?.description}
          </span>
          <section className="flex gap-3  my-5">
            <span className="font-bold">Facilities : </span>
            <ul className="flex items-center justify-center ml-5 gap-8">
              {e
                ? e.facillities?.map((ele, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-col justify-center items-center"
                      >
                        <span>
                          <Image
                            width={200}
                            height={200}
                            className="h-5 w-6"
                            src={ele?.img}
                            alt=""
                          />
                        </span>
                        <span>{ele?.name}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </section>
          <span className="font-bold mb-4">
            Location : <span className="font-semibold">{e?.location}</span>{" "}
          </span>
          <section className="rates flex items-center pt-3 gap-2">
            <span className="text-2xl text-red-600 font-bold">₹{e?.price}</span>
            <span className=" text-lg text-gray-500 line-through">
              {e?.rprice}
            </span>
            <span className=" text-[#F6A623] font-semibold">72% off</span>
          </section>
          <div className="bookbtn  flex justify-center items-center gap-5">
            <button className="w-28 h-10 rounded-md bg-transparent border-2 border-black">
              <Link href={`/hotels/${e?._id}`}>View Detaills</Link>
            </button>
            <button className="w-28 h-10 rounded-md bg-[#1AB64F] text-white font-bold">
              Book Now
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hotel;
