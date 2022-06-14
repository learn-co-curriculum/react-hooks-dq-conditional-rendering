import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
    const [selected,setSelected] = useState("user")
    
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */
  let detailsToDisplay = ()=> {
    if (selected === "user"){
      return <Profile/>
    } else if (selected === "photo"){
      return <Photos/>
    } else if (selected ==="cocktail"){
      return <Cocktails/>
    } else if (selected === "themeisle"){
      return <Pokemon />
    }
  }
  return (
    <div>
      <MenuBar selected={selected} setSelected={setSelected} />
      {detailsToDisplay()}
    </div>
  );
}

export default MainBox;
