import css from 'styled-jsx/css'
import { mq, fontTTNormsPro, fontVCNudge, fontVCNudgeNormal } from '../../utils'
import { FinTextSizes } from './index'

const lh100 = '100%'
const lh102 = '102%'
const lh104 = '104%'
const lh106 = '106%'
const lh108 = '108%'
const lh110 = '110%'
const lh112 = '112%'
const lh116 = '116%'
const lh118 = '118%'
const lh120 = '120%'
const lh125 = '125%'
const lh140 = '140%'
const lh150 = '150%'
const lh155 = '155%'

export default function getFinStyles(size: FinTextSizes): JSX.Element {
  switch (size) {
    case 'heading-1-condensed':
      return css`
        span,
        div {
          font-family: ${fontVCNudge};
          font-size: 58px;
          font-weight: 800;
          line-height: ${lh110};
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 80px;
            line-height: ${lh108};
          }
        }
        @media (${mq.desktop}) {
          span,
          div {
            font-size: 104px;
            line-height: ${lh104};
            letter-spacing: 3px;
          }
        }
        @media (${mq.desktopMid}) {
          span,
          div {
            font-size: 134px;
            line-height: ${lh102};
          }
        }
      `
    case 'heading-2-condensed':
      return css`
        span,
        div {
          font-family: ${fontVCNudge};
          font-size: 46px;
          font-weight: 800;
          line-height: ${lh110};
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 66px;
            line-height: ${lh108};
          }
        }
        @media (${mq.desktop}) {
          span,
          div {
            font-size: 90px;
            line-height: ${lh104};
            letter-spacing: 3px;
          }
        }
        @media (${mq.desktopMid}) {
          span,
          div {
            font-size: 120px;
            line-height: ${lh102};
          }
        }
      `
    case 'heading-1':
      return css`
        span,
        div {
          font-family: ${fontVCNudgeNormal};
          font-size: 46px;
          font-weight: bold;
          line-height: ${lh118};
          letter-spacing: 1px;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 72px;
            line-height: ${lh112};
          }
        }
        @media (${mq.desktop}) {
          span,
          div {
            font-size: 92px;
            line-height: ${lh110};
            letter-spacing: 0.5px;
          }
        }
        @media (${mq.desktopMid}) {
          span,
          div {
            font-size: 110px;
          }
        }
      `
    case 'heading-2':
      return css`
        span,
        div {
          font-family: ${fontVCNudgeNormal};
          font-size: 40px;
          font-weight: bold;
          line-height: ${lh118};
          letter-spacing: 1px;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 60px;
            line-height: ${lh108};
          }
        }
        @media (${mq.desktop}) {
          span,
          div {
            font-size: 80px;
            line-height: ${lh106};
          }
        }
        @media (${mq.desktopMid}) {
          span,
          div {
            font-size: 94px;
          }
        }
      `
    case 'heading-3':
      return css`
        span,
        div {
          font-family: ${fontVCNudgeNormal};
          font-size: 32px;
          font-weight: 600;
          line-height: ${lh116};
          letter-spacing: 0.5px;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 40px;
            letter-spacing: 1px;
          }
        }
        @media (${mq.desktopMid}) {
          span,
          div {
            font-size: 46px;
            line-height: ${lh108};
          }
        }
      `
    case 'heading-4':
      return css`
        span,
        div {
          font-family: ${fontVCNudgeNormal};
          font-size: 24px;
          font-weight: 600;
          line-height: ${lh120};
          letter-spacing: 0.5px;
        }
        @media (${mq.desktopMid}) {
          span,
          div {
            font-size: 28px;
            line-height: ${lh120};
            letter-spacing: 1px;
          }
        }
      `
    case 'heading-5':
      return css`
        span,
        div {
          font-family: ${fontVCNudgeNormal};
          font-size: 20px;
          font-weight: 600;
          line-height: ${lh125};
          letter-spacing: 1px;
        }
        @media (${mq.desktopMid}) {
          span,
          div {
            font-size: 22px;
          }
        }
      `
    case 'heading-6':
      return css`
        span,
        div {
          font-family: ${fontVCNudgeNormal};
          font-size: 18px;
          font-weight: 600;
          line-height: ${lh125};
          letter-spacing: 1px;
        }
        @media (${mq.desktopMid}) {
          span,
          div {
            font-size: 20px;
          }
        }
      `
    case 'quote':
      return css`
        span,
        div {
          font-family: ${fontVCNudgeNormal};
          font-size: 28px;
          font-weight: 500;
          line-height: ${lh140};
          letter-spacing: 1px;
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 36px;
            line-height: ${lh150};
          }
        }
        @media (${mq.desktopMid}) {
          span,
          div {
            font-size: 40px;
            line-height: ${lh155};
          }
        }
      `
    case 'subhead-lg':
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 24px;
          font-weight: 500;
          line-height: ${lh150};
          letter-spacing: 0;
        }

        :global(div.rich-text p) {
          line-height: ${lh150};
        }
        @media (${mq.tablet}) {
          span,
          div {
            font-size: 28px;
            line-height: ${lh150};
          }
        }
        @media (${mq.desktopMid}) {
          span,
          div {
            font-size: 32px;
            line-height: ${lh140};
          }
          :global(span div.rich-text p) {
            line-height: ${lh140};
          }
        }
      `
    case 'subhead-sm':
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 20px;
          font-weight: 500;
          line-height: ${lh150};
          letter-spacing: 0;
        }
        :global(div.rich-text p) {
          line-height: ${lh150};
        }

        @media (${mq.tablet}) {
          span,
          div {
            font-size: 22px;
          }
        }
        @media (${mq.desktopMid}) {
          span,
          div {
            font-size: 24px;
            line-height: ${lh140};
          }
          :global(span div.rich-text p) {
            line-height: ${lh140};
          }
        }
      `
    case 'body':
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 18px;
          font-weight: 500;
          line-height: ${lh150};
          letter-spacing: 0;
        }
        :global(div.rich-text p) {
          line-height: ${lh150};
        }
        @media (${mq.desktopMid}) {
          span,
          div {
            font-size: 20px;
          }
        }
      `
    case 'body-bold':
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 18px;
          font-weight: bold;
          line-height: ${lh150};
          letter-spacing: 0.5px;
        }
        :global(div.rich-text p) {
          line-height: ${lh150};
        }
        @media (${mq.desktopMid}) {
          span,
          div {
            font-size: 20px;
          }
        }
      `
    case 'button-lg':
      return css`
        span,
        div {
          font-family: ${fontVCNudgeNormal};
          font-size: 20px;
          font-weight: 600;
          line-height: ${lh100};
          letter-spacing: 0.5px;
        }
      `
    case 'button':
      return css`
        span,
        div {
          font-family: ${fontVCNudgeNormal};
          font-size: 18px;
          font-weight: 600;
          line-height: ${lh100};
          letter-spacing: 0.5px;
        }
      `

    case 'badge':
      return css`
        span,
        div {
          font-family: ${fontVCNudgeNormal};
          font-size: 16px;
          font-weight: 600;
          line-height: ${lh150};
          letter-spacing: 0.5px;
        }
      `
    default:
      return css`
        span,
        div {
          font-family: ${fontTTNormsPro};
          font-size: 18px;
          line-height: ${lh150};
          letter-spacing: 0.5px;
        }
        @media (${mq.desktopMid}) {
          span,
          div {
            font-size: 20px;
          }
        }
      `
  }
}
