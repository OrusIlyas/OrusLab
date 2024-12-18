"use client";

import React, { useEffect, useState } from "react";
import { client } from "../client";

const PublishedBooksEdited = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await client.fetch(`
        *[_type == "publishedBooksEdited"] | order(_createdAt asc){
          title
        }
      `);
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full mt-20">
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold my-5 underline decoration-yellow-400">
          Published Books Edited
        </h1>
      </div>
      <div className="flex flex-col justify-center items-start w-10/12 p-4">
        {books.length ? (
          books.map((book, index) => (
            <div key={index} className="mb-4">
              <li className="text-lg ml-0">{book.title}</li>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PublishedBooksEdited;
