import React from "react";
import NewsCard from "../../components/NewsCard";

const newsData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam beatae consequuntur eos minima doloremque, porro dolore debitis rerum voluptatibus in perferendis voluptates, reiciendis id ex soluta, aliquam obcaecati provident numquam.",
    date: new Date(),
  },
  {
    id: 2,
    title: "ipsum dolor sit dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur doloremque, porro dolore debitis rerum voluptatibus in perferendis voluptates, reiciendis id ex soluta, aliquam obcaecati provident numquam.",
    date: new Date(),
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste alias sequi.",
    date: new Date(),
  },
];

const NewsList = () => {
  return (
    <>
      <h1>Nouvelles actualités</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
        }}
      >
        {newsData.map((news) => (
          <NewsCard
            key={news.id}
            title={news.title}
            description={news.description}
            date={news.date}
          />
        ))}
      </div>
    </>
  );
};

export default NewsList;
