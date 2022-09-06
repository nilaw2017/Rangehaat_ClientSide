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
    const res = await fetch(
      process.env.HEROKU_HOST_URL + "articles?_sort=id:desc"
    );
    const data = await res.json();
    setNews(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <p>Latest Post is LOADING...</p>;
  }
  const convertedDate = () => {
    const dateAndTime = news[0].created_at;

    const splittedDateAndTime = dateAndTime.split("");

    const slicedDate = splittedDateAndTime.slice(0, 10);

    // const slicedTime = splittedDateAndTime.slice(12, 19);

    const joinedDate = slicedDate.join("");

    // const joinedTime = slicedTime.join("");
    return joinedDate;
  };
  const subContent = () => {
    const paragraph = news[0].content;
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
      <div className="border p-2 border-3">
        <div className="headPostImage ">
          <span className={style.category}>
            <span className="z-1 category">{news[0].category.name}</span>
          </span>
          <div className="position-relative headImageContainer bg-dark">
            {!news[0].image.url ? (
              <></>
            ) : (
              <Image
                src={news[0].image.url}
                layout="fill"
                objectFit="contain"
                className="border"
                alt="HeadPostImage"
              />
            )}
          </div>
        </div>
        <div>
          <p className="blockquote-footer mt-2">
            <i className="fa-solid fa-user me-1"></i>
            <span className="me-2">
              {!news[0].author ? <></> : news[0].author.name}
            </span>
            <i className="fa-solid fa-calendar-days me-1"></i>
            <span>{convertedDate()}</span>
          </p>
        </div>
        {/* HEAD POST TITLE */}
        <h3 className="fw-bolder mt-4">{news[0].title}</h3>
        {/* HEAD POST CONTENT */}
        <p className="new-line fs-6">{subContent() + " ......"}</p>

        <Link
          href={{
            pathname: `/${news[0].category.name.toLowerCase()}/${news[0].slug}`,
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
