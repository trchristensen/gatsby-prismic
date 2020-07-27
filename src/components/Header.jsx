import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";

const Header = () => (
  <>
    <HeaderContainer>
      <HeaderContent>
        <Link id="logo" to="/">
          <Logo />
        </Link>
        <HeaderLinks>
          <Link activeClassName="Link--is-active" to="/about">
            About
          </Link>
          <Link activeClassName="Link--is-active" to="/work">
            Work
          </Link>
          <Link activeClassName="Link--is-active" to="/news-events">
            News &amp; Events
          </Link>
          <Link activeClassName="Link--is-active" to="/contact">
            Contact
          </Link>
        </HeaderLinks>
      </HeaderContent>
    </HeaderContainer>
  </>
)

export default Header;


const HeaderContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
  #logo {
    min-width: 200px;
    width: 10%;
  }
`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: flex-start;
`

const HeaderLinks = styled("div")`
  display: flex;
  // justify-content: space-between;
  justify-content: space-around;
  flex-direction: row;
  width: 90%;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    font-size: 0.95em;
    height: 100%;
    // padding-bottom: 1.25em;
    padding-top: 0.25em;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;

    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 18px;
      height: 3px;
      background: transparent;
      bottom: -3px;
      right: 50%;
      margin-right: -9px;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }
  }
`