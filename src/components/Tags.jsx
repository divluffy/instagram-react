const Tbtn = ({ title, clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <button>{title}</button>
  </div>
);

const Tinput = ({ type, plc, value, clas, onChange }) => (
  <div className={clas}>
    <input
      value={value}
      type={type ? type : "text"}
      placeholder={plc}
      onChange={onChange}
    />
  </div>
);

const Tspan = ({ title, clas }) => (
  <div className={clas}>
    <span>{title}</span>
  </div>
);

const Timage = ({ src, clas }) => (
  <div className={clas}>
    <img src={src} alt="" />
  </div>
);
export { Tbtn, Tspan, Tinput, Timage };
