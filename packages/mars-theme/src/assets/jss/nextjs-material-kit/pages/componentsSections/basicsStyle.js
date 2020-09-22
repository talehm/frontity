import { container, title } from "../../../nextjs-material-kit.js";
import customCheckboxRadioSwitch from "../../../nextjs-material-kit/customCheckboxRadioSwitch.js";

const basicsStyle = {
  sections: {
    padding: "70px 0"
  },
  container,

  title: {
    ...title,
    minHeight: "10px",
    textDecoration: "none"
  },
  space20: {
    height: "20px",
    display: "block"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },

  ...customCheckboxRadioSwitch
};

export default basicsStyle;
