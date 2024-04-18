import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center my-6 lg:my-12">
             <Helmet>
        <title>Not Found!</title>
      </Helmet>
            <h2 className="text-5xl font-semibold">Oops! Not Found!!</h2>
            <Link className="btn" to="/">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;