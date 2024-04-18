import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const cards = useLoaderData();
    const {id} = useParams();
    console.log(id, cards);
    const intId = parseInt(id);
    const card = cards.find((card) => card.id == intId);
   
    return (

        <div>
             <Helmet>
        <title>Card Details</title>
      </Helmet>
            <div className="card lg:p-8">
            <div className="bg-[#1313130D] rounded-2xl  flex justify-center items-center">
                <img className="w-full" src={card.image} />
            </div>
            <div className="card-body lg:w-1/2">
                <h2 className="text-4xl font-bold">{card.estate_title}</h2>
                <p className="text-[#131313CC] text-xl font-semibold">{card.segment_name}</p>
                <div>
                    <p className="text-base">
                        <span className="text-black font-semibold">Details:</span>{" "}
                        {card.description}
                    </p>

                    {card.facilities.map((tag, index) => (
                        <div
                            key={index}
                            className="bg-[#ef506024] btn text-black lg:p-3 font-semibold rounded-3xl text-xs"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="flex gap-4">
                    <div>
                        <p className="text-[#131313B2] text-base">Area: </p>
                        <p className="text-[#131313B2] text-base">Location: </p>
                        <p className="text-[#131313B2] text-base">Status: </p>
                        <p className="text-[#131313B2] text-base">Price: </p>
                    </div>
                    <div>
                        <p className="text-black font-bold">{card.Area}</p>
                        <p className="text-black font-bold">{card.location}</p>
                        <p className="text-black font-bold">{card.Status}</p>
                        <p className="text-black font-bold">{card.price}</p>
                    </div>
                </div>
                
            </div>
        </div>
            
        </div>
    );
};

export default CardDetails;