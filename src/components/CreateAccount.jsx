import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { auth } from "../config/firebase";
import {
  FaSearch,
  FaUserFriends,
  FaRegComment,
  FaTwitter
} from "react-icons/fa";

const CreateAccount = () => {
  const [open, setOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = event => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        return authUser.user.updateProfile({ displayName: username });
      })
      .catch(err => alert(err.message));
    setOpen(false);
  };
  const signIn = event => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(user => console.log(user))
      .catch(error => alert(error.message));
    setSignInOpen(false);
  };

  return (
    <div className="create__account">
      <div className="create__account_left">
        <div className="create__account_left_heading">
          <h2>
            <FaSearch /> Follow your interests.
          </h2>
          <h2>
            <FaUserFriends /> Hear what people are talking about.
          </h2>
          <h2>
            <FaRegComment /> Join the conversation.
          </h2>
        </div>
      </div>
      <div className="create__account_right">
        <div className="create__account_form_container">
          <form className="create__account_logIn_form">
            <input
              type="text"
              placeholder="Email"
              className="create__account_logIn_input"
              required
              onChange={event => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="create__account_logIn_input"
              required
              onChange={event => setPassword(event.target.value)}
            />
            <input
              type="submit"
              value="Log in"
              className="create__account_logIn_btn"
              onClick={signIn}
            />
          </form>
          <div className="create__account_right_heading">
            <div className="create__account_right_heading_logo">
              <FaTwitter />
            </div>
            <h1>See what’s happening in the world right now</h1>
          </div>
          <div className="signUp__signIn_btn">
            <span>Join Twitter today.</span>
            <button
              className="signUp__signIn_btn_signup"
              onClick={() => setOpen(true)}
            >
              Sign up
            </button>
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <div className="signUp">
                <div className="signUp__modal_logo">
                  <FaTwitter />
                </div>
                <form className="signUp__form" onSubmit={signUp}>
                  <input
                    type="text"
                    placeholder="Enter username"
                    required
                    onChange={event => setUsername(event.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Enter email"
                    required
                    onChange={event => setEmail(event.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Enter password"
                    required
                    onChange={event => setPassword(event.target.value)}
                  />
                  <input
                    type="submit"
                    value="Sign Up"
                    className="signUp__submit_btn"
                  />
                </form>
              </div>
            </Modal>
            <button
              className="signUp__signIn_btn_login"
              onClick={() => setSignInOpen(true)}
            >
              Log in
            </button>
            <Modal
              open={signInOpen}
              onClose={() => setSignInOpen(false)}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <div className="signUp">
                <div className="signUp__modal_logo">
                  <FaTwitter />
                </div>
                <form className="signUp__form" onSubmit={signIn}>
                  <input
                    type="email"
                    placeholder="Enter email"
                    required
                    onChange={event => setEmail(event.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Enter password"
                    required
                    onChange={event => setPassword(event.target.value)}
                  />
                  <input
                    type="submit"
                    value="Sign Up"
                    className="signUp__submit_btn"
                  />
                </form>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
