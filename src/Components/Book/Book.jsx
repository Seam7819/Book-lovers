
const Book = ({ book }) => {
    const {bookName,image} = book;
    return (
        <div className="card bg-base-100 my-20 lg:my-0 lg:w-96 shadow-sm">
            <figure>
                <img className="w-[700px] lg:w-96 h-96 lg:h-72"
                    src={image}
                    alt="books" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Card Title
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;