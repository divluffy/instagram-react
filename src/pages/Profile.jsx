import React from "react";
import { useParams } from "react-router-dom";
import { IcComments, IcLoveY, IcPlay, IcSettings } from "../components/Icons";
import { Posts } from "../components/Posts";
import { Tbtn, Timage, Tspan } from "../components/Tags";
import { Users } from "../components/Users";
import "./css/profile.css";
import Masonry from "react-masonry-css";
function Profile() {
  const { username } = useParams();
  let { fname, followers, following, posts, bio, avatar } = Users.find(
    (x) => x.username === username
  );
  let myposts = Posts.filter((x) => x.username === username);

  const myBreakpointsAndCols = {
    default: 3,
    1600: 4,
  };

  return (
    <div className="wrapper_profile">
      <div className="head_profile">
        <Timage src={avatar} clas="avatar_profile" />
        <div className="side_my_info">
          <div className="first_line">
            <Tspan title={username} clas="title_username_profile" />
            <Tbtn title="Edit Profile" clas="btns_edit_profile" />
            <IcSettings clas="btn_settings" />
          </div>
          <div className="second_line">
            <Tspan title={posts + " posts"} />
            <Tspan title={followers + " followers"} />
            <Tspan title={following + " following"} />
          </div>
          <Tspan title={fname} clas="fullname_profile" />

          <div className="bowl_bio">
            {bio.split("\n").map((line, i) => (
              <Tspan key={i} title={line} clas="bio_profile" />
            ))}
          </div>
        </div>
      </div>

      {myposts.length ? (
        <Masonry
          breakpointCols={myBreakpointsAndCols}
          className="seaction_container"
          columnClassName="seaction_container_column"
        >
          {myposts.map(({ type, likes, comments, media, banar }, i) => {
            return (
              <div className="card_post" key={i}>
                <Timage src={type === "video" ? banar : media[0]} />
                {type === "video" ? <IcPlay clas="to_know_this_video" /> : null}
                <div className="bowl_info_cardpost">
                  <div className="comments">
                    {type === "video" ? <IcPlay /> : <IcLoveY />}
                    <Tspan title={likes} />
                  </div>
                  <div className="comments">
                    <IcComments />
                    <Tspan title={comments} />
                  </div>
                </div>
              </div>
            );
          })}
        </Masonry>
      ) : (
        <Tspan title="This user has not posted anything" clas="bowl_no_posts" />
      )}
    </div>
  );
}

export default Profile;
