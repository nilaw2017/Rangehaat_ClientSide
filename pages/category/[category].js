import { useRouter } from "next/router";
import CategoryPage from "../../components/CategoryPage";

const Category = ({ data }) => {
  const router = useRouter();
  const query = router.asPath;
  console.log("data", data);
  console.log("query", query);

  return <CategoryPage query={query} />;
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps({ params }) {
  const data = await fetch(
    `${process.env.HEROKU_HOST_URL}categories/${params.category}`
  ).then((res) => res.json());

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const categories = await fetch(
    `${process.env.HEROKU_HOST_URL}categories`
  ).then((res) => res.json());
  return {
    paths: categories.map((category) => {
      return {
        params: {
          category: category.slug.toString(),
        },
      };
    }),
    fallback: false, // See the "fallback" section below
  };
}
// export async function test() {
//   const router = useRouter;
//   const query = router.asPath;
//   console.log("query", query);
//   return {
//     params: {
//       query,
//     },
//   };
// }

export default Category;
