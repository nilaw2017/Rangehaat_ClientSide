import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const Posts = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(process.env.HEROKU_HOST_URL + "articles")
        // await fetch("https://rangehaatserver.herokuapp.com/articles")
        .then((res) => res.json())
        .then((data) => {
          setNews(data);
          setLoading(true);
        })
        .catch((error) => console.log("ERROR", error));
    };

    fetchData();
  }, []);
  if (loading) {
    <p>Loading.....</p>;
  }
  news.pop();
  const subContent = (params) => {
    if (params === null) {
      return 0;
    } else {
      const formattedParagraph = params;
      const splittedParagraph = formattedParagraph.split(" ");
      const slicedParagraph = splittedParagraph.slice(0, 15);
      const joinedParagraph = slicedParagraph.join(",");
      const joinedParagraph2 = joinedParagraph.replace(/,/g, " ");
      return joinedParagraph2;
    }
  };
  const convertedDate = (params) => {
    const dateAndTime = params;

    const splittedDateAndTime = dateAndTime.split("");

    const slicedDate = splittedDateAndTime.slice(0, 10);

    // const slicedTime = splittedDateAndTime.slice(12, 19);

    const joinedDate = slicedDate.join("");

    // const joinedTime = slicedTime.join("");
    return joinedDate;
  };
  return (
    <section className="mt-5 row flex-row">
      {news.map(
        ({ id, slug, category, author, created_at, title, content, image }) => (
          <div className="col-12 col-lg-4 card mb-5 p-2" key={id}>
            <div className="headPostImage">
              <span className="position-absolute z-1">
                {<span className="me-1 category">{category.name}</span>}
              </span>
              <div className="imageContainer">
                <Image
                  src={image.url}
                  layout="responsive"
                  width={10}
                  height={7}
                  alt="test"
                />
              </div>
            </div>
            <div>
              <h6 className="blockquote-footer mt-2">
                <i className="fa-solid fa-user me-1"></i>
                <span className="me-2">{author.name}</span>
                <i className="fa-solid fa-calendar-days me-1"></i>
                <span>{convertedDate(created_at)}</span>
              </h6>
            </div>
            <div className="card-body">
              <h3 className="card-title text-dark fw-bolder">{title}</h3>
              <p className="card-text new-line text-dark">
                {subContent(content) + " ...."}
              </p>
              <Link
                href={{
                  pathname: `/${category.name.toLowerCase()}/${slug}`,
                  query: {
                    title,
                    content,
                    author: author.name,
                    category: category.name,
                    created_at: convertedDate(created_at),
                    image: image.url,
                  },
                }}
              >
                <a className="btn btn-primary">Read More</a>
              </Link>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Posts;
