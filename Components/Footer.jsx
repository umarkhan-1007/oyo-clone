import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillWechat,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-slate-300 h-auto font-bold text-2xl py-10">
      <div className="socil-icon flex justify-evenly w-full">
        <Link  href={"https://www.instagram.com/a.m.kitkat/"}><div className="twiter-cnt border-2 border-black flex flex-col justify-center items-center  rounded-full w-40 h-20">
          <AiFillTwitterCircle size={"40"} />
          <span className=" uppercase font-bold text-xs">twitter</span>
        </div></Link>
        <div className="twiter-cnt border-2 border-black flex flex-col justify-center items-center  rounded-full w-40 h-20">
          <AiFillWechat size={"40"} />
          <span className=" uppercase font-bold text-xs">wechat</span>
        </div>
        <div className="facebook-cnt border-2 border-black flex flex-col justify-center items-center  rounded-full w-40 h-20">
          <AiFillFacebook size={"40"} />
          <span className=" uppercase font-bold text-xs">facebook</span>
        </div>
        <Link href={"https://www.instagram.com/a.m.kitkat/"}><div className="instagram-cnt border-2 border-black flex flex-col justify-center items-center  rounded-full w-40 h-20">
          <AiFillInstagram size={"40"} />
          <span className=" uppercase font-bold text-xs">instagram</span>
        </div></Link>
      </div>
      <div className="copyright-cont flex items-center flex-col py-5">
        <span className="underline">OYO Right</span>
        <span className=" text-sm text-slate-400 italic py-5">&#169; copyright by oyo</span>
        <span className="text-slate-400 italic ">Clone Created by Mr_umar khan</span>
        <span className="text-slate-400 italic text-base ">email:-umarkhan71711@gamil.com</span>
      </div>
    </div>
  );
};

export default Footer;
