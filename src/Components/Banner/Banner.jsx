import bannerImg from "../../assets/books.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 mt-40 lg:mt-0 min-h-full lg:min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-full  justify-around">
                <img
                    src={bannerImg}
                    className="max-w-2xl border-2 rounded-lg mb-5 lg:mb-0 shadow-2xl"
                />
                <div className="mr-40 lg:mr-0">
                    <h1 className="text-5xl  font-bold  mb-10 ">Books To Freshen <br /> Up Your Bookshelf</h1>
                    <button className="btn btn-soft btn-warning">Listed Books</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;