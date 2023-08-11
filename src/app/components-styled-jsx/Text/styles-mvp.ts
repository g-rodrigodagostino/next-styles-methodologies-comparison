import css from 'styled-jsx/css'
import { mq, fontTTNormsPro, vcHoney } from '../../utils'
import { MVPTextSizes } from './index'

const lh90 = '90%'
const lh100 = '100%'
const lh104 = '104%'
const lh114 = '114%'
const lh115 = '115%'
const lh110 = '110%'
const lh120 = '120%'
const lh127 = '127%'
const lh130 = '130%'
const lh132 = '132%'
const lh140 = '140%'
const lh150 = '150%'
const lh160 = '160%'
const lh165 = '165%'

export default function getMVPStyles(size: MVPTextSizes): JSX.Element {
  switch (size) {
    case 'heading-1--mega':
      return css`
        span,
        div {
          font-family: ${vcHoney};
          font-size: 46px;
          font-weight: 400;
          line-height: ${lh110};
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 100px;
            line-height: ${lh90};
          }
        }
      `
    case 'heading-1':
      return css`
        span,
        div {
          font-family: ${vcHoney};
          font-size: 46px;
          font-weight: 400;
          line-height: ${lh110};
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 76px;
            line-height: ${lh100};
          }
        }
      `
    case 'heading-1--small':
      return css`
        span,
        div {
          font-family: ${vcHoney};
          font-size: 46px;
          font-weight: 400;
          line-height: ${lh110};
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 60px;
            line-height: ${lh104};
          }
        }
      `
    case 'heading-2':
      return css`
        span,
        div {
          font-family: ${vcHoney};
          font-size: 38px;
          font-weight: 400;
          line-height: ${lh120};
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 48px;
            line-height: ${lh110};
          }
        }
      `
    case 'heading-3':
      return css`
        span,
        div {
          font-family: ${vcHoney};
          font-size: 30px;
          font-weight: 400;
          line-height: ${lh132};
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 42px;
            line-height: ${lh115};
          }
        }
      `
    case 'heading-4':
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 21px;
          font-weight: 700;
          line-height: ${lh140};
          letter-spacing: 0.3px;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 24px;
            line-height: ${lh114};
          }
        }
      `
    case 'heading-5':
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 20px;
          font-weight: 700;
          line-height: ${lh120};
          letter-spacing: 0.3px;
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
          font-family: ${fontTTNormsPro};
          font-size: 18px;
          font-weight: 700;
          line-height: ${lh132};
          letter-spacing: 0.3px;
        }
      `
    case 'subhead-lg':
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 22px;
          line-height: ${lh160};
          letter-spacing: 0.4px;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 24px;
            line-height: ${lh150};
          }
        }
      `
    case 'subhead-sm':
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 18px;
          line-height: ${lh150};
          letter-spacing: 0.4px;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 20px;
          }
        }
      `
    case 'body':
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 16px;
          line-height: ${lh165};
          letter-spacing: 0.5px;
        }
      `
    case 'body-bold':
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 16px;
          font-weight: 700;
          line-height: ${lh165};
          letter-spacing: 0.3px;
        }
      `
    case 'button-bold':
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 15px;
          font-weight: 700;
          line-height: ${lh127};
        }
      `
    case 'caption':
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 12px;
          font-weight: 500;
          line-height: ${lh160};
          letter-spacing: 0.6px;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 14px;
            letter-spacing: 0.2px;
          }
        }
      `
    case 'caption-bold':
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 12px;
          font-weight: 700;
          line-height: ${lh160};
          letter-spacing: 0.6px;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 14px;
            letter-spacing: 0.2px;
          }
        }
      `
    case 'eyebrow':
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 12px;
          font-weight: 700;
          line-height: ${lh130};
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 14px;
            line-height: ${lh100};
          }
        }
      `
    default:
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 16px;
          line-height: ${lh165};
        }
      `
  }
}
