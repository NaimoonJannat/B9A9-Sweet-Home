import { Helmet } from "react-helmet-async";
import SaleCards from "./SaleCards";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Sweet Home | Home</title>
      </Helmet>
            <Slider></Slider>
            <SaleCards></SaleCards>
        </div>
    );
};

export default Home;