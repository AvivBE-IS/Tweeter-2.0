import "../App.css";
import TweetButton from "./TweetButton.jsx";

export default function Tweet(props) {
  function clickOnTweet() {
    props.setText = "";
  }

  return (
    <div className="mainDiv" id="createTweetsDiv">
      <textarea
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
        placeholder="What you have in mind.."
        className="mainDiv"
        id="createTweetsInput"
      ></textarea>
      <TweetButton clickOnTweet={clickOnTweet} />
    </div>
  );
}
