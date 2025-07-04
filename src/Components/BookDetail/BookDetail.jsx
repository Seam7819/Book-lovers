import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
    const { bookId } = useParams();
    console.log(bookId);

    const data = useLoaderData();
    console.log(data);
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id)
    console.log(book);

    const { author, bookId: currentId, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = book;

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;