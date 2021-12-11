import React, { useState } from "react";
import { Tbtn, Timage, Tinput, Tspan } from "../../components/Tags";
import {
  IcComments,
  IcFace,
  IcLoveN,
  IcLoveY,
  IcMore,
  IcSaveN,
  IcSaveY,
  IcSender,
} from "../../components/Icons";
import { Users } from "../../components/Users";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Post({ data }) {
  const [savedPost, setSavedPost] = useState(false);
  const [isLoved, setIsLoved] = useState(false);
  const { username, type, media, likes, comments } = data;
  let getUser = Users.find((x) => x.username === username);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="wrapper_post">
      <div className="head_post">
        <div className="bowl_come_left">
          <Link to={`/profile/${username}`} className="">
            <Timage src={getUser.avatar} clas="avatar_user_post" />
          </Link>
          <div className="bowl_text_userand_name">
            <Tspan title={getUser.username} clas="username" />
            <Tspan title={getUser.fname} clas="fname" />
          </div>
        </div>
        <IcMore />
      </div>

      {type === "video" ? (
        <div className="media_post_video">
          <video controls loop src={media[0]}></video>
        </div>
      ) : (
        <div className="media_post">
          <Slider {...settings} className="slider">
            {media.map((img, i) => {
              return (
                <div className="bowl_sleder" key={i}>
                  <Timage src={img} clas="image_media_post" />
                </div>
              );
            })}
          </Slider>
        </div>
      )}

      <div className="bowl_Reacted">
        <div className="bowl_icons_post">
          <div className="left_side">
            {isLoved ? (
              <IcLoveY
                clas="svg_islove svg_loved_yes"
                onClick={() => setIsLoved(false)}
              />
            ) : (
              <IcLoveN clas="svg_islove" onClick={() => setIsLoved(true)} />
            )}

            <IcComments clas="" />
            <IcSender clas="" />
          </div>
          {savedPost ? (
            <IcSaveY clas="saved_post on" onClick={() => setSavedPost(false)} />
          ) : (
            <IcSaveN clas="saved_post" onClick={() => setSavedPost(true)} />
          )}
        </div>

        <Tspan title={likes + " likes"} clas="counts_likes" />
        <Tspan
          title={"View all " + comments + " comments"}
          clas="counts_comments"
        />

        <div className="bowl_Add_comment">
          <IcFace clas="face_emoji_post" />
          <Tinput plc="Add a comment..." clas="input_post_comment" />
          <Tbtn title="Post" clas="btn_To_post_comment" />
        </div>
      </div>
    </div>
  );
}

export default Post;
