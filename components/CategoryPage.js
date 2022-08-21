import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CategoryPage({ query }) {
  const [category, setCategory] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    console.log("CategoryPage", query);

    // setLoading(true);
    const fetchData = async () => {
      await fetch(process.env.HEROKU_HOST_URL + "categories" + query)
        .then((res) => res.json())
        .then((data) => {
          setCategory(data);
          setLoading(false);
        })
        .catch((error) => console.log("ERROR", error));
    };
    fetchData();
  }, []);
  if (isLoading) {
    <p>Loading.....</p>;
  }

  const convertedDate = (created_at) => {
    const dateAndTime = created_at;

    const splittedDateAndTime = dateAndTime.split("");

    const slicedDate = splittedDateAndTime.slice(0, 10);

    const joinedDate = slicedDate.join("");

    return joinedDate;
  };

  const subContent = (content) => {
    if (content === null) {
      return 0;
    } else {
      const formattedParagraph = content;
      const splittedParagraph = formattedParagraph.split(" ");
      const slicedParagraph = splittedParagraph.slice(0, 25);
      const joinedParagraph = slicedParagraph.join(",");
      const joinedParagraph2 = joinedParagraph.replace(/,/g, " ");
      return joinedParagraph2;
    }
  };
  const checkStatus = !category.articles ? (
    <h1>Loading......</h1>
  ) : (
    <section className="mt-5">
      {category.articles.map(
        ({ id, slug, author, created_at, title, content, image }) => (
          <div
            className="row flex-row w-100 col-12 col-lg-4 card mb-5 p-2"
            key={id}
          >
            {/* Body Section */}
            <div className="col-9 card-body order-lg-1 order-2">
              <h5 className="card-title">{title}</h5>
              <p className="card-text new-line">
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

            {/* Image Section */}
            <div className="headPostImage col-12 col-lg-3 order-lg-2 order-1">
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
              <div>
                <h6 className="blockquote-footer mt-2">
                  <i className="fa-solid fa-user me-1"></i>
                  <span className="me-2">{author.name}</span>
                  <i className="fa-solid fa-calendar-days me-1"></i>
                  <span>{convertedDate(created_at)}</span>
                </h6>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
  return (
    <>
      <h1 className="row justify-content-center align-content-center mt-5 mb-5">
        {category.name}
      </h1>
      {checkStatus}
    </>
  );
}
