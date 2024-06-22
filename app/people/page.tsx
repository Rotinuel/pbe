const dataList = [
    {
        img: "/assets/Pauli2.jpg",
        name: "Prof. Gunter Pauli",
        text: "Technical Partner",
        position: "Global Advisory Board"
    },
    {
        img: "/assets/Olushola.jpg",
        name: "Sola A. Gegele",
        text: "Co-founder/CEO",
        position: "Executive Member"
    },
    {
        img: "/assets/fife.jpg",
        name: "Fife Banks",
        text: "Co-founder/COO",
        position: "Executive Member"
    },
    {
        img: "",
        name: "Victor Ayo Oritedi",
        text: "Director, Business Development",
        position: "Executive Member"
    },
    {
        img: "/assets/adulraham.jpg",
        name: "AbdulRahman Odewale",
        text: "Team Lead, Special Projects",
        position: "Executive Member"
    },
    {
        img: "/assets/grace.jpg",
        name: "Grace Eluma",
        text: "",
        position: " Staff Members"
    },
    {
        img: "",
        name: "Prof. Gunter Pauli",
        text: "Technical Partner",
        position: "Global Advisory Board"
    },
]


function People(){
    return (
        <div className="h-screenflex flex-col justify-between">
            <div className="mx-auto py-24 pt-24 leading-[32px]">
                <h1 className="text-center text-3xl pt-2 mb-8">OUR PEOPLE</h1>
                <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-4">
                    
                    {dataList.map((card, i) => (
                        <div key={i} className="shadow-lg rounded-lg mx-auto">
                            <img className="rounded-t-lg" src={card.img} alt=""/>
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-slate-700 mb-3">{card.name}</h3>
                                <p className="text-md font-normal mb-1 text-slate-500">{card.position}</p>
                                <p className="text-lg font-normal text-gray-600">{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>      
            </div>
        </div>
        
    )
}

export default People;