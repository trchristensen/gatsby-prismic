import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Logo from "components/_ui/Logo";

const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 50px;
    }
`

const FooterAuthor = styled("a")`
    font-size: 0.75em;
    color: ${colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;

     &:hover {
         color: ${colors.blue900};

        .FooterSpooch {
            animation-name: rotate;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }

    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`


const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    return (
        <FooterContainer>
            <Link to="/">
                <Logo />
            </Link>
            <FooterAuthor href="https://toddchristensen.net/?utm_source=christyvault&utm_medium=footer&utm_campaign=christyvault">
                © {year} — toddchristensen.net
            </FooterAuthor>
        </FooterContainer> 
        )
}

export default Footer;
