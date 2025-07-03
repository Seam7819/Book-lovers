import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/public/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div >
            <div className="text-3xl font-bold text-center my-40 underline lg:my-20">
                BOOKS</div>

            <div className="grid justify-items-center  lg:grid-cols-3">
                {
                    books.map(book => <Book book={book} bookId={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;