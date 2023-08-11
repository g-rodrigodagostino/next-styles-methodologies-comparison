import css from 'styled-jsx/css'
import { mq, fontTTNormsPro } from '../../utils'
import { DefaultSizeOptions } from './index'

const lh100 = '100%'
const lh104 = '104%'
const lh110 = '110%'
const lh118 = '118%'
const lh120 = '120%'
const lh130 = '130%'
const lh132 = '132%'
const lh140 = '140%'
const lh144 = '144%'
const lh160 = '160%'
const lh165 = '165%'

export default function getDefaultStyles(size: DefaultSizeOptions): JSX.Element {
  switch (size) {
    case 'heading-1-mega':
      return css`
        span,
        div {
          font-size: 44px;
          font-weight: bold;
          font-family: ${fontTTNormsPro};
          line-height: ${lh110};
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 110px;
            line-height: ${lh100};
          }
        }
      `

    case 'heading-1-default':
      return css`
        span,
        div {
          font-size: 44px;
          font-weight: bold;
          font-family: ${fontTTNormsPro};
          line-height: ${lh110};
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 72px;
            line-height: ${lh100};
          }
        }
      `
    case 'heading-1-small':
      return css`
        span,
        div {
          font-size: 44px;
          font-weight: bold;
          font-family: ${fontTTNormsPro};
          line-height: ${lh110};
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 58px;
            line-height: ${lh104};
            letter-spacing: 0.005em;
          }
        }
      `
    case 'heading-2':
      return css`
        span,
        div {
          font-size: 36px;
          font-family: ${fontTTNormsPro};
          font-weight: bold;
          line-height: ${lh120};
          letter-spacing: 0.2px;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 58px;
            line-height: ${lh110};
            letter-spacing: 0.005em;
          }
        }
      `
    case 'heading-3':
      return css`
        span,
        div {
          font-size: 28px;
          font-family: ${fontTTNormsPro};
          font-weight: bold;
          line-height: ${lh132};
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 38px;
            line-height: ${lh118};
          }
        }
      `
    case 'heading-4':
      return css`
        span,
        div {
          font-size: 21px;
          font-family: ${fontTTNormsPro};
          font-weight: normal;
          line-height: ${lh140};
          letter-spacing: 0.4px;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 28px;
            line-height: ${lh144};
            letter-spacing: 0.6px;
          }
        }
      `
    case 'heading-4-bold':
      return css`
        span,
        div {
          font-size: 21px;
          font-family: ${fontTTNormsPro};
          font-weight: bold;
          line-height: ${lh140};
          letter-spacing: 0.4px;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 28px;
            line-height: ${lh144};
            letter-spacing: 0.6px;
          }
        }
      `
    case 'heading-5':
      return css`
        span,
        div {
          font-size: 20px;
          font-family: ${fontTTNormsPro};
          font-weight: bold;
          line-height: ${lh132};
          letter-spacing: 0.1px;
        }
        @media (${mq.tablet}) {
          span,
          div {
            letter-spacing: 0.2px;
          }
        }
      `
    case 'heading-6':
      return css`
        span,
        div {
          font-size: 18px;
          font-family: ${fontTTNormsPro};
          line-height: ${lh132};
          font-weight: bold;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-weight: 800;
            letter-spacing: 0.01em;
          }
        }
      `
    case 'body-bold':
      return css`
        span,
        div {
          font-size: 15px;
          font-family: ${fontTTNormsPro};
          font-weight: bold;
          line-height: ${lh160};
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 16px;
            letter-spacing: 0.01em;
          }
        }
      `
    case 'body':
      return css`
        span,
        div {
          font-size: 16px;
          font-family: ${fontTTNormsPro};
          line-height: ${lh165};
          letter-spacing: 0.0235em;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 16px;
            letter-spacing: 0.0275em;
          }
        }
      `
    case 'button-bold':
      return css`
        span,
        div {
          font-size: 15px;
          font-family: ${fontTTNormsPro};
          font-weight: bold;
          line-height: ${lh130};
        }
      `
    case 'caption-bold':
      return css`
        span,
        div {
          font-size: 12px;
          font-family: ${fontTTNormsPro};
          line-height: ${lh165};
          font-weight: bold;
          letter-spacing: 0.01em;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 14px;
          }
        }
      `
    case 'caption':
      return css`
        span,
        div {
          font-size: 12px;
          font-family: ${fontTTNormsPro};
          font-weight: normal;
          line-height: ${lh165};
          letter-spacing: 0.055em;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 14px;
          }
        }
      `
    case 'eyebrows':
      return css`
        span,
        div {
          font-size: 11px;
          font-family: ${fontTTNormsPro};
          line-height: ${lh130};
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 1.25px;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 14px;
            letter-spacing: 1px;
          }
        }
      `

    case 'suffix':
      return css`
        span,
        div {
          font-size: 38.95px;
          font-family: ${fontTTNormsPro};
          line-height: ${lh130};
          text-transform: uppercase;
          font-weight: bold;
          font-style: italic;
          letter-spacing: 38.95px;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 56px;
            letter-spacing: 1px;
          }
        }
      `
    default:
      return css`
        span,
        div {
          font-size: 16px;
          font-family: ${fontTTNormsPro};
          line-height: ${lh100};
        }
      `
  }
}
