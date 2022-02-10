// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Layer1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 13"}
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
          "M16.995 5.004H3.405l3.3-3.29a1.004 1.004 0 10-1.42-1.42l-5 5a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l5 5a1.001 1.001 0 001.639-.325 1 1 0 00-.219-1.095l-3.3-3.29h13.59a1 1 0 100-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer1Icon;
/* prettier-ignore-end */
