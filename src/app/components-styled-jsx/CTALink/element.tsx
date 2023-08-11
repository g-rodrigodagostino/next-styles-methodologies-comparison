"use client";

import React, { useRef } from "react";
import classNames from "classnames";
import { kebabCase } from "lodash";

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

  const classes = classNames("cta-link", {
    [`cta-link--${kebabCase(variant)}`]: variant,
    "cta-link--small": small,
    "cta-link--wide": wide,
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
        .cta-link {
          position: relative;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          transition: all 200ms;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
        }

        .cta-link:not([class*="link-only"]):not(.cta-link--unstyled) {
          height: 3rem;
          padding: 0 1.5rem;
          border-radius: 2rem;
        }

        .cta-link[class*="link-only"] {
          white-space: initial;

          :global(span) {
            border-bottom: ${!!icon ? "none" : "1px solid currentColor"};
          }
        }

        .cta-link:hover {
          text-decoration: none;

          :global(.icon--arrow-cta),
          :global(.icon--arrow-link) {
            animation: arrow 0.4s ease-in-out forwards;
          }
        }

        .cta-link:focus {
          outline: 0;
        }

        :global(span) {
          color: inherit;
        }

        :global(.icon) {
          vertical-align: middle;
        }

        .cta-link.cta-link--unstyled {
          display: inline-block;
          border-radius: none;
          padding: 0;
          text-decoration: none;
          text-align: unset;
          cursor: pointer;
          background-color: unset;
          border: none;
          color: unset;
        }

        .cta-link--small:not([class*="link-only"]):not(.cta-link--unstyled) {
          height: 2.5rem;
        }

        .cta-link--wide {
          width: 100%;
        }

        .cta-link--slate-fill:active,
        .cta-link--blue-fill:active,
        .cta-link--paper-fill:active,
        .cta-link--slate-outline:active,
        .cta-link--blue-outline:active,
        .cta-link--paper-outline:active,
        .cta-link--slate-fill-transparent-hover:active {
          transform: translateY(4px);
        }

        .cta-link--slate-fill {
          background-color: var(--mvp-slate);
          color: var(--paper);
        }

        .cta-link--slate-fill:focus,
        .cta-link--slate-fill:hover {
          background-color: var(--neutral-800);
          color: var(--paper);
        }

        .cta-link--slate-outline {
          background-color: transparent;
          box-shadow: inset 0 0 0 2px var(--mvp-slate);
          color: var(--mvp-slate);
        }

        .cta-link--slate-outline:focus,
        .cta-link--slate-outline:hover {
          box-shadow: inset 0 0 0 3px var(--neutral-800);
          color: var(--mvp-slate);
        }

        .cta-link--slate-fill-transparent-hover {
          background-color: var(--mvp-slate);
          box-shadow: inset 0 0 0 2px var(--mvp-slate);
          color: var(--paper);
        }

        .cta-link--slate-fill-transparent-hover:focus,
        .cta-link--slate-fill-transparent-hover:hover {
          background-color: transparent;
          box-shadow: inset 0 0 0 3px #000000;
          color: var(--mvp-slate);
        }

        .cta-link--link-only-slate {
          color: var(--mvp-slate);
          padding: 0;
          border-radius: 0;
        }

        .cta-link--blue-fill {
          background-color: var(--mvp-blue);
          color: var(--paper);
        }

        .cta-link--blue-fill:focus,
        .cta-link--blue-fill:hover {
          background-color: #003db3;
          color: var(--paper);
        }

        .cta-link--blue-outline {
          background-color: transparent;
          box-shadow: inset 0 0 0 2px var(--mvp-blue);
          color: var(--mvp-blue);
        }

        .cta-link--blue-outline:focus,
        .cta-link--blue-outline:hover {
          box-shadow: inset 0 0 0 3px #003db3;
          color: #003db3;
        }

        .cta-link--link-only-blue {
          color: var(--mvp-blue);
          padding: 0;
          border-radius: 0;
        }

        .cta-link--paper-fill {
          background-color: var(--paper);
          color: var(--mvp-blue);
        }

        .cta-link--paper-fill:focus,
        .cta-link--paper-fill:hover {
          background-color: var(--mvp-stone);
        }

        .cta-link--paper-outline {
          background-color: transparent;
          box-shadow: inset 0 0 0 2px var(--paper);
          color: var(--paper);
        }

        .cta-link--paper-outline:focus,
        .cta-link--paper-outline:hover {
          background-color: transparent;
          box-shadow: inset 0 0 0 3px var(--mvp-stone);
          color: var(--mvp-stone);
        }

        .cta-link--link-only-paper {
          color: var(--paper);
          padding: 0;
          border-radius: 0;
        }

        :global(.icon--arrow-cta),
        :global(.icon--arrow-link) {
          transform: translate3d(0, 0, 0);
          animation: arrow-reverse 0.4s ease-in-out;
        }

        @keyframes arrow {
          0% {
            transform: translate3d(0, 0, 0);
          }
          40% {
            transform: translate3d(5px, 0, 0);
          }
          60% {
            transform: translate3d(3px, 0, 0);
          }
          100% {
            transform: translate3d(4px, 0, 0);
          }
        }

        @keyframes arrow-reverse {
          0% {
            transform: translate3d(4px, 0, 0);
          }
          40% {
            transform: translate3d(-1px, 0, 0);
          }
          60% {
            transform: translate3d(1px, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </>
  );
};
