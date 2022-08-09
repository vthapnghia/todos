import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../redux/theme";

const RED = "#ff0000";
const BLUE = "#0000ff";
const GRAY = "#678c89";

function Footer() {
  const color = useSelector((state) => state.theme.color);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.style.setProperty( "--main-color",color);
  }, [color]);
  return (
    <div className="footer">
      <div className="vertical-center">
        <span>Choose Theme</span>
        <button
          onClick={() => dispatch(changeTheme(RED))}
          className="dot red"
        />
        <button
          onClick={() => dispatch(changeTheme(BLUE))}
          className="dot blue"
        />
        <button
          onClick={() => dispatch(changeTheme(GRAY))}
          className="dot gray"
        />
      </div>
    </div>
  );
}

export default Footer;
