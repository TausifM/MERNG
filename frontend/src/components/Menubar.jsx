import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

function MenuBar() {
  const handleItemClick = (e, { name }) => setActiveItem({ name });
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);
  return (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        to="/"
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
          to="/login"
        />
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
  );
}

export default MenuBar;
