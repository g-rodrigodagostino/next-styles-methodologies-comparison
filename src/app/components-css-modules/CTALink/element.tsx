"use client";

import React, { useRef } from "react";
import classNames from "classnames";
import { kebabCase } from "lodash";

import styles from "./styles.module.scss";
import { IProps } from "./index";
import { Text } from "../Text";

export const CTALink: React.FC<IProps> = ({
  url,
  text,
  textSize,
  variant = "blue-fill",
  newWindow = false,
  small,
  wide,
  icon,
}) => {
  // We get a ref as a prop in certain cases. If we don't, let's create our own ref here.
  const ref = useRef<HTMLAnchorElement>(null);

  const classes = classNames(styles["cta-link"], {
    [styles[`cta-link--${kebabCase(variant)}`]]: variant,
    [styles["cta-link--small"]]: small,
    [styles["cta-link--wide"]]: wide,
  });

  return (
    <>
      <a
        ref={ref}
        className={classes}
        data-testid={`cta-link-${kebabCase(text)}`}
        href={url}
        target={newWindow ? "_blank" : ""}
        rel={newWindow ? "noopener noreferrer" : ""}
      >
        <Text size={textSize || "button-bold"}>{text}</Text>
      </a>

      <style jsx>{`
        .cta-link[class*="link-only"] :global(span) {
          border-bottom: ${!!icon ? "none" : "1px solid currentColor"};
        }
      `}</style>
    </>
  );
};
