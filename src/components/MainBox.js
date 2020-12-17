import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

const pageMap = {
  Profile: <Profile />,
  Photos: <Photos />,
  Cocktails: <Cocktails />,
  Pokemon: <Pokemon />,
};

function MainBox() {
  const [selectedPage, setSelectedPage] = useState("Profile");

  return (
    <div>
      <MenuBar selectedPage={selectedPage} onMenuClick={setSelectedPage} />
      {pageMap[selectedPage]}
    </div>
  );
}

export default MainBox;
