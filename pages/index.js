import Header2 from "@/Components/Header2"
import Header1 from "../Components/Header1"
import Header3 from "@/Components/Header3"
import Image from "next/image"
import Head from "next/head"
import Header4 from "@/Components/Header4"
import Footer from "@/Components/Footer"


const Home = () => {
  return (
    <div>
      <Header1/>
      <Header2/>
      <Header3/>
      <div className="flex justify-center items-center flex-col  my-12">
        <Image src={"/banner1.avif"} alt="banner1" width={200} height={200} className="h-800 w-11/12 mb-16"/>
        <Image src={"/banner2.avif"} alt="banner1" width={200} height={200} className="h-800 w-11/12"/>
      </div>
      <Header4/>
      <Footer/>
    </div>
  )
}

export default Home
