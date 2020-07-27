import React from 'react';
import { Link } from "gatsby";
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const LinkAction = styled(Link)`
  transition: all 150ms ease-in-out;
  margin-left: auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 0 auto;
  }

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`

export default ({to, text, span, ...props}) => {
    let spanContent = '';
    if(span) {
       spanContent = span 
    } else {
        spanContent = "→"
    };

    return (
        <LinkAction {...props} to={to}>
        {text} <span>{spanContent}</span>
        </LinkAction>
    )
}