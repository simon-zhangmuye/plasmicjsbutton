// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xr9maaNfLrdiXDsDctNCkm
// Component: jY_cDnyICD
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { TabPane } from "rc-tabs"; // plasmic-import: p3HNI5RglT/codeComponent
import Button from "../../Button"; // plasmic-import: CnirdxmO2aC/component
import { Button as Button2 } from "antd"; // plasmic-import: kv6Mk_JNYw/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: xr9maaNfLrdiXDsDctNCkm/projectcss
import sty from "./PlasmicTest2.module.css"; // plasmic-import: jY_cDnyICD/css

export const PlasmicTest2__VariantProps = new Array();

export const PlasmicTest2__ArgProps = new Array();

function PlasmicTest2__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <TabPane
            className={classNames("__wab_instance", sty.antdTabPane__tRdf4)}
            key={"tabPaneKey"}
            tab={"Tab"}
          >
            {"Tab Content"}
          </TabPane>

          <TabPane
            className={classNames("__wab_instance", sty.antdTabPane___6Cyx7)}
            key={"tabPaneKey"}
            tab={"Tab"}
          >
            {"Tab Content"}
          </TabPane>

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              showEndIcon={true}
              showStartIcon={true}
            />

            <Button2
              data-plasmic-name={"antdButton"}
              data-plasmic-override={overrides.antdButton}
              className={classNames("__wab_instance", sty.antdButton)}
            >
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"Button"}
              </div>
            </Button2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "button", "antdButton", "text"],
  freeBox: ["freeBox", "button", "antdButton", "text"],
  button: ["button"],
  antdButton: ["antdButton", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTest2__ArgProps,
      internalVariantPropNames: PlasmicTest2__VariantProps
    });

    return PlasmicTest2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTest2";
  } else {
    func.displayName = `PlasmicTest2.${nodeName}`;
  }
  return func;
}

export const PlasmicTest2 = Object.assign(
  // Top-level PlasmicTest2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    button: makeNodeComponent("button"),
    antdButton: makeNodeComponent("antdButton"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicTest2
    internalVariantProps: PlasmicTest2__VariantProps,
    internalArgProps: PlasmicTest2__ArgProps
  }
);

export default PlasmicTest2;
/* prettier-ignore-end */
