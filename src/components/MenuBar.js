import React from 'react'
import {Menu, Icon} from 'semantic-ui-react';


const MenuBar = ({changeSelected, selected}) => {

	const handleClick = (event) => {
		changeSelected(event.target.id)
	}



	return <Menu widths={4}>
            <Menu.Item onClick={handleClick} 
            		   active={selected === "profile"}
            		   id="profile">
            		  	<Icon size = "large" name="user"/>
            </Menu.Item>

            <Menu.Item onClick={handleClick} 
            		   active={selected === "photo"} 
            		   id="photo">
            		   <Icon size = "large" name="photo"/>
            </Menu.Item>

            <Menu.Item onClick={handleClick} 
            		   active={selected === "cocktail"} 
            		   id="cocktail">
            		   <Icon size = "large" name="cocktail"/>
            </Menu.Item>

            <Menu.Item onClick={handleClick} 
            		   active={selected === "pokemon"}
            		   id="pokemon"> 
            		   <Icon size = "large" name="theme isle"/>
            </Menu.Item>
          </Menu>

}

export default MenuBar