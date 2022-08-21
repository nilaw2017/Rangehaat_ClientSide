import { useRouter } from "next/router";
import Post from "../../components/Post";

const storyID = () => {
  const router = useRouter();
  const query = router.query;
  return <Post query={query} />;
};

export default storyID;
