import bannerImg from "../../assets/books.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-full  justify-around lg:justify-normal ">
                <img
                    src={bannerImg}
                    className="max-w-2xl rounded-lg mb-5 lg:mb-0 shadow-2xl"
                />
                <div >
                    <h1 className="text-6xl font-bold mb-10 ">Books To Freshen Up <br /> Your Bookshelf</h1>
                    <button className="btn btn-soft btn-warning">Listed Books</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;