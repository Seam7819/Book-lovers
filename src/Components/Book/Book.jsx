
const Book = ({ book }) => {
    const { bookName, image, author, category, rating } = book;
    return (
        <div className="card bg-base-100 my-20 lg:my-5 lg:w-96 shadow-sm ">
            <figure >
                <img className="w-[700px] lg:w-96 h-96 lg:h-72"
                    src={image}
                    alt="books" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between my-5">
                    <button className="btn btn-soft btn-success">Young Adult</button>
                    <button className="btn btn-soft btn-success">Identity</button>
                </div>
                <h2 className="card-title">
                    {bookName}
                </h2>
                <p className="text-sm mb-2">By : {author}</p>
                <hr />
                <div className="card-actions justify-between">
                    <p>{category}</p>
                    <div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;