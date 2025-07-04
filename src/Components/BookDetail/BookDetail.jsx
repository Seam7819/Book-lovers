import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from '../Uitility/addToDb';


const BookDetail = () => {
    const { bookId } = useParams();
    console.log(bookId);

    const data = useLoaderData();
    console.log(data);
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id)
    console.log(book);

    const { author, bookId: currentId, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = book;

    const handleMarkAsRead = (id) =>{
        /**
         * 1. understand what to store or save: => bookId
         * 2. Where to store: database
         * 3. array, list, collection: 
         * 4. check: if the book is already in the readList. 
         * 5. if not, then add the book to the list
         * 6. if yes, do not add the book 
        */

        addToStoredReadList(id);
    }

    const handleAddToWishList = (id) =>{
        addToStoredWishList(id);
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content justify-between  w-full flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 flex justify-center bg-amber-100 rounded-md">
                        <img
                            src={image}
                            className="max-w-sm h-[500px] my-10 rounded-lg shadow-2xl"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div>
                            <h1 className="text-5xl font-bold mb-4">{bookName}</h1>
                            <p className="mb-4 text-xl">By: {author}</p>
                        </div>
                        <hr />
                        <p className="my-2 text-xl">{category}</p>
                        <hr />
                        <div className="my-3">
                            <p className="text-sm"><span className="font-bold">Review</span> : {review}</p>
                        </div>
                        <div className="my-3 ">
                            <span className="font-bold mr-10">Tag:</span>
                            {
                                tags.map((tag, index) => <button className="btn btn-sm-outline text-green-500" key={index} tag={tag}> #{tag}</button>)
                            }
                        </div>
                        <div className="my-3">
                            <p className="mb-2">Number Of Pages :  {totalPages}</p>
                            <p className="mb-2">Publisher : {publisher}</p>
                            <p className="mb-2">Year Of Publishing : {yearOfPublishing}</p>
                            <p className="mb-2">Rating : {rating}</p>
                        </div>
                        <div className="flex">
                            <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-neutral btn-outline text-white mr-10">Read</button>
                            <button onClick={() => handleAddToWishList(bookId)} className="btn btn-warning">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;