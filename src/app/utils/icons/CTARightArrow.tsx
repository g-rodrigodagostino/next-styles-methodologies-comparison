import React from 'react'
import { IIcon } from 'marketing-site/src/library/utils/icons/Icon.interface'
import { IconTestIds } from 'marketing-site/src/library/utils/icons/iconTestIds'

export const CTARightArrow = ({ classes }: IIcon): React.ReactElement => (
  <svg
    data-testid={IconTestIds.Arrow}
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="14"
    fill="none"
    viewBox="0 0 16 14"
  >
    <path
      fill="currentColor"
      d="M8.693 1.707A1 1 0 0 1 10.107.293L8.693 1.707ZM15 6.6l.707-.707a1 1 0 0 1 0 1.414L15 6.6Zm-4.893 6.307a1 1 0 0 1-1.414-1.414l1.414 1.414Zm0-12.614 5.6 5.6-1.414 1.414-5.6-5.6L10.107.293Zm5.6 7.014-5.6 5.6-1.414-1.414 5.6-5.6 1.414 1.414Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 6.6H1"
    />
  </svg>
)
