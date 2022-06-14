import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
    const [childName,setChildName] = useState(Profile)
    
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */
    function clickProfile(){
      setChildName(Profile)
    }
  function clickPhotos(){
    setChildName(Photos)
  }
  function clickCocktails(){
    setChildName(Cocktails)
  }
  function clickPokemon(){
    setChildName(Pokemon)
  }
  return (
    <div>
      <MenuBar clickProfile={clickProfile} clickPhotos={clickPhotos} clickCocktails={clickCocktails} clickPokemon={clickPokemon} />
      <p>{childName}</p>
    </div>
  );
}

export default MainBox;
