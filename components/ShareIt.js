import { FacebookShareButton, FacebookIcon } from "next-share";
export default function ShareIt(params) {
  console.log(params);
  return (
    <>
      <div>
        <FacebookShareButton
          url={params.url}
          title={params.title}
          quote={params.description}
          hashtag={"#RangehaatShare"}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
    </>
  );
}
