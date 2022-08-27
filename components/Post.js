import ShareIt from "./ShareIt";
import SideBar from "./SideBar";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Post({ query }) {
  const { asPath, pathname } = useRouter();
  console.log(asPath); // '/blog/xyz'
  console.log(pathname); // '/blog/[slug]'
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
  console.log(`${process.env.HOST_URL}${asPath}`);
  return (
    <>
      <Head>
        <title>{`Rangehaat: ${query.title}`}</title>
        {/* FACEBOOK META SHARE */}
        <meta property="og:url" content={`${process.env.HOST_URL}${asPath}`} />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="When Great Minds Don’t Think Alike"
        />
        <meta
          property="og:description"
          content="How much does culture influence creative thinking?"
        />
        <meta
          property="og:image"
          content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
        />
      </Head>
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
            <span className="position-absolute z-1">
              {<span className="me-1 category">{query.category}</span>}
            </span>
            <div className="position-relative headImageContainer bg-dark">
              <Image
                src={imageLoading()}
                layout="fill"
                objectFit="contain"
                alt="PostImage"
              />
            </div>
            <p className="new-line mt-5 fs-5">
              {formattedContent(query.content)}
            </p>
          </div>
          <div className="col-lg-4 col-12 p-2 border">
            <SideBar />
          </div>
        </div>
        <iframe
          src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button_count&size=small&appId=554848223043305&width=96&height=20"
          width="96"
          height="20"
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </section>
    </>
  );
}
