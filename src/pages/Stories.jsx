import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  IcArrowRigth,
  IcClose,
  IcMore,
  IcMute,
  IcPause,
  IcPlay,
  IcSender,
  IcVolume,
} from "../components/Icons";
import { Users } from "../components/Users";
import { Timage, Tinput, Tspan } from "../components/Tags";
import { Storis } from "../components/Stories";
import { useNavigate } from "react-router-dom";

function Stories() {
  const { username: defaultUserBefore } = useParams();
  const [defaultUser, setDefaultUser] = useState(defaultUserBefore);
  const [transform, setTransform] = useState("0");
  const [tranNUmber, setTranNUmber] = useState(0);
  const [lengthArrived, setLengthArrived] = useState(0);
  const [msgValue, setMsgValue] = useState("");
  const [subTransform, setSubTransform] = useState("0");
  const [subTransformNumber, setSubTransformNumber] = useState(0);
  const [subArrived, setSubArrived] = useState(0);
  let navigate = useNavigate();

  // select user from list by params link
  useEffect(() => {
    let foundINdexUser = Storis.findIndex(
      (e) => e.username === defaultUserBefore
    );
    setTransform("-" + foundINdexUser * 400);
    setTranNUmber(foundINdexUser * 400);
    setLengthArrived(foundINdexUser);
  }, [defaultUserBefore]);

  // make new array with join users with thire stories
  let collectStories = Storis.map((st) => {
    let infoUser = Users.filter((user) => user.username === st.username);
    return {
      ...st,
      ...infoUser[0],
      active: st.username === defaultUser ? true : false,
    };
  });

  //  move slider to rigth
  const sliderToRigth = () => {
    if (tranNUmber < Storis.length * 400 - 400) {
      setSubArrived(0);
      setSubTransform("0");
      setSubTransformNumber(0);
      restMsg();
      setTransform("-" + (tranNUmber + 400));
      setTranNUmber(tranNUmber + 400);
      setLengthArrived(lengthArrived + 1);
      let userGo = Storis[lengthArrived + 1].username;
      setDefaultUser(userGo);
      navigate(`/stories/${userGo}`);
    }
  };

  // move slider to left
  const sliderToLeft = () => {
    if (tranNUmber > 0) {
      restMsg();
      setTransform("-" + (tranNUmber - 400));
      setTranNUmber(tranNUmber - 400);
      setLengthArrived(lengthArrived - 1);
      let userGo = Storis[lengthArrived - 1].username;
      setDefaultUser(userGo);
      navigate(`/stories/${userGo}`);
    }
  };

  // to rest input value msg
  const restMsg = () => setMsgValue("");

  //  for auto move slide between stories
  useEffect(() => {
    let foundINdexUser = Storis.filter((e) => e.username === defaultUser);
    let len = foundINdexUser[0].stories.length;
    let autoMoveInterval = setInterval(() => {
      if (subTransformNumber < len * 400 - 400) {
        setSubArrived(subArrived + 1);
        setSubTransform("-" + (subTransformNumber + 400));
        setSubTransformNumber(subTransformNumber + 400);
      } else {
        sliderToRigth();
      }
      console.log(0);
    }, 6000);
    return () => {
      clearInterval(autoMoveInterval);
    };
  }, [defaultUser, subTransformNumber]);

  const GOHOme = () => navigate(`/`);

  return (
    <div className="wrapper_Stories">
      <div className="styories_Slider">
        <div
          className="content_stories_slid"
          style={{ transform: `translateX(${transform}px)` }}
        >
          {collectStories.map((st, i) => {
            return (
              <div
                className={`user_Stories_show ${st.active ? "active" : null}`}
                key={i}
              >
                <div className="bowl_media_all">
                  <div
                    className={`content_all_media ${
                      st.active ? "active" : null
                    }`}
                    style={
                      st.active
                        ? { transform: `translateX(${subTransform}px)` }
                        : null
                    }
                  >
                    {st.stories.map((stor, i) => {
                      return (
                        <Timage
                          key={i}
                          src={stor.src}
                          clas="media_Story_show"
                        />
                      );
                    })}
                  </div>
                </div>

                {st.active ? (
                  <div className="items_above_story">
                    <div className="user_publish_story">
                      <div className="bowl_progress_length">
                        {st.stories.map((stor, i) => {
                          return (
                            <div
                              className={`bar_progress_sub_store ${
                                subArrived === i ? "active" : null
                              }`}
                              key={i}
                            ></div>
                          );
                        })}
                      </div>
                      <div className="down_progress_info">
                        <Timage src={st.avatar} clas="avatar_publish_story" />
                        <Tspan title={st.username} clas="title_Story_user" />
                        <Tspan title="1h" clas="title_Story_user" />
                        <div className="set_react_story">
                          <IcPlay clas="svg_Story_react" />
                          <IcPause clas="svg_Story_react" />
                          <IcMute clas="svg_Story_react" />
                          <IcVolume clas="svg_Story_react" />
                          <IcMore clas="svg_Story_react" />
                        </div>
                      </div>
                    </div>
                    <div className="bowl_Send_msg_this_Story">
                      <Tinput
                        plc={`replay msg to ${st.username}`}
                        clas="input_send_Res_msg_story"
                        value={msgValue}
                        onChange={(e) => setMsgValue(e.target.value)}
                      />
                      <IcSender clas="sender_Svg_ico_story" onClick={restMsg} />
                    </div>
                  </div>
                ) : (
                  <div className="bowl_title_story">
                    <Timage src={st.avatar} clas="avatar_story_user_more" />
                    <Tspan title={st.username} clas="title_story_more" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <IcArrowRigth
          clas="arrows_stories_Show arrowshowst_left"
          onClick={sliderToLeft}
        />
        <IcArrowRigth
          clas="arrows_stories_Show arrowshowst_rigth"
          onClick={sliderToRigth}
        />
        <IcClose clas="close_stories" onClick={GOHOme} />
      </div>
    </div>
  );
}

export default Stories;
