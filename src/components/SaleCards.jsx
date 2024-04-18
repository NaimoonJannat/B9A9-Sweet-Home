import { useEffect, useState } from "react";
import Card from "./Card";

const SaleCards = () => {
    const [flats, setFlats] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setFlats(data));
    } ,[])
    return (
        
        <div className="text-center lg:my-10">
            <h2 className="text-2xl lg:text-4xl mb-8 font-bold">Our Estates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    flats.map(card => <Card key="card.id" card={card}></Card>)
                }

            </div>
            
        </div>
    );
};

export default SaleCards;