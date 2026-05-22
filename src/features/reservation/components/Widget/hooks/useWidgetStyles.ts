import type { RefObject } from "react";

import useRemoveExternalStylesheet from "./useRemoveExternalStylesheet";
import useWidgetCustomStyles from "./useWidgetCustomStyles";

import { TWOJ_PSYCHOLOG_STYLESHEET_URL } from "../config";

import rawExternalStyles from "../css/externalStyles.css?raw";
import rawCustomStyles from "../css/customStyles.css?raw";

const useWidgetStyles = (widgetRef: RefObject<HTMLDivElement | null>) => {
  // ------------------------------------------------------------
  // This script removes the widget's default CSS file.
  // The file's use of tailwind classes with `!important` was conflicting with our
  // classes. We use a modified version of the widget's stylesheet that does not
  // include the conflicting classes. If the widget is updated and no longer uses
  // conflicting classes, this script can be safely removed, and the new, original
  // stylesheet can be included.
  //
  useRemoveExternalStylesheet(TWOJ_PSYCHOLOG_STYLESHEET_URL);
  useWidgetCustomStyles(rawExternalStyles, widgetRef);
  // ------------------------------------------------------------

  useWidgetCustomStyles(rawCustomStyles, widgetRef);
};

export default useWidgetStyles;
