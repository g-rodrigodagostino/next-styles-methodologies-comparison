import React from 'react'
import { IIcon } from 'marketing-site/src/library/utils/icons/Icon.interface'
import { IconTestIds } from 'marketing-site/src/library/utils/icons/iconTestIds'

export const LinkRightArrow = ({ classes }: IIcon): React.ReactElement => (
  <svg
    data-testid={IconTestIds.Arrow}
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="12"
    fill="none"
    viewBox="0 0 14 12"
  >
    <path
      fill="currentColor"
      d="M7.404 1.707A1 1 0 1 1 8.82.293L7.404 1.707Zm5.446 4.031.707-.707a1 1 0 0 1 0 1.415l-.707-.708Zm-4.031 5.446A1 1 0 1 1 7.404 9.77l1.415 1.414Zm0-10.891 4.738 4.738-1.414 1.415-4.739-4.739L8.82.293Zm4.738 6.153L8.82 11.184 7.404 9.77l4.739-4.739 1.414 1.415Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12.85 5.739H1.004"
    />
  </svg>
)
