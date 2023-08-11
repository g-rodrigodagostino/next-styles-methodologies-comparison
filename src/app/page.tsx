import styles from "./page.module.css";
import { CTALink as CTALinkCSSM } from "./components-css-modules/CTALink";
import { CTALink as CTALinkSJSX } from "./components-styled-jsx/CTALink";

export default function Home() {
  return (
    <main className={styles.main}>
      <CTALinkCSSM variant="blue-fill" text="Click me!" url="#dummy" />
      <CTALinkSJSX variant="blue-fill" text="Click me!" url="#dummy" />
    </main>
  );
}
