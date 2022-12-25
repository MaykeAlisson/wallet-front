import { useContext } from "react";
import ColorModeContext from "../contexts/ColorModeContext";

const userColorMode = () => useContext(ColorModeContext);

export default userColorMode;
