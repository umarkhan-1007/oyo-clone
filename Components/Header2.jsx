import Image from "next/image"

const Header2 = () => {

    const list =[
        {
            name: "Banglore",
            image:"./angle-down.svg"
        },
        {
            name: "chennai",
            image:"./angle-down.svg"
        },
        {
            name: "Delhi",
            image:"./angle-down.svg"
        },
        {
            name: "Pune",
            image:"./angle-down.svg"
        },
        {
            name: "Hyderabad",
            image:"./angle-down.svg"
        },
        {
            name: "Mumbai",
            image:"./angle-down.svg"
        },
        {
            name: "Noida",
            image:"./angle-down.svg"
        },
        {
            name: "Kolkata",
            image:"./angle-down.svg"
        },
        {
            name: "All City",
            image:"./angle-down.svg"
        },
        ]

  return (
    <div>
      <div className="header2 flex h-8 bg-gray-200 justify-around items-center gap-5 px-12">
        {
            list.map((e,i) => {
                return(
                    <div className="flex items-center justify-center gap-1" key={i}>
                    <span className="text-gray-600">{e.name}</span>
                    <Image src={e.image} alt="down arrow" width={200} height={200}  className=" w-3 h-3 mt-1" />
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Header2
