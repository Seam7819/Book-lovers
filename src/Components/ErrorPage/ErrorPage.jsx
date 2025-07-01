import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div >
            <div className="flex justify-center items-center mt-32">
                <img className="w-96" src="https://i.imgflip.com/90c6yv.jpg" alt="" />
            </div>

            <div className="flex justify-center items-center mt-10">
                <Link  to="/">
                <button  className="btn btn-soft btn-error">Back TO Home</button>
            </Link>
            </div>
        </div>
    );
};

export default ErrorPage;