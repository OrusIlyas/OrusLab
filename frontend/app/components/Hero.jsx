"use client";

import React, { useEffect, useState } from "react";
import { client } from "../client";
import Tile from "./Tile";
import Animation from "./Animation";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source).url();
}

const Hero = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "hero"][0]';
      const result = await client.fetch(query);

      if (result) {
        result.researchAreas = result.researchAreas.map((area) => ({
          ...area,
          imagePath: urlFor(area.imagePath),
        }));
        setData(result);
      } else {
        console.error("No data found");
      }
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Animation />

      <div className="lg:m-20 md:m-10 sm:m-6">
        <h1 className="lg:text-4xl p-3 md:text-3xl sm:text-xl text-black font-bold underline decoration-yellow-400">
          {data.aboutTitle}
        </h1>
        {data.aboutContent.map((paragraph, index) => (
          <p
            key={index}
            className="text-[#828282] p-3 lg:text-xl md:text-lg sm:text-md mt-6"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex justify-center items-center text-center w-full">
        <h1 className="my-10 text-lg sm:text-3xl text-black font-bold underline decoration-yellow-400">
          {data.researchAreasTitle}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mx-20">
        {data.researchAreas.map((area) => (
          <Tile
            key={area.title}
            imagepath={area.imagePath}
            title={area.title}
            description={area.description}
            link={area.link}
          />
        ))}
      </div>
    </>
  );
};

export default Hero;
