"use client";

import React, { useEffect, useState } from "react";
import People from "../components/People";
import { client } from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source).url();
}

const Page = () => {
  const [phdStudents, setPhdStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "AlumniStudents"]{
        _id,
        name,
        description,
        image 
      }`;

      const data = await client.fetch(query);
      setPhdStudents(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold my-5 underline decoration-yellow-400">
          Meet our Alumni
        </h1>
      </div>

      <div className="w-11/12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 sm:mt-10">
          {phdStudents.length > 0 &&
            phdStudents.map((student) => (
              <div
                key={student._id}
                className="flex flex-col justify-center items-center"
              >
                <People
                  imagepath={urlFor(student.image)}
                  name={student.name}
                  description={student.description}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
