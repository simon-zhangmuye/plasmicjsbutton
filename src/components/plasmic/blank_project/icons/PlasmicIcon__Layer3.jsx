// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Layer3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.416 7.004l5.3-5.29a1.004 1.004 0 10-1.42-1.42l-5.29 5.3-5.29-5.3a1.004 1.004 0 00-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l5.29-5.3 5.29 5.3a1.002 1.002 0 001.639-.325 1 1 0 00-.22-1.095l-5.3-5.29z"
        }
        fill={"currentColor"}
        fillOpacity={".9"}
      ></path>
    </svg>
  );
}

export default Layer3Icon;
/* prettier-ignore-end */
