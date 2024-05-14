import Link from "next/link";

const d = '[‘disciple’]'; 

const gspLinks = [
    {name:  "https://www.theblueeconomy.org/", href:"https://www.theblueeconomy.org/"},
    {name: "https://www.blueecampus.ch/", href:"https://www.blueecampus.ch/"},
    {name: "https://www.guntersfables.org/", href:"https://www.guntersfables.org/"},
    {name: "https://stone-paper.nl/", href:"stone-paper.nl"}
]

export function About (){
    return (
        <div className="pt-4 px-12 mt-2">
            <h1 className="text-[#18A9EC] text-[20px] text-start text pb-8">About Us</h1>
            <h1 className="pb-4">History</h1>
            <p className="text-justify pb-4 leading-[30px]">Co-founded post-COVID by 2 Nigerian prodigies (one is an original {d} of Prof. Gunter Pauli while the other is now a keen convert) at an Arabian tea spot in Abuja, FCT Nigeria, <b>Premium Blue Economy Innovations and Investments Limited</b> has a unique assortment of some of the most experienced advisors, scientists, social scientists, engineers, economists, strategists, investment experts and other technical subject matter experts in Nigeria and beyond working in the marine and blue economy, climate adaptation, environment and other ancillary sectors </p>
            <h1 className="font-bold">Our Vision</h1>
            <p className="pb-4 leading-[30px]">To be <em><b>the leading 'blue economy' partner of choice</b></em> for public and private sector leaders.</p>
            <h1 className="font-bold">Our Mission</h1>
            <p className="leading-[30px] pb-12">To <em><b>catalyze Nigeria's shared and sustainble blue prosperity,</b></em> stimulating blue economy innovations while facilitating local and foreign direct investments and global strategic partnerships for blue economy initiatives across the country.</p>

            <div>
                <p className="pb-4">GLOBAL STRATEGIC PARTNERSHIP</p>
                {gspLinks.map((item, index) => (
                        <Link className="text-[#18A9EC] flex py-2 font-medium underline" href={item.href} key={index}>
                            {item.name}
                        </Link>))}
            </div>

        </div>
    )
}