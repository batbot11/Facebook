import React from "react";
import {Menu, Image, Button} from "semantic-ui-react";

const Navbar = () => {
    return(
        <Menu>
            <Menu.Item>
                <Image src="assets/images/logo.png" size="mini"  />
            </Menu.Item>
        <Menu.Item
          name='Facebook'
        />

        <Menu.Item
          name='Events'
        />

        <Menu.Item
          name='People'
        />
        <Menu.Menu position="right" >
        <Menu.Item>
            <Button  color = "yellow" >Login</Button>
        </Menu.Item>
        <Menu.Item>
            <Button color = "google plus" >Signup</Button>
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
}

export default Navbar;