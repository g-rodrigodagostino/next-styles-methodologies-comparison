/* eslint-disable no-console */
import { MVPColor as Color } from "./colors";

// -- Theme Definitions --
// Types that define specific color-sets, used to type a component's `theme` or `bgColor` prop

/* Standard set of light background color themes */
export type LightThemeColor =
  | Color.Aqua100
  | Color.Clay400
  | Color.LightTeal
  | Color.MVPAqua
  | Color.Marigold200
  | Color.Paper;

export type AllColors =
  | Color.MVPSlate
  | Color.MVPBlue
  | Color.Aqua100
  | Color.Paper
  | Color.Sand
  | Color.MVPAqua
  | Color.MVPCoral
  | Color.MVPSky
  | Color.Marigold200
  | Color.DeepTeal
  | Color.LightTeal
  | Color.Clay400
  | Color.Clay600
  | Color.MVPStone;

/* Special set of background color themes for use with attention-grabbing elements */
export type SpecialThemeColor = Color;

/* Expanded set of all background color themes */
export type ExpandedThemeColor = LightThemeColor | SpecialThemeColor;

export enum CTATheme {
  SlateFill = "SlateFill",
  SlateOutline = "SlateOutline",
  SlateFillTransparentHover = "SlateFillTransparentHover",
  LinkOnlySlate = "LinkOnlySlate",
  PaperFill = "PaperFill",
  PaperOutline = "PaperOutline",
  LinkOnlyPaper = "LinkOnlyPaper",
  BlueFill = "BlueFill",
  BlueOutline = "BlueOutline",
  LinkOnlyBlue = "LinkOnlyBlue",
}

// -- Structured Theme Information Getters --

/*
  Structure of theme information returned by the main `getColorTheme` utility
  This shared structure should be limited to just the most commonly shared properties.
  Components that want additional custom fields should extend this interface locally.
 */
export interface IButtonTheme {
  backgroundColor: string;
  textColor: string;
  ctaTheme: CTATheme;
}

export interface ILinkTheme {
  backgroundColor: string;
  textColor: string;
  ctaTheme: CTATheme;
}
