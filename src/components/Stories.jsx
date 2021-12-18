import img1 from "../assets/stories/1.jpg";
import img2 from "../assets/stories/2.jpg";
import img3 from "../assets/stories/3.jpg";
import img4 from "../assets/stories/4.jpg";
import img5 from "../assets/stories/5.jpg";
import img6 from "../assets/stories/6.jpg";
import img7 from "../assets/stories/7.jpg";
import img8 from "../assets/stories/8.jpg";
import img9 from "../assets/stories/9.jpg";
// import vid1 from "../assets/stories/10.mp4";
import vid1 from "../assets/stories/7.jpg";

const Storis = [
  {
    id: 0,
    username: "devnluffy",
    stories: [
      { type: "image", date: "1h", src: img1 },
      { type: "image", date: "2h", src: img2 },
      { type: "image", date: "5h", src: img3 },
    ],
  },

  {
    id: 1,
    username: "mostafa",
    stories: [
      { type: "image", date: "4h", src: img7 },
      { type: "video", date: "2h", src: vid1 },
    ],
  },
  {
    id: 2,
    username: "noia",
    stories: [{ type: "image", date: "4h", src: img4 }],
  },
  {
    id: 3,
    username: "noor",
    stories: [
      { type: "image", date: "4h", src: img5 },
      { type: "image", date: "4h", src: img6 },
    ],
  },
  {
    id: 3,
    username: "luffy",
    stories: [
      { type: "image", date: "1h", src: img8 },
      { type: "image", date: "44m", src: img9 },
    ],
  },
];

export { Storis };
