import React, { useState } from "react";

function MenuBar({ selected, setSelected}) {

  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */


  function handleClick(value){
    setSelected(value)
  }
  
  
  return (
    <div className="ui four item menu">
      <span className={selected === "user" ? "item active" : "item"}>
        <i className="user large icon" onClick={()=>handleClick("user")}/>
      </span>

      <span className={selected === "photo" ? "item active" : "item"}>
        <i className="photo large icon" onClick={()=>handleClick("photo")}/>
      </span>

      <span className={selected === "cocktail" ? "item active" : "item"}>
        <i className="cocktail large icon" onClick={()=>handleClick("cocktail")}/>
      </span>

      <span className={selected === "pokemon" ? "item active" : "item"}>
        <i className="themeisle large icon" onClick={()=>handleClick("pokemon")}/>
      </span>
    </div>
  );
}

export default MenuBar;
