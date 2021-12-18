import React, { useEffect, useState } from "react";
import { Posts } from "../components/Posts";
import { Timage, Tspan } from "../components/Tags";
import { Users } from "../components/Users";
import LineRandomUser from "./compo/LineRandomUser";
import Post from "./compo/Post";
import "./css/home.css";
import "./css/story.css";
import { IcArrowRigth } from "../components/Icons";
import { Link } from "react-router-dom";
import { Storis } from "../components/Stories";

function Home() {
  const [transform, setTransform] = useState("0");
  const [tranNUmber, setTranNUmber] = useState(0);
  const [dataStories, setDataStories] = useState([]);

  const sliderToRigth = () => {
    if (tranNUmber < dataStories.length * 100 - 700) {
      console.log("to rigth");
      setTransform("-" + (tranNUmber + 700));
      setTranNUmber(tranNUmber + 700);
    }
  };
  const sliderToLeft = () => {
    if (tranNUmber > 0) {
      setTransform("-" + (tranNUmber - 700));
      setTranNUmber(tranNUmber - 700);
    }
  };

  const TakeStory = () => {
    let collectStories = Storis.map((st) => {
      let data = Users.filter((user) => user.username === st.username);
      return { username: data[0].username, avatar: data[0].avatar };
    });
    setDataStories([...collectStories, ...collectStories]);
  };

  useEffect(() => {
    TakeStory();
  }, []);

  return (
    <div className="home">
      <div className="seaction_stories">
        <div className="users_stories">
          <IcArrowRigth
            clas="arrow_Story_home arrow_stho_left"
            onClick={sliderToLeft}
          />
          <IcArrowRigth
            clas="arrow_Story_home arrow_stho_rigth"
            onClick={sliderToRigth}
          />
          <div className="bowl_all_cards_story">
            <div
              className="bowl_content_cards_two"
              style={{ transform: `translateX(${transform}px)` }}
            >
              {dataStories.map((line, i) => {
                return (
                  <Link
                    to={`/stories/${line.username}`}
                    className="bowl_Story_user"
                    key={i}
                  >
                    <Timage src={line.avatar} clas="avatar_user_story" />
                    <Tspan title={line.username} clas="username_user_story" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bowl_posts_home">
          {Posts.map((post, i) => (
            <Post data={post} key={i} />
          ))}
        </div>
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
