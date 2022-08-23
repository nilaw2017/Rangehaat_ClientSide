import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "dotenv/config";
// require("dotenv").config();
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Highlights.module.scss";
import { useEffect, useState } from "react";

const Highlights = () => {
  const [highlights, setHighlights] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    await fetch(process.env.HEROKU_HOST_URL + "highlights")
      .then((res) => {
        if (res.status >= 400) {
          console.log("Something Went Wrong");
        }
        return res.json();
      })
      .then((data) => {
        setHighlights(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <p>Data is loading...</p>;
  }

  const categoryName = (category) => {
    const formattedCategory =
      category == null ? (
        <span className="me-2 category">Others</span>
      ) : (
        <span className="me-2 category">{category.name}</span>
      );
    return formattedCategory;
  };
  return (
    <div className="mt-5">
      <h3>Highlights</h3>
      <Carousel
        autoPlay="true"
        infiniteLoop="true"
        interval={10000}
        transitionTime={2000}
        showThumbs={false}
        showStatus={true}
        className={styles.mcarousel + " mcarousel"}
      >
        {highlights.map(({ id, highlightsTitle, category }) => (
          <div className={styles.slide} key={id}>
            <span>{categoryName(category)}</span>
            <p className={styles.highlights}>{highlightsTitle}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
// export const getServerSideProps = () => {
//   console.log(process.env.REACT_APP_HOST_NAME + "/api/marquees?populate=*");
// };

export default Highlights;
