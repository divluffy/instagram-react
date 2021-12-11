import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Messanger } from "../assets/messanger.svg";
import { ReactComponent as AddOut } from "../assets/add-out.svg";
import { ReactComponent as Explore } from "../assets/explore.svg";
import { ReactComponent as LoveN } from "../assets/love-n.svg";
import { ReactComponent as LoveY } from "../assets/love-y.svg";
import { ReactComponent as More } from "../assets/more.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as SaveN } from "../assets/save-n.svg";
import { ReactComponent as Savey } from "../assets/save-y.svg";
import { ReactComponent as Comments } from "../assets/comments.svg";
import { ReactComponent as Face } from "../assets/face.svg";
import { ReactComponent as Sender } from "../assets/sender.svg";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Imgandvideo } from "../assets/imgandvideo.svg";
import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as Loader } from "../assets/loader.svg";
import { ReactComponent as Play } from "../assets/play.svg";
import { ReactComponent as Mute } from "../assets/mute.svg";
import { ReactComponent as Volume } from "../assets/volume.svg";
import { ReactComponent as Setting } from "../assets/setting.svg";

const IcSettings = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Setting />
  </div>
);
const IcVolume = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Volume />
  </div>
);
const IcMute = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Mute />
  </div>
);
const IcPlay = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Play />
  </div>
);
const IcLoader = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Loader />
  </div>
);

const IcClose = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Close />
  </div>
);
const IcImgandvideo = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Imgandvideo />
  </div>
);
const IcUser = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <User />
  </div>
);
const IcSender = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Sender />
  </div>
);
const IcFace = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Face />
  </div>
);

const IcComments = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Comments />
  </div>
);

const IcSaveN = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <SaveN />
  </div>
);
const IcSaveY = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Savey />
  </div>
);
const IcSearch = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Search />
  </div>
);

const IcMore = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <More />
  </div>
);

const IcLoveN = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <LoveN />
  </div>
);
const IcLoveY = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <LoveY />
  </div>
);
const IcHome = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Home />
  </div>
);

const IcMessanger = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Messanger />
  </div>
);
const IcAddOut = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <AddOut />
  </div>
);
const IcExplore = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Explore />
  </div>
);
export {
  IcHome,
  IcMessanger,
  IcAddOut,
  IcSearch,
  IcMore,
  IcComments,
  IcExplore,
  IcSaveN,
  IcSaveY,
  IcFace,
  IcSender,
  IcPlay,
  IcUser,
  IcClose,
  IcLoveN,
  IcImgandvideo,
  IcMute,
  IcSettings,
  IcLoveY,
  IcLoader,
  IcVolume,
};
