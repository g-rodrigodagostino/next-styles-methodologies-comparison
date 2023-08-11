export type MVPColorIdTokenType =
  | 'slate'
  | 'black'
  | 'white'
  | 'neutral800'
  | 'neutral700'
  | 'neutral600'
  | 'neutral500'
  | 'neutral400'
  | 'neutral300'
  | 'neutral200'
  | 'neutral100'
  | 'stone'
  | 'paper'
  | 'blue'
  | 'aqua'
  | 'sky100'
  | 'sky'
  | 'marigold500'
  | 'marigold200'
  | 'sand'
  | 'clay600'
  | 'clay400'
  | 'coral'
  | 'deepTeal'
  | 'lightTeal'
  | 'aqua800'
  | 'aqua100'
  | 'transparent'

export type MVPColorTokenType = {
  [key in MVPColorIdTokenType]: IMVPColorTokenProps
}

export interface IMVPColorTokenProps {
  label: string
  hex: string | null
  rgba: IMVPColorTokenRGBAProps
  CSSCustomProperty: IMVPColorTokenCSSCustomProperty
}

export interface IMVPColorTokenRGBAProps {
  r: string
  g: string
  b: string
  a: string
}

export type IMVPColorTokenCSSCustomProperty =
  | 'var(--mvp-slate)'
  | 'var(--fin-black)'
  | 'var(--fin-white)'
  | 'var(--neutral-800)'
  | 'var(--neutral-700)'
  | 'var(--neutral-600)'
  | 'var(--neutral-500)'
  | 'var(--neutral-400)'
  | 'var(--neutral-300)'
  | 'var(--neutral-200)'
  | 'var(--neutral-100)'
  | 'var(--mvp-stone)'
  | 'var(--paper)'
  | 'var(--mvp-blue)'
  | 'var(--mvp-aqua)'
  | 'var(--mvp-sky-100)'
  | 'var(--mvp-sky)'
  | 'var(--marigold-500)'
  | 'var(--marigold-200)'
  | 'var(--sand)'
  | 'var(--clay-600)'
  | 'var(--clay-400)'
  | 'var(--mvp-coral)'
  | 'var(--deep-teal)'
  | 'var(--light-teal)'
  | 'var(--aqua-800)'
  | 'var(--aqua-100)'
  | 'var(--transparent)'

export const MVP_COLOR_TOKENS: MVPColorTokenType = {
  slate: {
    label: 'Slate',
    hex: '#041527 ',
    rgba: {
      r: '4',
      g: '21',
      b: '39',
      a: '1',
    },
    CSSCustomProperty: 'var(--mvp-slate)',
  },
  black: {
    label: 'Black',
    hex: '#000000 ',
    rgba: {
      r: '0',
      g: '0',
      b: '0',
      a: '1',
    },
    CSSCustomProperty: 'var(--fin-black)',
  },
  white: {
    label: 'White',
    hex: '#ffffff ',
    rgba: {
      r: '255',
      g: '255',
      b: '255',
      a: '1',
    },
    CSSCustomProperty: 'var(--fin-white)',
  },
  neutral800: {
    label: 'Neutral-800',
    hex: '#223140',
    rgba: {
      r: '34',
      g: '49',
      b: '64',
      a: '1',
    },
    CSSCustomProperty: 'var(--neutral-800)',
  },
  neutral700: {
    label: 'Neutral-700',
    hex: '#3f4c5a',
    rgba: {
      r: '63',
      g: '76',
      b: '90',
      a: '1',
    },
    CSSCustomProperty: 'var(--neutral-700)',
  },
  neutral600: {
    label: 'Neutral-600',
    hex: '#5d6773',
    rgba: {
      r: '93',
      g: '103',
      b: '115',
      a: '1',
    },
    CSSCustomProperty: 'var(--neutral-600)',
  },
  neutral500: {
    label: 'Neutral-500',
    hex: '#7a838c',
    rgba: {
      r: '122',
      g: '131',
      b: '140',
      a: '1',
    },
    CSSCustomProperty: 'var(--neutral-500)',
  },
  neutral400: {
    label: 'Neutral-400',
    hex: '#989fa5',
    rgba: {
      r: '152',
      g: '159',
      b: '165',
      a: '1',
    },
    CSSCustomProperty: 'var(--neutral-400)',
  },
  neutral300: {
    label: 'Neutral-300',
    hex: '#b6babe',
    rgba: {
      r: '182',
      g: '186',
      b: '190',
      a: '1',
    },
    CSSCustomProperty: 'var(--neutral-300)',
  },
  neutral200: {
    label: 'Neutral-200',
    hex: '#d3d5d8',
    rgba: {
      r: '211',
      g: '213',
      b: '216',
      a: '1',
    },
    CSSCustomProperty: 'var(--neutral-200)',
  },
  neutral100: {
    label: 'Neutral-100',
    hex: '#f1f1f1',
    rgba: {
      r: '241',
      g: '241',
      b: '241',
      a: '1',
    },
    CSSCustomProperty: 'var(--neutral-100)',
  },
  stone: {
    label: 'Stone',
    hex: '#f1f1f1',
    rgba: {
      r: '241',
      g: '241',
      b: '241',
      a: '1',
    },
    CSSCustomProperty: 'var(--mvp-stone)',
  },
  paper: {
    label: 'Paper',
    hex: '#ffffff',
    rgba: {
      r: '255',
      g: '255',
      b: '255',
      a: '1',
    },
    CSSCustomProperty: 'var(--paper)',
  },
  blue: {
    label: 'Blue',
    hex: '#0057ff',
    rgba: {
      r: '0',
      g: '87',
      b: '255',
      a: '1',
    },
    CSSCustomProperty: 'var(--mvp-blue)',
  },
  aqua: {
    label: 'Aqua',
    hex: '#00B4D8',
    rgba: {
      r: '0',
      g: '180',
      b: '216',
      a: '1',
    },
    CSSCustomProperty: 'var(--mvp-aqua)',
  },
  sky100: {
    label: 'Sky-100',
    hex: '#e1effe',
    rgba: {
      r: '225',
      g: '239',
      b: '254',
      a: '1',
    },
    CSSCustomProperty: 'var(--mvp-sky-100)',
  },
  sky: {
    label: 'Sky',
    hex: '#c4e0fd',
    rgba: {
      r: '196',
      g: '224',
      b: '253',
      a: '1',
    },
    CSSCustomProperty: 'var(--mvp-sky)',
  },
  marigold500: {
    label: 'Marigold-500',
    hex: '#f3b521',
    rgba: {
      r: '252',
      g: '101',
      b: '99',
      a: '1',
    },
    CSSCustomProperty: 'var(--marigold-500)',
  },
  marigold200: {
    label: 'Marigold-200',
    hex: '#ffe3b2',
    rgba: {
      r: '255',
      g: '227',
      b: '178',
      a: '1',
    },
    CSSCustomProperty: 'var(--marigold-200)',
  },
  sand: {
    label: 'Sand',
    hex: '#ffe3b2',
    rgba: {
      r: '255',
      g: '227',
      b: '178',
      a: '1',
    },
    CSSCustomProperty: 'var(--sand)',
  },
  clay600: {
    label: 'Clay-600',
    hex: '#ce5a21',
    rgba: {
      r: '206',
      g: '90',
      b: '33',
      a: '1',
    },
    CSSCustomProperty: 'var(--clay-600)',
  },
  clay400: {
    label: 'Clay-400',
    hex: '#ec9069',
    rgba: {
      r: '236',
      g: '144',
      b: '105',
      a: '1',
    },
    CSSCustomProperty: 'var(--clay-400)',
  },
  coral: {
    label: 'Coral',
    hex: '#ec9069',
    rgba: {
      r: '236',
      g: '144',
      b: '105',
      a: '1',
    },
    CSSCustomProperty: 'var(--mvp-coral)',
  },
  deepTeal: {
    label: 'Deep Teal',
    hex: '#093e48',
    rgba: {
      r: '9',
      g: '62',
      b: '72',
      a: '1',
    },
    CSSCustomProperty: 'var(--deep-teal)',
  },
  aqua800: {
    label: 'Aqua-800',
    hex: '#093e48',
    rgba: {
      r: '9',
      g: '62',
      b: '72',
      a: '1',
    },
    CSSCustomProperty: 'var(--aqua-800)',
  },
  lightTeal: {
    label: 'Light Teal',
    hex: '#caf0f8',
    rgba: {
      r: '204',
      g: '240',
      b: '248',
      a: '1',
    },
    CSSCustomProperty: 'var(--light-teal)',
  },
  aqua100: {
    label: 'Aqua-100',
    hex: '#caf0f8',
    rgba: {
      r: '204',
      g: '240',
      b: '248',
      a: '1',
    },
    CSSCustomProperty: 'var(--aqua-100)',
  },
  transparent: {
    label: 'Transparent',
    hex: '#ffffff00',
    rgba: {
      r: '255',
      g: '255',
      b: '255',
      a: '0',
    },
    CSSCustomProperty: 'var(--transparent)',
  },
}
