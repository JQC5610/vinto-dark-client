import React, { Component } from "react";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell";

// import "./style.css";


class HeaderVinto extends Component {
    render(){
        return(          
              <Header aria-label="Vinto Application">
                <HeaderName href="/" prefix="Vinto">
                  Home
                </HeaderName>
                <HeaderNavigation aria-label="IBM [Platform]">
                  <HeaderMenu aria-label="2020" menuLinkName="2020">
                    <HeaderMenuItem href="/may">May</HeaderMenuItem>
                    <HeaderMenuItem href="#">June</HeaderMenuItem>
                    <HeaderMenuItem href="#">July</HeaderMenuItem>
                  </HeaderMenu>
                </HeaderNavigation>
                <HeaderGlobalBar>
                  <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
                    <Notification20 />
                  </HeaderGlobalAction>
                  <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
                    <AppSwitcher20 />
                  </HeaderGlobalAction>
                </HeaderGlobalBar>
              </Header>              
        );  
        }
    } 

export default HeaderVinto;