import { FacebookShareButton, FacebookIcon } from "next-share";
export default function ShareIt(params) {
  console.log(params);
  return (
    <>
      <div>
        <FacebookShareButton
          url={params.url}
          // url="https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer"
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
