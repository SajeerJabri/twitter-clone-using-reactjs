import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  FaCheckCircle,
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaShareSquare
} from "react-icons/fa";

const Post = ({ username, email }) => {
  const [posts, setPosts] = useState([]);

  // fetch post in database
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        setPosts(
          snapshot.docs.map(doc => ({
            id: doc.id,
            post: doc.data()
          }))
        );
      });
  }, []);
  return (
    <div className="post">
      {/* ============= first post ======================= */}

      {// eslint-disable-next-line
      posts == "" ? (
        <div className="homePageLoading">
          <CircularProgress />
        </div>
      ) : (
        posts.map((post, ind) => (
          <div className="post__first_container" key={post.id}>
            <div className="post__first_container_info">
              <div className="post__first_container_profile">
                <Avatar
                  alt={post.post.username}
                  src="/static/images/avatar/1.jpg"
                  className="logOut__avatar"
                />
              </div>
              <div className="post__first_container_username">
                <strong>{post.post.username}</strong>
              </div>
              <FaCheckCircle className="post_first_container_verify" />
              <div className="post__first_container_userid">
                @{post.post.username}_ &nbsp; . &nbsp;{" "}
              </div>
              <div className="post__first_container_time">
                <span>{Math.floor(Math.random() * 60 + 1)}m </span>
              </div>
            </div>
            <div className="post__first__container_title">
              {post.post.caption}
            </div>
            {post.post.imgUrl ? (
              <div className="post__first_container_img">
                <img src={post.post.imgUrl} alt="post" />
              </div>
            ) : (
              ""
            )}

            <div className="post__first_container_icons_list">
              <span>
                <FaRegComment className="post__first_container_icons" />
                {Math.floor(Math.random() * 1251 + 1)}{" "}
              </span>
              <span>
                <FaRetweet className="post__first_container_icons" />
                {Math.floor(Math.random() * 510 + 1)}{" "}
              </span>
              <span>
                <FaRegHeart className="post__first_container_icons" />
                {Math.floor(Math.random() * 6510 + 1)}{" "}
              </span>
              <span>
                <FaShareSquare className="post__first_container_icons" />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Post;
