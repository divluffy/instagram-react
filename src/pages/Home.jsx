import React from "react";
import { Posts } from "../components/Posts";
import { Users } from "../components/Users";
import LineRandomUser from "./compo/LineRandomUser";
import Post from "./compo/Post";
import "./css/home.css";
function Home() {
  return (
    <div className="home">
      <div className="seaction_stories">
        {Posts.map((post, i) => (
          <Post data={post} key={i} />
        ))}
      </div>
      <div className="seaction_me">
        <div className="content_randoms">
          <LineRandomUser data={Users[2]} />
          <LineRandomUser data={Users[9]} />
          <LineRandomUser data={Users[0]} />
          <LineRandomUser data={Users[7]} />
          <LineRandomUser data={Users[5]} />
        </div>
      </div>
    </div>
  );
}

export default Home;
