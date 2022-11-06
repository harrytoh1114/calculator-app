import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeAction } from "../../store/theme-slice";
import "./Theme.scss";

const Theme = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className="theme">
      <h4 className="theme__title">theme</h4>
      <div className={"theme__toggle theme-" + theme}>
        <div className="theme__no">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div
          onClick={() => {
            dispatch(themeAction.changeTheme(1));
          }}
          className={
            theme === 1
              ? "theme__toggle-ball theme-1 active"
              : "theme__toggle-ball"
          }
        ></div>
        <div
          onClick={() => {
            dispatch(themeAction.changeTheme(2));
          }}
          className={
            theme === 2
              ? "theme__toggle-ball theme-2 active"
              : "theme__toggle-ball"
          }
        ></div>
        <div
          onClick={() => {
            dispatch(themeAction.changeTheme(3));
          }}
          className={
            theme === 3
              ? "theme__toggle-ball theme-3 active"
              : "theme__toggle-ball"
          }
        ></div>
      </div>
    </div>
  );
};

export default Theme;
