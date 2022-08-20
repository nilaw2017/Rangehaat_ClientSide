// import Script from "next/script";
import HeadPost from "../components/HeadPost";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";
export default function Home() {
  return (
    <main>
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
    </main>
  );
}
