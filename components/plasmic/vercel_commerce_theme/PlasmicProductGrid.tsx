// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6UtUvTtmyc5qzrzJqnbLQ9
// Component: fQ7ecTGO-ydE

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_color_tokens/plasmic.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6UtUvTtmyc5qzrzJqnbLQ9/projectcss
import sty from "./PlasmicProductGrid.module.css"; // plasmic-import: fQ7ecTGO-ydE/css

createPlasmicElementProxy;

export type PlasmicProductGrid__VariantMembers = {
  layout: "b";
};
export type PlasmicProductGrid__VariantsArgs = {
  layout?: SingleChoiceArg<"b">;
};
type VariantPropType = keyof PlasmicProductGrid__VariantsArgs;
export const PlasmicProductGrid__VariantProps = new Array<VariantPropType>(
  "layout"
);

export type PlasmicProductGrid__ArgsType = {
  product0?: React.ReactNode;
  product1?: React.ReactNode;
  product2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicProductGrid__ArgsType;
export const PlasmicProductGrid__ArgProps = new Array<ArgPropType>(
  "product0",
  "product1",
  "product2"
);

export type PlasmicProductGrid__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultProductGridProps {
  product0?: React.ReactNode;
  product1?: React.ReactNode;
  product2?: React.ReactNode;
  layout?: SingleChoiceArg<"b">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProductGrid__RenderFunc(props: {
  variants: PlasmicProductGrid__VariantsArgs;
  args: PlasmicProductGrid__ArgsType;
  overrides: PlasmicProductGrid__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "layout",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.layout
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
        { [sty.rootlayout_b]: hasVariant($state, "layout", "b") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox___2MyM8, {
          [sty.freeBoxlayout_b___2MyM8WlnyG]: hasVariant($state, "layout", "b")
        })}
      >
        {renderPlasmicSlot({
          defaultContents: null,
          value: args.product0
        })}
      </div>
      <div
        className={classNames(projectcss.all, sty.freeBox__wWlnN, {
          [sty.freeBoxlayout_b__wWlnNwlnyG]: hasVariant($state, "layout", "b")
        })}
      >
        {renderPlasmicSlot({
          defaultContents: null,
          value: args.product1
        })}
      </div>
      <div
        className={classNames(projectcss.all, sty.freeBox__yvgOl, {
          [sty.freeBoxlayout_b__yvgOLwlnyG]: hasVariant($state, "layout", "b")
        })}
      >
        {renderPlasmicSlot({
          defaultContents: null,
          value: args.product2
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductGrid__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductGrid__VariantsArgs;
    args?: PlasmicProductGrid__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductGrid__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProductGrid__ArgsType,
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
          internalArgPropNames: PlasmicProductGrid__ArgProps,
          internalVariantPropNames: PlasmicProductGrid__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductGrid__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductGrid";
  } else {
    func.displayName = `PlasmicProductGrid.${nodeName}`;
  }
  return func;
}

export const PlasmicProductGrid = Object.assign(
  // Top-level PlasmicProductGrid renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicProductGrid
    internalVariantProps: PlasmicProductGrid__VariantProps,
    internalArgProps: PlasmicProductGrid__ArgProps
  }
);

export default PlasmicProductGrid;
/* prettier-ignore-end */
