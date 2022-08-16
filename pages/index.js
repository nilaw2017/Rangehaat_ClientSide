// import Script from "next/script";
import HeadPost from "../components/HeadPost";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";
export default function Home() {
  return (
    <>
      <div className="row mt-5 mb-5">
        <div className="col-lg-8 col-12">
          <HeadPost />
        </div>
        <div className="col-lg-4 col-12 border">
          <SideBar />
        </div>
      </div>
      <hr />
      <Posts />
    </>
  );
}
// export async function getStaticProps() {
//   const db = await myDB.connect({
//     host: process.env.DB_HOST,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//   })
