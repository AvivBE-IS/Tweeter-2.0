import { useState } from "react";

import "./App.css";
import Tweet from "./components/Tweet.jsx";
import TweetList from "./components/TweetsList.jsx";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <Tweet text={text} setText={setText} />
        <TweetList />
      </div>
    </>
  );
}

export default App;
