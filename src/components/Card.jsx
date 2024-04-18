

const Card = ({card}) => {
    const {estate_title,segment_name,description,price,Status,facilities,image} = card;
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
            className="bg-[#ef506008] btn text-black lg:p-3 font-semibold rounded-3xl text-xs"
          >{tag}</button>
        ))}
      </div>
            <h2 className="text-2xl font-bold">{estate_title}</h2>
            <p className="text-[#131313CC] text-base">{segment_name}</p>
            <div className="divider"></div>

            {/* <div className="flex justify-between">
              <p>{category}</p>
              <div className="flex justify-center items-center gap-3">
                <p>{rating}</p>
                <CiStar />

              </div>
            </div> */}
          </div>
        </div>
    );
};

export default Card;