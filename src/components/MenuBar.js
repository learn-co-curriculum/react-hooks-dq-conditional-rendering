import React from 'react'
import {Menu, Icon} from 'semantic-ui-react';


const MenuBar = (props) => {

      /*
      
      The 'a' tags below are the menu items. Think about the way a menu 
      should work. When you click a menu item, the button typically becomes
      'active' to indicate that it is currently selected. How could we achieve
      this programatically? What other behavior do we expect when we click
      on a menu item? Do we need state in this component, and if not, how can
      this component be made aware of what is currently the active menu item?

      */

	return (
      <div className="ui four item menu">
            <a className="item active" id="profile">
            	<i className="user large icon"/>
            </a>

            <a className="item" id="photo">
            	<i className="photo large icon"/>
            </a>

            <a className="item" id="cocktail">
            	<i className="cocktail large icon"/>
            </a>

            <a className="item" id="pokemon"> 
            	<i className=" themeisle large icon"/>
            </a>
      </div>
      )

}

export default MenuBar