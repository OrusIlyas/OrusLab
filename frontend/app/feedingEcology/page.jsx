"use client";

import React, { useEffect, useState } from "react";
import { client } from "../client";
import ResearchPage from "../components/ResearchPage";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source).url();
}

const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "FeedingEcology"][0]';
      const result = await client.fetch(query);

      if (result) {
        result.imagePath = urlFor(result.imagePath);
        result.additionalImages = result.additionalImages.map((image) =>
          urlFor(image)
        );
        setData(result);
      } else {
        console.error("No data found");
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ResearchPage
        imagepath={data.imagePath}
        title={data.title}
        para1={data.paragraphs[0]}
        para2={data.paragraphs[1]}
        image2={data.additionalImages[0]}
        image3={data.additionalImages[1]}
      />
    </div>
  );
};

export default Page;
