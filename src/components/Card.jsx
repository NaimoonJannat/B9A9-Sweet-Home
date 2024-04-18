import { FaMapLocationDot } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const Card = ({card}) => {
    const {id, estate_title,segment_name,description,price,Status,facilities,image,Area,location} = card;
    return (
        <div className="card border-[#f65e5ec8] border-2 bg-base-100 shadow-xl">
          <figure className="">
            <div className="w-full flex justify-center items-center text-center p-4 lg:p-3">
            <img src={image} className="h-44 lg:h-40" />
            </div>
            
          </figure>
          <div className="card-body text-left">
          <div className="flex flex-wrap flex-row lg:gap-2">
        
        {facilities.map((tag, index) => (
          <button
            key={index}
            className="bg-[#ef506008] btn text-black lg:p-2 font-semibold rounded-3xl text-xs"
          >{tag}</button>
        ))}
      </div>
            <h2 className="text-2xl font-bold">{estate_title}</h2>
            <p className="text-[#131313CC] font-semibold text-base">{segment_name}</p>
            
            <p className="text-[#131313CC] text-base">{description}</p>
            <div className="flex justify-between">
              <div className="flex justify-center gap-2 items-center">
              <FaMapLocationDot />
              <p>{Area}</p>
              </div>
              <div className="flex gap-2 justify-center items-center">
              <CiLocationOn />
              <p>{location}</p>
              </div>
            </div>
            <div className="flex justify-between">
            <h2 className="text-xl font-bold">{price}</h2>
            <div className="bg-[#ef50605e] rounded-3xl w-1/4 text-base p-2font-semibold flex justify-center items-center">{Status}</div>
            </div>
            <Link to={`/card/${id}`} className="bg-[#ef5060e9] btn rounded-3xl text-base p-3 text-white font-semibold flex justify-center items-center">View Details</Link>
          </div>
        </div>
    );
};

export default Card;