import { css } from 'react-emotion'
// import hero from ''
import heroImage from '../../assets/career_banner.png';

export const hero = css`
    background-image: url(${heroImage});
    height: 570px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

export const doubleQuotes = css`
    width: 13.5px;
    height: 35.5px;
    font-family: Rubik;
    font-size: 70px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
`

export const text = css`
    height: 60px;
    display: flex;
    align-items: center;
    font-family: Rubik;
    font-size: 32px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
`

export const careerText = css`
    width: 360px;
    height: 190px;
    font-family: Rubik;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
`

export const careerText1 = css`
    font-size: 56px;
`

export const careerText2 = css`
    font-size: 35px;
`

export const careerText3 = css`
    font-size: 68px;
`
