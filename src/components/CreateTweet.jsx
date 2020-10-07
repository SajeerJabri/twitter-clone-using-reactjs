import React, { useState } from "react";
import { storage, db } from "../config/firebase";
import Avatar from "@material-ui/core/Avatar";
import firebase from "firebase";
import {
  FaRegImage,
  FaRegListAlt,
  FaChartBar,
  FaRegSmile,
  FaRegCalendarCheck
} from "react-icons/fa";

const CreateTweet = ({ username }) => {
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const uploadFile = event => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  // handle user file uploader like image or video
  const fileCaptionHandler = event => {
    event.preventDefault();
    // check file exits or not
    if (file !== null) {
      const uploadTask = storage.ref(`images/${file.name}`).put(file);
      uploadTask.on(
        //'state_changed' observer, called any time the state changes
        "state_changed",
        snapshot => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          console.log("inside function")
        },
        error => {
          // Handle unsuccessful uploads
          alert(error.message);
        },
        () => {
          // Handle successful uploads on complete
          storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then(url => {
              // add download image url and caption into database
              db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                imgUrl: url,
                username: username
              });
              setProgress(0);
              setCaption("");
              setFile(null);
            })
            .catch(error => alert(error.message));
        }
      );
    } else {
      db.collection("posts").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        caption: caption,
        username: username
      });
      setProgress(0);
      setCaption("");
    }
  };

  return (
    <div className="create__tweet">
      <div className="create__tweet_container">
        <form
          className="create__tweet_form_container"
          onSubmit={fileCaptionHandler}
        >
          <div className="create__tweet_form">
            <label htmlFor="">
              <Avatar
                alt={username}
                src="/static/images/avatar/1.jpg"
                className="logOut__avatar"
              />
            </label>
            <input
              type="text"
              className="create__tweet_form_input"
              placeholder="What's Happening?"
              value={caption}
              onChange={event => setCaption(event.target.value)}
              required
            />
          </div>

          <div className="create__tweet_icons_btn">
            <div className="create__container_icons_list">
              <input
                accept="image/*"
                className="upload__input_file"
                id="icon-button-file"
                type="file"
                onChange={uploadFile}
              />
              <label htmlFor="icon-button-file">
                <FaRegImage className="create__tweet_icons" />
              </label>

              <FaRegListAlt className="create__tweet_icons" />
              <FaChartBar className="create__tweet_icons" />
              <FaRegSmile className="create__tweet_icons" />
              <FaRegCalendarCheck className="create__tweet_icons" />
            </div>
            <div className="create__tweet_btn">
              {/* <button>Tweet</button> */}
              <input type="submit" value="Tweet" />
            </div>
          </div>
        </form>
        <progress
          className="file__uploader_progress"
          value={progress}
          max="100"
        />
      </div>
    </div>
  );
};

export default CreateTweet;
