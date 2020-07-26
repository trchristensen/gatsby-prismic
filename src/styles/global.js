import css from "@emotion/css"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const globalStyles = css`
  html,
  body,
  #root {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
  }

  body {
    width: 100%;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.5;
    color: ${colors.grey900};
    -webkit-font-smoothing: antialiased;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 14px;
    }

    * {
      box-sizing: border-box;

      &::selection {
        background: ${colors.orange500};
        color: white;
      }
    }
  }

  /*
    A workaround for forcing accessibility wrappers
    to have a 100% height.
    Reach Router issue here: https: //github.com/reach/router/issues/63
    */
  #___gatsby,
  div[role="group"][tabindex] {
    height: 100%;
    min-height: 100% !important;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;

    /* Our sidebar item styling */
    text-decoration: none;
    margin-bottom: 10px;
    color: #d1d1d1;
    transition: color 0.2s;
  }

  /* Change color on hover */
  .bm-item:hover {
    color: white;
  }

  /* The rest copied directly from react-burger-menu docs */

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 2.5em;
    top: 72px;
    @media (max-width:600px) {
        right: 2em;
    }
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`

export default globalStyles
