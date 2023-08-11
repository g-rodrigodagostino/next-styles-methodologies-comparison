import React from "react";
import {
  IProps,
  IBrand,
  DefaultSizeOptions,
  MVPTextSizes,
  RBTextSizes,
  FinTextSizes,
} from "./index";
import getDefaultStyles from "./styles";
import getMVPStyles from "./styles-mvp";
import getRBStyles from "./styles-rb";
import getFinStyles from "./styles-fin";

export const Text = React.memo(
  ({ size, children, brand = "mvp" }: IProps): React.ReactElement => {
    const stylesToUse = getBrandedStyles(brand, size);

    if (brand === "mvp") {
      return <span className={`text-size-${size}`}>{children}</span>;
    }

    if (brand === "rb") {
      return (
        <span className={`rb-exploration-text-size-${size}`}>
          {children}
          <style jsx>{stylesToUse}</style>
        </span>
      );
    }

    if (brand === "fin") {
      return (
        <span className={`fin-theme-text-size-${size}`}>
          {children}
          <style jsx>{stylesToUse}</style>
        </span>
      );
    }

    return (
      <span>
        {children}
        <style jsx>{stylesToUse}</style>
      </span>
    );
  }
);

Text.displayName = "Text";

export const BlockText = ({
  size,
  children,
  brand = "mvp",
}: IProps): React.ReactElement => {
  const stylesToUse = getBrandedStyles(brand, size);

  if (brand === "mvp") {
    return <span className={`text-size-${size}`}>{children}</span>;
  }

  if (brand === "rb") {
    return (
      <span className={`rb-exploration-text-size-${size}`}>
        {children}
        <style jsx>{stylesToUse}</style>
      </span>
    );
  }

  if (brand === "fin") {
    return (
      <span className={`fin-theme-text-size-${size}`}>
        {children}
        <style jsx>{stylesToUse}</style>
      </span>
    );
  }

  return (
    <div>
      {children}
      <style jsx>{stylesToUse}</style>
    </div>
  );
};

function getBrandedStyles(
  brand: IBrand,
  size: DefaultSizeOptions | MVPTextSizes | RBTextSizes | FinTextSizes
) {
  if (brand === "default") {
    const defaultSize: DefaultSizeOptions = size as DefaultSizeOptions;
    return getDefaultStyles(defaultSize);
  } else if (brand === "rb") {
    const rbSize: RBTextSizes = size as RBTextSizes;
    return getRBStyles(rbSize);
  } else if (brand === "fin") {
    const finSize: FinTextSizes = size as FinTextSizes;
    return getFinStyles(finSize);
  }

  const mvpSize: MVPTextSizes = size as MVPTextSizes;
  return getMVPStyles(mvpSize);
}
