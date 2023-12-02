import Image from "next/image";

const Block = ({head,para,img}) => {
  return (
    <div className=" border-r border-gray-300  w-52 h-full flex items-center ml-4">
      <Image
        src={img}
        alt="demo"
        width={100}
        height={100}
      className="w-8 h-8 mr-2"
      />
      <div className="mr-5">
        <h3 className="font-bold text-base">{head}</h3>
        <p className="text-gray-500 text-sm  line-clamp-1">
          {para}
        </p>
      </div>
    </div>
  );
};

export default Block;
