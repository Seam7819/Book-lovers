import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {

    const {bookId} = useParams();
    console.log(bookId);

    const data = useLoaderData();
    console.log(data);
    const id = parseInt(bookId);

    const book = data.find(book=> book.bookId === id)
    console.log(book);

    return (
        <div>
            <h1>Book Details {id}</h1>
        </div>
    );
};

export default BookDetail;