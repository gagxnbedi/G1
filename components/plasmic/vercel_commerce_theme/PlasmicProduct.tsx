// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6UtUvTtmyc5qzrzJqnbLQ9
// Component: harga1i4Dgt_

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Navbar from "../../Navbar"; // plasmic-import: uxTyr3KlIWAw/component
import { ProductBox } from "@plasmicpkgs/commerce";
import { ProductSlider } from "@plasmicpkgs/commerce";
import { ProductMedia } from "@plasmicpkgs/commerce";
import { ProductTextField } from "@plasmicpkgs/commerce";
import { ProductVariantPicker } from "@plasmicpkgs/commerce";
import { AddToCartButton } from "@plasmicpkgs/commerce";
import Button from "../../Button"; // plasmic-import: o_YlDiyXgp3m/component
import Collapse from "../../Collapse"; // plasmic-import: bL7a3-s1MxCv/component
import Footer from "../../Footer"; // plasmic-import: 5zOhaPj4y2EJ/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_color_tokens/plasmic.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6UtUvTtmyc5qzrzJqnbLQ9/projectcss
import sty from "./PlasmicProduct.module.css"; // plasmic-import: harga1i4Dgt_/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: pZQkoBV8XdrX/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: Rr0-1tBr5RUb/icon

createPlasmicElementProxy;

export type PlasmicProduct__VariantMembers = {};
export type PlasmicProduct__VariantsArgs = {};
type VariantPropType = keyof PlasmicProduct__VariantsArgs;
export const PlasmicProduct__VariantProps = new Array<VariantPropType>();

export type PlasmicProduct__ArgsType = {};
type ArgPropType = keyof PlasmicProduct__ArgsType;
export const PlasmicProduct__ArgProps = new Array<ArgPropType>();

export type PlasmicProduct__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  productBox?: Flex__<typeof ProductBox>;
  columns?: Flex__<"div">;
  productSlider?: Flex__<typeof ProductSlider>;
  h3?: Flex__<"h3">;
  productVariantPicker?: Flex__<typeof ProductVariantPicker>;
  addToCartButton?: Flex__<typeof AddToCartButton>;
  button?: Flex__<typeof Button>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultProductProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProduct__RenderFunc(props: {
  variants: PlasmicProduct__VariantsArgs;
  args: PlasmicProduct__ArgsType;
  overrides: PlasmicProduct__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicProduct.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicProduct.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicProduct.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

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
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <ProductBox
            data-plasmic-name={"productBox"}
            data-plasmic-override={overrides.productBox}
            className={classNames("__wab_instance", sty.productBox)}
            id={"short-sleeve-t-shirt"}
          >
            <DataCtxReader__>
              {$ctx => (
                <div
                  data-plasmic-name={"columns"}
                  data-plasmic-override={overrides.columns}
                  className={classNames(projectcss.all, sty.columns)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__eqyqm)}
                  >
                    <ProductSlider
                      data-plasmic-name={"productSlider"}
                      data-plasmic-override={overrides.productSlider}
                      className={classNames(
                        "__wab_instance",
                        sty.productSlider
                      )}
                      slideContainer={
                        <DataCtxReader__>
                          {$ctx => (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__pf08E
                              )}
                            >
                              <ProductMedia
                                className={classNames(
                                  "__wab_instance",
                                  sty.productMedia__xmb31
                                )}
                              />
                            </div>
                          )}
                        </DataCtxReader__>
                      }
                      slideSelected={0}
                      thumbsContainer={
                        <DataCtxReader__>
                          {$ctx => (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__usTs
                              )}
                            >
                              <ProductMedia
                                className={classNames(
                                  "__wab_instance",
                                  sty.productMedia__jy4Zb
                                )}
                              />
                            </div>
                          )}
                        </DataCtxReader__>
                      }
                      thumbsVisible={4}
                    />
                  </div>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.column__pTxVk)}
                  >
                    <h3
                      data-plasmic-name={"h3"}
                      data-plasmic-override={overrides.h3}
                      className={classNames(
                        projectcss.all,
                        projectcss.h3,
                        sty.h3
                      )}
                    >
                      <ProductTextField
                        className={classNames(
                          "__wab_instance",
                          sty.productTextField__anSRr
                        )}
                        field={"name"}
                      />
                    </h3>
                    <ProductTextField
                      className={classNames(
                        "__wab_instance",
                        sty.productTextField__bu7Bu
                      )}
                      field={"description"}
                    />

                    <ProductVariantPicker
                      data-plasmic-name={"productVariantPicker"}
                      data-plasmic-override={overrides.productVariantPicker}
                      className={classNames(
                        "__wab_instance",
                        sty.productVariantPicker
                      )}
                    />

                    <AddToCartButton
                      data-plasmic-name={"addToCartButton"}
                      data-plasmic-override={overrides.addToCartButton}
                      className={classNames(
                        "__wab_instance",
                        sty.addToCartButton
                      )}
                    >
                      <Button
                        data-plasmic-name={"button"}
                        data-plasmic-override={overrides.button}
                        className={classNames("__wab_instance", sty.button)}
                        color={"white"}
                        submitsForm={true}
                      >
                        {"ADD TO CART"}
                      </Button>
                    </AddToCartButton>
                    <Collapse
                      className={classNames(
                        "__wab_instance",
                        sty.collapse__o50GI
                      )}
                      content={
                        "This is a limited edition production run. Printing starts when the drop ends."
                      }
                      title={"Care"}
                    />

                    <Collapse
                      className={classNames(
                        "__wab_instance",
                        sty.collapse__h8PU4
                      )}
                      content={
                        "This is a limited edition production run. Printing starts when the drop ends. Reminder: Bad Boys For Life. Shipping may take 10+ days due to COVID-19."
                      }
                      title={"Details"}
                    />
                  </Stack__>
                </div>
              )}
            </DataCtxReader__>
          </ProductBox>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "productBox",
    "columns",
    "productSlider",
    "h3",
    "productVariantPicker",
    "addToCartButton",
    "button",
    "footer"
  ],
  navbar: ["navbar"],
  productBox: [
    "productBox",
    "columns",
    "productSlider",
    "h3",
    "productVariantPicker",
    "addToCartButton",
    "button"
  ],
  columns: [
    "columns",
    "productSlider",
    "h3",
    "productVariantPicker",
    "addToCartButton",
    "button"
  ],
  productSlider: ["productSlider"],
  h3: ["h3"],
  productVariantPicker: ["productVariantPicker"],
  addToCartButton: ["addToCartButton", "button"],
  button: ["button"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  productBox: typeof ProductBox;
  columns: "div";
  productSlider: typeof ProductSlider;
  h3: "h3";
  productVariantPicker: typeof ProductVariantPicker;
  addToCartButton: typeof AddToCartButton;
  button: typeof Button;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProduct__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProduct__VariantsArgs;
    args?: PlasmicProduct__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProduct__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProduct__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProduct__ArgProps,
          internalVariantPropNames: PlasmicProduct__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProduct__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProduct";
  } else {
    func.displayName = `PlasmicProduct.${nodeName}`;
  }
  return func;
}

export const PlasmicProduct = Object.assign(
  // Top-level PlasmicProduct renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    productBox: makeNodeComponent("productBox"),
    columns: makeNodeComponent("columns"),
    productSlider: makeNodeComponent("productSlider"),
    h3: makeNodeComponent("h3"),
    productVariantPicker: makeNodeComponent("productVariantPicker"),
    addToCartButton: makeNodeComponent("addToCartButton"),
    button: makeNodeComponent("button"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicProduct
    internalVariantProps: PlasmicProduct__VariantProps,
    internalArgProps: PlasmicProduct__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Product - Plasmic Commerce",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicProduct;
/* prettier-ignore-end */