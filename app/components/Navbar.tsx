import Image from "next/image";
import LogoA from "../../public/assets/Logo.jpg";
import Menu from "../../public/assets/Menu.svg"

const navLinks = [
    {name:  "HOME"},
    {name: "ABOUT US"},
    {name: "OUR PEOPLE"},
    {name: "OUR BUSINESS"},
    {name: "PORTFOLIO"}
]

export function Navbar(){
    return(
        <nav className="flex w-full items-center justify-between py-[1px] fixed top-0 shadow-md bg-[#F7F7F7]">
            <div className="flex items-center">
                <Image src={LogoA} alt="Logo" className="object-contain max-h-16 w-48"/>
                <div className="hidden lg:flex pl-[512px] gap-x-[56px]">
                    {navLinks.map((item, index) =>(
                        <p className="text-[#18A9EC] font-medium" key={index}>
                            {item.name}
                        </p>
                    ))}
                </div>
            </div>
            <div className="flex gap-x-5">
                <p className="hidden lg:block font-medium text-[#18A9EC]">CONTACT US</p>
                <div className="flex items-center gap-x-2 px-2">
                    <Image src={Menu} alt="Menu Button" className="lg:hidden" />
                </div>
            </div>
            
            
        </nav>
    )
}