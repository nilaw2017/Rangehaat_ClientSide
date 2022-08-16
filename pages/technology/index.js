import { useRouter } from "next/router";
import CategoryPage from "../../components/CategoryPage";

const Technology = () => {
  const router = useRouter();
  const query = router.asPath;

  return <CategoryPage query={query} />;
};

export default Technology;
