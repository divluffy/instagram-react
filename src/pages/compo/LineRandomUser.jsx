import React from "react";
import { Link } from "react-router-dom";
import { Timage, Tspan } from "../../components/Tags";

function LineRandomUser({ data }) {
  return (
    <div className="card_randoms_users">
      <Link to={`/profile/${data.username}`} className="card_randoms_users">
        <div className="bowl_twos_last">
          <Timage src={data.avatar} clas="avatar_random_line" />
          <div className="bowl_user_fname">
            <Tspan title={data.username} clas="random_username" />
            <Tspan title={data.fname} clas="random_fullname" />
          </div>
        </div>
        <Tspan title="Follow" clas="follow_user_random" />
      </Link>
    </div>
  );
}

export default LineRandomUser;
