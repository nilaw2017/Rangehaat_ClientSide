import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Post from "../../components/Post";

const storyID = () => {
  const router = useRouter();
  const query = router.query;
  const [isLoading, setLoading] = useState(true);
  const [metaData, setMetaData] = useState([]);
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
            setMetaData(data);
            setLoading(false);
          })
          .catch((error) => console.log("ERROR", error));
      };
      fetchData();
    }
  }, [router.isReady]);
  console.log("QUERY=>", router);
  console.log("META DATA=>", metaData);
  return (
    <>
      <Head>
        {/* <meta arh-rh="true" property="og:title" content={metaData.title} /> */}
        <meta
          arh-rh="true"
          property="og:title"
          content="Working with hard coded title"
        />

        <meta property="og:type" content="article" />
        <meta property="og:description" content={metaData.description} />
        <meta property="fb:app_id" content="55484223043305" />
      </Head>
      <Post query={query} />;
    </>
  );
};

export default storyID;
