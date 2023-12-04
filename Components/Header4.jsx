import Image from 'next/image';

const Header4 = () => {
  return (
    <div className="flex items-center justify-between px-8 ml-14 w-11/12 mb-10 border-2 rounded-md border-gray-300 h-24  ">
      <div className="fire-head flex ">
        <Image
          src="/fire.png"
          alt=""
          width={105}
          height={26}
          className="w-14"
        />
        <div className="flex-col ml-6 flex">
          <span className="text-xl font-bold">Get access to exclusive deals</span>
          <span className="text-gray-400 text-base">Only the best deals reach your inbox</span>
        </div>
      </div>
      <div className="email-btn ">
        <input type="text" placeholder="e.g.,umr@email.com" className="outline-none border-2 border-gray-400 w-80 rounded-md px-2 h-12 text-lg" />
        <button type="button" className="bg-[#EE2A24] text-white text-sm ml-4 font-bold h-12 w-28 rounded-md">Notify me</button>
      </div>
    </div>
  );
};

export default Header4;
