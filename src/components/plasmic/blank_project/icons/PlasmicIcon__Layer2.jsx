// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Layer2Icon(props) {
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
          "M17.92 6.384a1 1 0 000-.76 1 1 0 00-.21-.33l-5-5a1.003 1.003 0 10-1.42 1.42l3.3 3.29H1a1 1 0 000 2h13.59l-3.3 3.29a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l5-5a1 1 0 00.21-.33z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer2Icon;
/* prettier-ignore-end */
