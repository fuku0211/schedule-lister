import { React } from "react";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  flex: "1",
};

const btnStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: "1",
};

const blank = {
  height: "20%",
  minHeight: "200px",
};

export const SideWindow = () => {
  return (
    <>
      <div className="sideWindow">
        <div className="blank" style={blank} />
        <div className="btnContainer" style={containerStyle}>
          <MenuBtn icon={"fas fa-camera fa-3x"} />
          <MenuBtn icon={"fas fa-camera fa-3x"} />
          <MenuBtn icon={"fas fa-camera fa-3x"} />
          <MenuBtn icon={"fas fa-camera fa-3x"} />
          <MenuBtn icon={"fas fa-camera fa-3x"} />
        </div>
        <div className="blank" style={blank} />
      </div>
    </>
  );
};

const MenuBtn = (props) => {
  const { icon } = props;
  return (
    <div style={btnStyle}>
      <button>
        <i className={icon}></i>
      </button>
    </div>
  );
};
