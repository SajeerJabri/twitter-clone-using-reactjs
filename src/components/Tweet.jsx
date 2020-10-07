import React from "react";
import CreateTweet from "./CreateTweet";
import Post from "./Post";
import { FaTwitter } from "react-icons/fa";

const Tweet = ({ username, email }) => {
  return (
    <div className="tweet">
      <div className="tweet__home">
        <div className="sidebar__logo">
          <FaTwitter />
        </div>
        Home
      </div>
      <CreateTweet username={username} />
      <Post username={username} email={email} />
    </div>
  );
};

export default Tweet;
