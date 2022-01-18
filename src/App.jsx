import { React } from "react";
import { SideWindow } from "./components/SideWindow.jsx";
import { ControlWindow } from "./components/ControlWindow.jsx";
import { AppWindow } from "./components/AppWindow.jsx";
import "./index.css";

export const App = () => {
  return (
    <>
      <div className="allWindow">
        <SideWindow />
        <div className="mainWindow">
          <ControlWindow />
          <AppWindow />
        </div>
      </div>
    </>
  );
};
