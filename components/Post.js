import ShareIt from "./ShareIt";
import SideBar from "./SideBar";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Post({ query }) {
  const router = useRouter();
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) {
      return;
    } else {
      console.log("Ready");
      const fetchData = async () => {
        await fetch(
          process.env.HEROKU_HOST_URL + "articles/" + router.query.storyID
        )
          .then((res) => res.json())
          .then((data) => {
            setNews(data);
            setLoading(false);
          })
          .catch((error) => console.log("ERROR", error));
      };
      fetchData();
    }
  }, [router.isReady]);
  console.log("StoryID", query.storyID);
  if (isLoading) {
    return (
      <>
        <p>Loading.....</p>
      </>
    );
  }
  // IMAGE LOADER
  const imageLoading = () => {
    if (news.image.url == undefined) {
      return <h1>LOADING</h1>;
    } else {
      return `${news.image.url}`;
    }
  };
  const convertedDate = (params) => {
    const dateAndTime = params;

    const splittedDateAndTime = dateAndTime.split("");

    const slicedDate = splittedDateAndTime.slice(0, 10);

    const joinedDate = slicedDate.join("");

    return joinedDate;
  };
  const compressedURL = process.env.HOST_URL + router.asPath;
  return (
    <>
      <Head>
        <title>{`${news.title} - Rangehaat`}</title>
        {/* <meta property="og:title" content={news.title} /> */}
        <meta name="description" content={news.description} />
        {/* FACEBOOK META SHARE */}
        <meta data-rh="true" property="og:title" content={news.title} />
        <meta property="og:url" content={compressedURL} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={news.description} />
        <meta property="og:image" content={news.image.url} />
        <meta property="fb:app_id" content="554848223043305" />
      </Head>
      <section>
        <div className="row mt-5">
          <div className="col-lg-8 col-12">
            <h1 className="fw-bolder">{news.title}</h1>
            <div className="d-flex mb-2">
              <span className="me-2 text-secondary">
                <i className="fa-solid fa-user me-1"></i>
                {news.author.name}
              </span>
              <span className="text-secondary">
                <i className="fa-solid fa-calendar-days me-1"></i>
                {convertedDate(news.created_at)}
              </span>
            </div>
            <span className="position-absolute z-1">
              {<span className="me-1 category">{news.category.name}</span>}
            </span>
            <div className="position-relative headImageContainer bg-dark">
              <Image
                src={imageLoading(news.image.url)}
                layout="fill"
                objectFit="contain"
                alt="PostImage"
              />
            </div>
            <p className="new-line mt-5 fs-5">{news.content}</p>
          </div>
          <div className="col-lg-4 col-12 p-2 border">
            <SideBar />
          </div>
        </div>
        <ShareIt
          url={compressedURL}
          title={news.title}
          description={news.description}
        />
      </section>
    </>
  );
}
