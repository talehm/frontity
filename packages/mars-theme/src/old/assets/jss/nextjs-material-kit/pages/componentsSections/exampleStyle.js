import { conatinerFluid } from "../../../nextjs-material-kit.js";

import imagesStyle from "../../../nextjs-material-kit/imagesStyles.js";

const exampleStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...conatinerFluid,
    textAlign: "center !important"
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;
