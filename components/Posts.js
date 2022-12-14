import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const Posts = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lazyLoad, setLazyLoad] = useState(true);
  const [limit, setLimit] = useState(6);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `${process.env.HEROKU_HOST_URL}articles?_sort=id:desc&${
          lazyLoad == true ? `_limit=${limit}` : `_limit=${limit}`
        } `
      )
        .then((res) => res.json())
        .then((data) => {
          setNews(data);
          setLoading(true);
        })
        .catch((error) => console.log("ERROR", error));
    };
    const totalPosts = async () => {
      await fetch(`${process.env.HEROKU_HOST_URL}articles/count`)
        .then((res) => res.json())
        .then((count) => setCount(count));
    };
    fetchData();
    totalPosts();
  }, [lazyLoad]);
  // console.log("Not Reversed ==>", news);

  const loadMore = () => {
    lazyLoad == true ? setLazyLoad(false) : setLazyLoad(true);
    setLimit(limit + 3);
    if (lazyLoad == true) {
      setLazyLoad(false);
    }
  };
  if (loading) {
    <p>Loading.....</p>;
  }
  news.shift();
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
    <>
      <section className="mt-5 row flex-row">
        {[...news].map(
          ({
            id,
            slug,
            category,
            author,
            created_at,
            title,
            content,
            image,
          }) => (
            <div className="col-12 col-lg-6 col-xl-4 card mb-5 p-2" key={id}>
              <div className="headPostImage" id="banner">
                <span className="position-absolute z-1">
                  {/* POST CATEGORY NAME */}
                  {<span className="me-1 category">{category.name}</span>}
                </span>
                <div className="imageContainer bg-dark">
                  {/* POST IMAGE */}
                  <Image
                    src={image.url}
                    layout="fill"
                    objectFit="contain"
                    alt="PostImage"
                  />
                </div>
              </div>
              <div>
                <p className="blockquote-footer mt-2">
                  <i className="fa-solid fa-user me-1"></i>
                  <span className="me-2">{author.name}</span>
                  <i className="fa-solid fa-calendar-days me-1"></i>
                  <span>{convertedDate(created_at)}</span>
                </p>
              </div>
              <div className="card-body">
                {/* POSTS TITLES */}
                <h3 className="card-title text-dark fw-bolder fs-4">{title}</h3>
                {/* POSTS CONTENTS */}
                <p className="card-text new-line text-dark fs-6">
                  {subContent(content) + " ...."}
                </p>
                <Link
                  // onClick={handleImage()}
                  href={{
                    pathname: `/${category.name.toLowerCase()}/${slug}`,
                  }}
                >
                  <a className="btn btn-primary">Read More</a>
                </Link>
              </div>
            </div>
          )
        )}
      </section>
      <div className="d-flex justify-content-center">
        <button
          className=" btn bg-success text-light"
          onClick={loadMore}
          disabled={limit >= count}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default Posts;
