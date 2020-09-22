/*!

 =========================================================
 * NextJS Material Kit - v1.1.0 based on Material Kit - v2.0.2 and Material Kit React - v1.8.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/nextjs-material-kit
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const hexColorToRGB = function (hexColor) {
  let detectShorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; // #000 vs #000000
  hexColor = hexColor.replace(detectShorthand, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const hex_array = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor); // #000000 to #ffffff
  return hex_array
    ? {
      r: parseInt(hex_array[1], 16), // 0-255
      g: parseInt(hex_array[2], 16), // 0-255
      b: parseInt(hex_array[3], 16) // 0-255
    }
    : null;
};

const hexToRGBAlpha = function (hexColor, alpha) {
  let rgb = hexColorToRGB(hexColor);
  return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
};

const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const conatinerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};
const main = {
  background: "#FFFFFF",
  position: "relative",
  zIndex: "3"
}
const mainRaised = {
  margin: "-60px 30px 0px",
  borderRadius: "6px",
  boxShadow:
    "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
}
const searchForm = {
  width: "80%",
  "@media (max-width: 575px)": {
    width: "40%"
  },
  "@media (min-width: 576px)": {
    width: "60%"
  },
  "@media (min-width: 768px)": {
    width: "60%"
  },
  "@media (min-width: 992px)": {
    width: "70%"
  },
  "@media (min-width: 1200px)": {
    width: "60%"
  },
}

const container = {

  ...conatinerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1440px"
  }
};

const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const slackBlueColor = "#36C5F0"
const slackYellowColor = "#ECB22E"
const slackGreenColor = "#2EB67D"
const slackRedColor = "#E01E5A"

const slackColor = "#4A154B"
const lemondarkColor = "#4A154B"
const lemonyellowColor = "#ffcd24"
const primaryColor = "#9c27b0";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";

const primaryBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
    primaryColor,
    0.28
  )}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
    primaryColor,
    0.2
  )}`
};
const lemondarkBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
    lemondarkColor,
    0.28
  )}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
    lemondarkColor,
    0.2
  )}`
};
const lemonyellowBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
    lemonyellowColor,
    0.28
  )}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
    lemonyellowColor,
    0.2
  )}`
};
const infoBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
    infoColor,
    0.28
  )}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
    infoColor,
    0.2
  )}`
};
const successBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
    successColor,
    0.28
  )}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
    successColor,
    0.2
  )}`
};
const warningBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
    warningColor,
    0.28
  )}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
    warningColor,
    0.2
  )}`
};
const dangerBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
    dangerColor,
    0.28
  )}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
    dangerColor,
    0.2
  )}`
};
const roseBoxShadow = {
  boxShadow: `0 4px 20px 0px ${hexToRGBAlpha(
    "#000",
    0.14
  )}, 0 7px 10px -5px ${hexToRGBAlpha(roseColor, 0.4)}`
};

const warningCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)",
  ...warningBoxShadow
};
const successCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)",
  ...successBoxShadow
};
const dangerCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)",
  ...dangerBoxShadow
};
const infoCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, #00acc1)",
  ...infoBoxShadow
};
const primaryCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
  ...primaryBoxShadow
};
const lemondarkCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
  ...lemondarkBoxShadow
};
const lemonyellowCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
  ...lemonyellowBoxShadow
};
const roseCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, #d81b60)",
  ...roseBoxShadow
};
const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto",
  ...defaultFont
};

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};

const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow:
    "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};

const title = {
  color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
};
const loader = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
const innerLoader = { position: "absolute", minHeight: 300, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
const cardTitle = {
  ...title,
  marginTop: ".625rem",
  textAlign: "left",
  padding: "0px 15px",
  color: slackColor,
  "@media (max-width: 575px)": {
    fontSize: "1.163rem",
    marginBottom: 0
  },
  "@media (min-width: 576px)": {
    fontSize: "1.163rem",
    marginBottom: 0
  },
  "@media (min-width: 768px)": {
    fontSize: "1.263rem",
    marginBottom: 0
  },
  "@media (min-width: 992px)": {
    fontSize: "1.363rem",
    marginBottom: 0
  },
  "@media (min-width: 1200px)": {
    fontSize: "1.563rem",
    marginBottom: 0
  },

};

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};

const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};

export {
  hexToRGBAlpha,
  //variables
  drawerWidth,
  transition,
  container,
  searchForm,
  conatinerFluid,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  warningColor,
  dangerColor,
  lemondarkColor,
  lemonyellowColor,
  successColor,
  infoColor,
  roseColor,
  slackColor,
  slackGreenColor,
  slackRedColor,
  slackBlueColor,
  slackYellowColor,
  innerLoader,
  grayColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  lemonyellowBoxShadow,
  lemondarkBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  lemondarkCardHeader,
  lemonyellowCardHeader,
  roseCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardLink,
  cardSubtitle,
  main,
  mainRaised,
  loader
};
