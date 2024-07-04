"use client";

// PublishedBooksAuthored.js
import React, { useEffect, useState } from 'react';
import { client } from '../client';

const ResearchJournalPapers = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await client.fetch(`
        *[_type == "researchJournalPapers"] | order(_createdAt asc){
          title,
          year,
          author
        }
      `);
            setBooks(data);
        };

        fetchBooks();
    }, []);

    return (
        <div className='flex flex-col justify-center items-center w-full mt-20'>
            <div>
                <h1 className='text-2xl sm:text-4xl font-bold my-5 underline decoration-yellow-400'>Published Papers</h1>
            </div>
            <div className="flex flex-col justify-center items-start w-10/12 p-4">
                {books.length ? (
                    books.map((book, index) => (
                        <div key={index} className="mb-4">
                            <li className="text-lg ml-0">
                                {book.title}
                                {/* <span className="font-semibold text-blue-500">{book.author}</span>
                                <span className="font-semibold text-blue-500"> ({book.year})</span> */}
                            </li>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default ResearchJournalPapers;
