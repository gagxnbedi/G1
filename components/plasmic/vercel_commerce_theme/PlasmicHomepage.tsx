// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6UtUvTtmyc5qzrzJqnbLQ9
// Component: bfj_dU0qTk05

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
import ProductCard from "../../ProductCard"; // plasmic-import: OfJNqrWvM11W/component
import { ProductTextField } from "@plasmicpkgs/commerce";
import Hero from "../../Hero"; // plasmic-import: c3dhthTJGkL9/component
import Footer from "../../Footer"; // plasmic-import: 5zOhaPj4y2EJ/component

import { useScreenVariants as useScreenVariantsxbhWJpWz8Bqa } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: XbhWJpWZ8BQA/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_color_tokens/plasmic.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6UtUvTtmyc5qzrzJqnbLQ9/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: bfj_dU0qTk05/css

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  section?: Flex__<"section">;
  marquee?: Flex__<"div">;
  hero?: Flex__<"div">;
  marquee2?: Flex__<"div">;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsxbhWJpWz8Bqa()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHomepage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage.pageMetadata.title}
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

          <div className={classNames(projectcss.all, sty.freeBox__ydbq2)}>
            <div className={classNames(projectcss.all, sty.freeBox__blpyj)}>
              <ProductBox
                className={classNames("__wab_instance", sty.productBox__qKkJ)}
                id={"conf-shirt"}
              >
                <DataCtxReader__>
                  {$ctx => (
                    <ProductCard
                      className={classNames(
                        "__wab_instance",
                        sty.productCard___7Dlum
                      )}
                      color={"violet"}
                    />
                  )}
                </DataCtxReader__>
              </ProductBox>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__xcp7T)}>
              <ProductBox
                className={classNames("__wab_instance", sty.productBox___337Xn)}
                id={"quarter-zip"}
              >
                <DataCtxReader__>
                  {$ctx => (
                    <ProductCard
                      className={classNames(
                        "__wab_instance",
                        sty.productCard__jOyHb
                      )}
                      color={"white"}
                    />
                  )}
                </DataCtxReader__>
              </ProductBox>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__scKtr)}>
              <ProductBox
                className={classNames("__wab_instance", sty.productBox__vTvjm)}
                id={"sticker"}
              >
                <DataCtxReader__>
                  {$ctx => (
                    <ProductCard
                      className={classNames(
                        "__wab_instance",
                        sty.productCard__rs4Yq
                      )}
                      color={"pink"}
                    />
                  )}
                </DataCtxReader__>
              </ProductBox>
            </div>
          </div>
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <div
              data-plasmic-name={"marquee"}
              data-plasmic-override={overrides.marquee}
              className={classNames(projectcss.all, sty.marquee)}
            >
              <div
                className={classNames(projectcss.all, sty.freeBox__nbAtm)}
                test={"test"}
              >
                <ProductBox
                  className={classNames(
                    "__wab_instance",
                    sty.productBox__cCc5C
                  )}
                  id={"gid://shopify/Product/5447322697892"}
                >
                  <DataCtxReader__>
                    {$ctx => (
                      <ProductCard
                        className={classNames(
                          "__wab_instance",
                          sty.productCard__krjc
                        )}
                      />
                    )}
                  </DataCtxReader__>
                </ProductBox>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__eK6Sc)}>
                <ProductBox
                  className={classNames(
                    "__wab_instance",
                    sty.productBox__nrPlu
                  )}
                  id={"gid://shopify/Product/5447323156644"}
                >
                  <DataCtxReader__>
                    {$ctx => (
                      <ProductCard
                        className={classNames(
                          "__wab_instance",
                          sty.productCard__bwBfz
                        )}
                      />
                    )}
                  </DataCtxReader__>
                </ProductBox>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__oe0A)}>
                <ProductBox
                  className={classNames(
                    "__wab_instance",
                    sty.productBox__j2Brs
                  )}
                  id={"gid://shopify/Product/5447323812004"}
                >
                  <DataCtxReader__>
                    {$ctx => (
                      <ProductCard
                        className={classNames(
                          "__wab_instance",
                          sty.productCard__ditqL
                        )}
                      />
                    )}
                  </DataCtxReader__>
                </ProductBox>
              </div>
            </div>
            <div
              data-plasmic-name={"hero"}
              data-plasmic-override={overrides.hero}
              className={classNames(projectcss.all, sty.hero)}
            >
              <Hero className={classNames("__wab_instance", sty.hero__hWbOf)} />
            </div>
          </section>
          <div className={classNames(projectcss.all, sty.freeBox__zj270)}>
            <div className={classNames(projectcss.all, sty.freeBox__kF3H9)}>
              <ProductBox
                className={classNames("__wab_instance", sty.productBox__hkhb6)}
                id={"conf-shirt"}
              >
                <DataCtxReader__>
                  {$ctx => (
                    <ProductCard
                      className={classNames(
                        "__wab_instance",
                        sty.productCard__h3FtS
                      )}
                      color={"violet"}
                    />
                  )}
                </DataCtxReader__>
              </ProductBox>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___0FOlP)}>
              <ProductBox
                className={classNames("__wab_instance", sty.productBox___9O5Gu)}
                id={"quarter-zip"}
              >
                <DataCtxReader__>
                  {$ctx => (
                    <ProductCard
                      className={classNames(
                        "__wab_instance",
                        sty.productCard__vtO5V
                      )}
                      color={"white"}
                    />
                  )}
                </DataCtxReader__>
              </ProductBox>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__e0Zym)}>
              <ProductBox
                className={classNames("__wab_instance", sty.productBox__prGj8)}
                id={"sticker"}
              >
                <DataCtxReader__>
                  {$ctx => (
                    <ProductCard
                      className={classNames(
                        "__wab_instance",
                        sty.productCard__mSj8M
                      )}
                      color={"pink"}
                    />
                  )}
                </DataCtxReader__>
              </ProductBox>
            </div>
          </div>
          <div
            data-plasmic-name={"marquee2"}
            data-plasmic-override={overrides.marquee2}
            className={classNames(projectcss.all, sty.marquee2)}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox___25NeA)}
              test={"test"}
            >
              <ProductBox
                className={classNames("__wab_instance", sty.productBox__xwyvY)}
                id={"gid://shopify/Product/5447324270756"}
              >
                <DataCtxReader__>
                  {$ctx => (
                    <ProductCard
                      className={classNames(
                        "__wab_instance",
                        sty.productCard__rTmeH
                      )}
                      color={"black"}
                    />
                  )}
                </DataCtxReader__>
              </ProductBox>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___0R2Sa)}>
              <ProductBox
                className={classNames("__wab_instance", sty.productBox__w2Wzm)}
                id={"gid://shopify/Product/5447324729508"}
              >
                <DataCtxReader__>
                  {$ctx => (
                    <ProductCard
                      className={classNames(
                        "__wab_instance",
                        sty.productCard__iVeRs
                      )}
                      color={"black"}
                    />
                  )}
                </DataCtxReader__>
              </ProductBox>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__hSkef)}>
              <ProductBox
                className={classNames("__wab_instance", sty.productBox__ndOut)}
                id={"gid://shopify/Product/5447325024420"}
              >
                <DataCtxReader__>
                  {$ctx => (
                    <ProductCard
                      className={classNames(
                        "__wab_instance",
                        sty.productCard__zr7Qe
                      )}
                      color={"black"}
                    />
                  )}
                </DataCtxReader__>
              </ProductBox>
            </div>
          </div>
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
  root: ["root", "navbar", "section", "marquee", "hero", "marquee2", "footer"],
  navbar: ["navbar"],
  section: ["section", "marquee", "hero"],
  marquee: ["marquee"],
  hero: ["hero"],
  marquee2: ["marquee2"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  section: "section";
  marquee: "div";
  hero: "div";
  marquee2: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    section: makeNodeComponent("section"),
    marquee: makeNodeComponent("marquee"),
    hero: makeNodeComponent("hero"),
    marquee2: makeNodeComponent("marquee2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Home - Plasmic Commerce",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
