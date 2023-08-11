import { MVPTextSizes } from "../Text";

export { CTALink } from "./element";

export interface ICTAData {
  text: string;
  url: string;
  newWindow?: boolean;
  eventContext?: string;
  eventObjectName?: string;
  openMessenger?: boolean;
  preloadedMessengerText?: string;
  forwardQueryParams?: boolean;
  surveyId?: number;
  customBotId?: number;
  botRulesetId?: number;
}

export interface IProps extends ICTAData {
  variant?: string;
  small?: boolean;
  dataAttribute?: string;
  wide?: boolean;
  textSize?: MVPTextSizes;
  anchorRef?: React.RefObject<HTMLAnchorElement>;
  icon?: "Arrow" | "Play";
  onClick?: () => void;
  context?: string;
}
