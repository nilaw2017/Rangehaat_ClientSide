import ShareIt from "./ShareIt";
import SideBar from "./SideBar";
import Image from "next/image";
import Head from "next/head";

export default function Post({ query }) {
  console.log(query);
  const formattedContent = (params) => {
    if (params == undefined) {
      return 0;
    } else {
      const someHTMLString = params;
      // // console.log("PARAMS", params);
      // const myString = someHTMLString.replace(/<[^>]+>/g, "");
      // const myString = someHTMLString.replace(/<iframe/g, "${<iFrame");
      // return myString;
      return someHTMLString;
    }
  };

  const imageLoading = () => {
    if (query.image == undefined) {
      return <h1>LOADING</h1>;
    } else {
      return `${query.image}`;
    }
  };
  return (
    <section>
      <div className="row mt-5">
        <div className="col-lg-8 col-12">
          <h1 className="fw-bolder">{query.title}</h1>
          <div className="d-flex mb-2">
            <span className="me-2 text-secondary">
              <i className="fa-solid fa-user me-1"></i>
              {query.author}
            </span>
            <span className="text-secondary">
              <i className="fa-solid fa-calendar-days me-1"></i>
              {query.created_at}
            </span>
          </div>
          {/* <img
            src={`http://localhost:1337${query.image}`}
            className="border img-fluid mb-5"
            alt="test"
          /> */}
          <Image
            src={imageLoading()}
            layout="responsive"
            width={10}
            height={7}
            alt="PostImage"
          />
          {console.log(query.image)}
          <p className="new-line mt-5 fs-5">
            {formattedContent(query.content)}
          </p>
        </div>
        <div className="col-lg-4 col-12 p-2 border">
          <SideBar />
        </div>
      </div>
      {/* Social Media Share Link */}
      {/* <div className="mt-5 mb-5">
        <h4>Share this article</h4>
        <ShareIt />
        <Head>
          <title>Social Media Preview</title>
          <meta property="og:url" content="your url" />
          <meta property="og:type" content="website" />
          <meta property="fb:app_id" content="your fb app id" />
          <meta property="og:title" content="Social Media Preview Working?" />
          <meta name="twitter:card" content="summary" />
          <meta
            property="og:description"
            content="Hurray!! Yes Social Media Preview is Working"
          />
          <meta property="og:image" content={"url of image"} />
        </Head>
      </div> */}
    </section>
  );
}
