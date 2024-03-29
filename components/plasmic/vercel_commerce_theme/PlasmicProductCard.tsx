// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6UtUvTtmyc5qzrzJqnbLQ9
// Component: OfJNqrWvM11W

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

import { ProductLink } from "@plasmicpkgs/commerce";
import { ProductTextField } from "@plasmicpkgs/commerce";
import { ProductPriceComponent } from "@plasmicpkgs/commerce";
import { ProductMedia } from "@plasmicpkgs/commerce";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_color_tokens/plasmic.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6UtUvTtmyc5qzrzJqnbLQ9/projectcss
import sty from "./PlasmicProductCard.module.css"; // plasmic-import: OfJNqrWvM11W/css

import WishlistIcon from "./icons/PlasmicIcon__Wishlist"; // plasmic-import: E-FVGWUJa_93/icon

createPlasmicElementProxy;

export type PlasmicProductCard__VariantMembers = {
  color: "violet" | "white" | "black" | "pink";
  hideWishlist: "hideWishlist";
  imageUrl: "imageUrl";
  hidePrice: "hidePrice";
};
export type PlasmicProductCard__VariantsArgs = {
  color?: SingleChoiceArg<"violet" | "white" | "black" | "pink">;
  hideWishlist?: SingleBooleanChoiceArg<"hideWishlist">;
  imageUrl?: SingleBooleanChoiceArg<"imageUrl">;
  hidePrice?: SingleBooleanChoiceArg<"hidePrice">;
};
type VariantPropType = keyof PlasmicProductCard__VariantsArgs;
export const PlasmicProductCard__VariantProps = new Array<VariantPropType>(
  "color",
  "hideWishlist",
  "imageUrl",
  "hidePrice"
);

export type PlasmicProductCard__ArgsType = {
  imageIndex?: number;
  children?: React.ReactNode;
  children2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicProductCard__ArgsType;
export const PlasmicProductCard__ArgProps = new Array<ArgPropType>(
  "imageIndex",
  "children",
  "children2"
);

export type PlasmicProductCard__OverridesType = {
  root?: Flex__<"div">;
  productLink?: Flex__<typeof ProductLink>;
  imageContainer?: Flex__<"div">;
  productTextField?: Flex__<typeof ProductTextField>;
};

export interface DefaultProductCardProps {
  imageIndex?: number;
  children?: React.ReactNode;
  children2?: React.ReactNode;
  color?: SingleChoiceArg<"violet" | "white" | "black" | "pink">;
  hideWishlist?: SingleBooleanChoiceArg<"hideWishlist">;
  imageUrl?: SingleBooleanChoiceArg<"imageUrl">;
  hidePrice?: SingleBooleanChoiceArg<"hidePrice">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProductCard__RenderFunc(props: {
  variants: PlasmicProductCard__VariantsArgs;
  args: PlasmicProductCard__ArgsType;
  overrides: PlasmicProductCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          imageIndex: undefined
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "hideWishlist",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hideWishlist
      },
      {
        path: "imageUrl",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.imageUrl
      },
      {
        path: "hidePrice",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hidePrice
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
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
        sty.root,
        "cover-container",
        {
          [sty.rootcolor_black]: hasVariant($state, "color", "black"),
          [sty.rootcolor_pink]: hasVariant($state, "color", "pink"),
          [sty.rootcolor_violet]: hasVariant($state, "color", "violet"),
          [sty.rootcolor_white]: hasVariant($state, "color", "white"),
          [sty.rootimageUrl]: hasVariant($state, "imageUrl", "imageUrl")
        }
      )}
    >
      <ProductLink
        data-plasmic-name={"productLink"}
        data-plasmic-override={overrides.productLink}
        className={classNames("__wab_instance", sty.productLink)}
        linkDest={"/product"}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__dV97H, {
            [sty.freeBoxcolor_violet__dV97HCpzGl]: hasVariant(
              $state,
              "color",
              "violet"
            ),
            [sty.freeBoxhideWishlist__dV97H0V5M8]: hasVariant(
              $state,
              "hideWishlist",
              "hideWishlist"
            ),
            [sty.freeBoximageUrl__dV97HNusf9]: hasVariant(
              $state,
              "imageUrl",
              "imageUrl"
            )
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__xxQvb, {
              [sty.freeBoxhideWishlist__xxQvb0V5M8]: hasVariant(
                $state,
                "hideWishlist",
                "hideWishlist"
              ),
              [sty.freeBoximageUrl__xxQvbNusf9]: hasVariant(
                $state,
                "imageUrl",
                "imageUrl"
              )
            })}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__apfmS, {
                [sty.freeBoxcolor_white__apfmSh3K0J]: hasVariant(
                  $state,
                  "color",
                  "white"
                ),
                [sty.freeBoxhideWishlist__apfmS0V5M8]: hasVariant(
                  $state,
                  "hideWishlist",
                  "hideWishlist"
                ),
                [sty.freeBoximageUrl__apfmSNusf9]: hasVariant(
                  $state,
                  "imageUrl",
                  "imageUrl"
                )
              })}
            >
              <div
                className={classNames(projectcss.all, sty.freeBox___31FGi, {
                  [sty.freeBoxhideWishlist___31FGi0V5M8]: hasVariant(
                    $state,
                    "hideWishlist",
                    "hideWishlist"
                  )
                })}
              >
                <div className={classNames(projectcss.all, sty.freeBox__fApVl)}>
                  {renderPlasmicSlot({
                    defaultContents: (
                      <ProductTextField
                        className={classNames(
                          "__wab_instance",
                          sty.productTextField___9U06Q
                        )}
                        field={"name"}
                      />
                    ),

                    value: args.children
                  })}
                </div>
                <div
                  className={classNames(projectcss.all, sty.freeBox__ltWl, {
                    [sty.freeBoxhideWishlist__ltWl0V5M8]: hasVariant(
                      $state,
                      "hideWishlist",
                      "hideWishlist"
                    )
                  })}
                >
                  <WishlistIcon
                    className={classNames(projectcss.all, sty.svg__yXohl, {
                      [sty.svgcolor_white__yXohlH3K0J]: hasVariant(
                        $state,
                        "color",
                        "white"
                      )
                    })}
                    role={"img"}
                  />
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__sGnhe)}>
                <ProductPriceComponent
                  className={classNames(
                    "__wab_instance",
                    sty.productPrice___7Jfn7,
                    {
                      [sty.productPricecolor_white___7Jfn7H3K0J]: hasVariant(
                        $state,
                        "color",
                        "white"
                      ),
                      [sty.productPricehidePrice___7Jfn74YdUw]: hasVariant(
                        $state,
                        "hidePrice",
                        "hidePrice"
                      )
                    }
                  )}
                />
              </div>
            </Stack__>
            <div
              className={classNames(projectcss.all, sty.freeBox__h8Rpg, {
                [sty.freeBoximageUrl__h8RpgNusf9]: hasVariant(
                  $state,
                  "imageUrl",
                  "imageUrl"
                )
              })}
            >
              <div
                className={classNames(projectcss.all, sty.freeBox__hZaj7, {
                  [sty.freeBoximageUrl__hZaj7Nusf9]: hasVariant(
                    $state,
                    "imageUrl",
                    "imageUrl"
                  )
                })}
              >
                <ProductMedia
                  className={classNames(
                    "__wab_instance",
                    sty.productMedia__qyC6R,
                    {
                      [sty.productMediacolor_black__qyC6RqfbRe]: hasVariant(
                        $state,
                        "color",
                        "black"
                      ),
                      [sty.productMediacolor_pink__qyC6RQiu6V]: hasVariant(
                        $state,
                        "color",
                        "pink"
                      ),
                      [sty.productMediacolor_violet__qyC6RCpzGl]: hasVariant(
                        $state,
                        "color",
                        "violet"
                      ),
                      [sty.productMediacolor_white__qyC6Rh3K0J]: hasVariant(
                        $state,
                        "color",
                        "white"
                      ),
                      [sty.productMediahidePrice__qyC6R4YdUw]: hasVariant(
                        $state,
                        "hidePrice",
                        "hidePrice"
                      ),
                      [sty.productMediahideWishlist__qyC6R0V5M8]: hasVariant(
                        $state,
                        "hideWishlist",
                        "hideWishlist"
                      ),
                      [sty.productMediaimageUrl__qyC6RNusf9]: hasVariant(
                        $state,
                        "imageUrl",
                        "imageUrl"
                      )
                    }
                  )}
                />

                <div
                  data-plasmic-name={"imageContainer"}
                  data-plasmic-override={overrides.imageContainer}
                  className={classNames(projectcss.all, sty.imageContainer, {
                    [sty.imageContainerimageUrl]: hasVariant(
                      $state,
                      "imageUrl",
                      "imageUrl"
                    )
                  })}
                />
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__hKtWj)}>
            <div className={classNames(projectcss.all, sty.freeBox___9EO1)}>
              <ProductMedia
                className={classNames(
                  "__wab_instance",
                  sty.productMedia__hc1No
                )}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__doPwv)}>
              <ProductTextField
                data-plasmic-name={"productTextField"}
                data-plasmic-override={overrides.productTextField}
                className={classNames("__wab_instance", sty.productTextField)}
                field={"name"}
              />
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__or8EN)}>
            <div className={classNames(projectcss.all, sty.freeBox__t8N9)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__k1SUy, {
                  [sty.freeBoxcolor_white__k1SUyH3K0J]: hasVariant(
                    $state,
                    "color",
                    "white"
                  ),
                  [sty.freeBoxhideWishlist__k1SUy0V5M8]: hasVariant(
                    $state,
                    "hideWishlist",
                    "hideWishlist"
                  ),
                  [sty.freeBoximageUrl__k1SUyNusf9]: hasVariant(
                    $state,
                    "imageUrl",
                    "imageUrl"
                  )
                })}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox__iosU, {
                    [sty.freeBoxhideWishlist__iosU0V5M8]: hasVariant(
                      $state,
                      "hideWishlist",
                      "hideWishlist"
                    )
                  })}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__rsBy4)}
                  >
                    {renderPlasmicSlot({
                      defaultContents: (
                        <ProductTextField
                          className={classNames(
                            "__wab_instance",
                            sty.productTextField__g9Ob4
                          )}
                          field={"name"}
                        />
                      ),

                      value: args.children2
                    })}
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox___0VoLu, {
                      [sty.freeBoxhideWishlist___0VoLu0V5M8]: hasVariant(
                        $state,
                        "hideWishlist",
                        "hideWishlist"
                      )
                    })}
                  >
                    <WishlistIcon
                      className={classNames(projectcss.all, sty.svg__cyG2S, {
                        [sty.svgcolor_white__cyG2SH3K0J]: hasVariant(
                          $state,
                          "color",
                          "white"
                        )
                      })}
                      role={"img"}
                    />
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__eL0U1)}>
                  <ProductPriceComponent
                    className={classNames(
                      "__wab_instance",
                      sty.productPrice___7Gw14,
                      {
                        [sty.productPricecolor_white___7Gw14H3K0J]: hasVariant(
                          $state,
                          "color",
                          "white"
                        ),
                        [sty.productPricehidePrice___7Gw144YdUw]: hasVariant(
                          $state,
                          "hidePrice",
                          "hidePrice"
                        )
                      }
                    )}
                  />
                </div>
              </Stack__>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__e3TA0)}>
              <ProductMedia
                className={classNames(
                  "__wab_instance",
                  sty.productMedia__zyiq7,
                  {
                    [sty.productMediacolor_black__zyiq7QfbRe]: hasVariant(
                      $state,
                      "color",
                      "black"
                    ),
                    [sty.productMediacolor_pink__zyiq7Qiu6V]: hasVariant(
                      $state,
                      "color",
                      "pink"
                    ),
                    [sty.productMediacolor_violet__zyiq7CpzGl]: hasVariant(
                      $state,
                      "color",
                      "violet"
                    ),
                    [sty.productMediacolor_white__zyiq7H3K0J]: hasVariant(
                      $state,
                      "color",
                      "white"
                    ),
                    [sty.productMediahidePrice__zyiq74YdUw]: hasVariant(
                      $state,
                      "hidePrice",
                      "hidePrice"
                    ),
                    [sty.productMediahideWishlist__zyiq70V5M8]: hasVariant(
                      $state,
                      "hideWishlist",
                      "hideWishlist"
                    ),
                    [sty.productMediaimageUrl__zyiq7Nusf9]: hasVariant(
                      $state,
                      "imageUrl",
                      "imageUrl"
                    )
                  }
                )}
              />
            </div>
          </div>
        </div>
      </ProductLink>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "productLink", "imageContainer", "productTextField"],
  productLink: ["productLink", "imageContainer", "productTextField"],
  imageContainer: ["imageContainer"],
  productTextField: ["productTextField"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  productLink: typeof ProductLink;
  imageContainer: "div";
  productTextField: typeof ProductTextField;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductCard__VariantsArgs;
    args?: PlasmicProductCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProductCard__ArgsType,
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
          internalArgPropNames: PlasmicProductCard__ArgProps,
          internalVariantPropNames: PlasmicProductCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCard";
  } else {
    func.displayName = `PlasmicProductCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCard = Object.assign(
  // Top-level PlasmicProductCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    productLink: makeNodeComponent("productLink"),
    imageContainer: makeNodeComponent("imageContainer"),
    productTextField: makeNodeComponent("productTextField"),

    // Metadata about props expected for PlasmicProductCard
    internalVariantProps: PlasmicProductCard__VariantProps,
    internalArgProps: PlasmicProductCard__ArgProps
  }
);

export default PlasmicProductCard;
/* prettier-ignore-end */
