import { useRouter } from "next/router";
import CategoryPage from "../../components/CategoryPage";

const Notice = () => {
  const router = useRouter();
  const query = router.asPath;

  return <CategoryPage query={query} />;
};

export default Notice;
