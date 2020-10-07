import React from "react";
import { auth } from "../config/firebase";
import Avatar from "@material-ui/core/Avatar";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaRegListAlt,
  FaRegUserCircle,
  FaEllipsisH
} from "react-icons/fa";

const Sidebar = ({ user }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <FaTwitter />
      </div>
      <div className="sidebar__lists">
        <ul>
          <li>
            <FaHome className="sidebar__icons sidebar__home" />
            <a href="/">Home</a>
          </li>
          <li>
            <FaHashtag className="sidebar__icons" />
            <a href="/">Explore</a>
          </li>
          <li>
            <FaRegBell className="sidebar__icons" />
            <a href="/">Notifications</a>
          </li>
          <li>
            <FaRegEnvelope className="sidebar__icons" />
            <a href="/">Messages</a>
          </li>
          <li>
            <FaRegBookmark className="sidebar__icons" />
            <a href="/">Bookmarks</a>
          </li>
          <li>
            <FaRegListAlt className="sidebar__icons" />
            <a href="/">Lists</a>
          </li>
          <li>
            <FaRegUserCircle className="sidebar__icons" />
            <a href="/">Profile</a>
          </li>
          <li>
            <FaEllipsisH className="sidebar__icons" />
            <a href="/">More</a>
          </li>
        </ul>
      </div>
      <button className="sidebar__btn">Tweet</button>
      <div className="sidebar__logOut_btn">
        <div className="sidebar__logOut_btn_avatar">
          <Avatar
            alt={user.displayName}
            src="/static/images/avatar/1.jpg"
            className="logOut__avatar"
          />
          <span>@{user.displayName}</span>
        </div>
        <button onClick={() => auth.signOut()}>Log Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
