export { Text, BlockText } from './element'

export type SizeOptions =
  | 'heading+'
  | 'heading'
  | 'xxl+'
  | 'xxl'
  | 'xl+'
  | 'xl'
  | 'lg+'
  | 'lg'
  | 'md+'
  | 'md'
  | 'caption+'
  | 'caption'
  | 'body+'
  | 'body'
  | 'lg-eyebrow'
  | 'md-eyebrow'
  | 'xxl++'
  | 'lg-percentage'
  | 'headline'

export const DefaultSizeOptions = [
  'heading-1-mega',
  'heading-1-default',
  'heading-1-small',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-4-bold',
  'heading-5',
  'heading-6',
  'body-bold',
  'body',
  'button-bold',
  'caption-bold',
  'caption',
  'eyebrows',
  'suffix',
] as const

export const MVPTextSizes = [
  'heading-1--mega',
  'heading-1',
  'heading-1--small',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-5',
  'heading-6',
  'subhead-lg',
  'subhead-sm',
  'body-bold',
  'body',
  'button-bold',
  'caption-bold',
  'caption',
  'eyebrow',
] as const

export const MVPTitleSizes = [
  'heading-1--mega',
  'heading-1',
  'heading-1--small',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-5',
  'heading-6',
] as const

export const RBTextSizes = [
  'heading-1--mega',
  'heading-1',
  'heading-1--small',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-5',
  'heading-6',
  'subhead-lg',
  'subhead-lg-plus',
  'subhead-sm',
  'body-bold',
  'body',
  'button-bold',
  'caption-bold',
  'caption',
  'eyebrow',
] as const

export const FinTextSizes = [
  'heading-1-condensed',
  'heading-2-condensed',
  'heading-1',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-5',
  'heading-6',
  'quote',
  'subhead-lg',
  'subhead-sm',
  'body',
  'body-bold',
  'button-lg',
  'button',
  'badge',
] as const

export const BrandOptions = {
  default: 'default' as const,
  mvp: 'mvp' as const,
  legacy: 'legacy' as const,
  rb: 'rb' as const,
  fin: 'fin' as const,
}

export type DefaultSizeOptions = typeof DefaultSizeOptions[number]

export type MVPTextSizes = typeof MVPTextSizes[number]

export type RBTextSizes = typeof RBTextSizes[number]

export type FinTextSizes = typeof FinTextSizes[number]

export type IBrand = keyof typeof BrandOptions

export interface IProps {
  size: DefaultSizeOptions | MVPTextSizes | RBTextSizes | FinTextSizes
  children: React.ReactNode
  brand?: 'default' | 'mvp' | 'legacy' | 'rb' | 'fin'
}
