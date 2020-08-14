import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
      </div>
      <div>ava + description</div>
      <div>
        My post
        <div>New post</div>
        <div className="posts">
          <div className="item">Post 1</div>
          <div className="item">Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
