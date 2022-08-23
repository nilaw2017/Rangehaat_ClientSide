import style from "./../styles/HeadPost.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const HeadPost = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  //   debugger;
  const fetchData = async () => {
    setLoading(true);
    // const res = await fetch(process.env.API_HOST_URL + "articles");
    const res = await fetch(process.env.HEROKU_HOST_URL + "articles");
    const data = await res.json();
    setNews(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <p>Data is loading...</p>;
  }
  const convertedDate = () => {
    const dateAndTime = news[news.length - 1].created_at;

    const splittedDateAndTime = dateAndTime.split("");

    const slicedDate = splittedDateAndTime.slice(0, 10);

    // const slicedTime = splittedDateAndTime.slice(12, 19);

    const joinedDate = slicedDate.join("");

    // const joinedTime = slicedTime.join("");
    return joinedDate;
  };
  const subContent = () => {
    const paragraph = news[news.length - 1].content;
    const splittedParagraph = paragraph.split(" ");
    const slicedParagraph = splittedParagraph.slice(0, 40);

    const joinedParagraph = slicedParagraph.join(",");

    const joinedParagraph2 = joinedParagraph.replace(/,/g, " ");
    return joinedParagraph2;
  };
  // const categoryName = (category) => {
  //   const formattedCategory =
  //     category == null ? (
  //       <span className="me-2 category">Others</span>
  //     ) : (
  //       <span className="me-2 category">{category.name}</span>
  //     );
  //   return formattedCategory;
  // };

  const headNews =
    news.length === 0 ? (
      <p>LOADING....</p>
    ) : (
      <div>
        <div className="headPostImage">
          <span className={style.category}>
            <span className="z-1 category">
              {news[news.length - 1].category.name}
            </span>
          </span>
          <div className="imageContainer">
            <Image
              src={news[news.length - 1].image.url}
              layout="responsive"
              className="border"
              width={10}
              height={7}
              alt="HeadPostImage"
            />
          </div>
        </div>
        <div>
          <h6 className="blockquote-footer mt-2">
            <i className="fa-solid fa-user me-1"></i>
            <span className="me-2">{news[news.length - 1].author.name}</span>
            <i className="fa-solid fa-calendar-days me-1"></i>
            <span>{convertedDate()}</span>
          </h6>
        </div>
        {/* HEAD POST TITLE */}
        <h3 className="fw-bolder mt-3">{news[news.length - 1].title}</h3>
        {/* HEAD POST CONTENT */}
        <p className="new-line fs-5">{subContent() + " ......"}</p>

        <Link
          href={{
            pathname: `/${news[news.length - 1].category.name.toLowerCase()}/${
              news[news.length - 1].slug
            }`,
            query: {
              title: news[news.length - 1].title,
              content: news[news.length - 1].content,
              author: news[news.length - 1].author.name,
              category: news[news.length - 1].category.name,
              created_at: convertedDate(news[news.length - 1].created_at),
              image: news[news.length - 1].image.url,
            },
          }}
        >
          <a className="btn btn-primary">Read More</a>
        </Link>
      </div>
    );
  return (
    <>
      <div className={style.headPost + " mb-5"}>{headNews}</div>
    </>
  );
};

export default HeadPost;
