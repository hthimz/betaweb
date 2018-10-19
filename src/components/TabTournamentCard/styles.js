import { css } from 'react-emotion'
import bgTournament from '../../assets/bgTournament.png';
import tournamentBannerImage1 from '../../assets/tournamentBannerImage1.png';
import tournamentBannerImage2 from '../../assets/tournamentBannerImage2.png';
import tournamentBannerImage3 from '../../assets/tounramentBannerImage3.png';

export const center = css`
    display: flex;
    justify-content: center;
    padding-top : 5px;
    font-family: Roboto;
    font-size: 14px;
    // font-weight: bold;
    color: #38454f;
    margin-top: 10px;
`
export const fix = css`
    display: flex;
    justify-content: center;
    padding-top : 5px;
`
export const card = css`
border-radius: 16px;
width: 270px;
height: 300px;
backgroundColor: white;
`
export const image = css`
height: 140px;
width: 140px !important;
border-radius: 75px !important;
padding-top : 12px !important;
`
export const outer = css`
display: flex;
padding-top: 20px;
justify-content: center;
`
export const content = css`
padding-left: 10px;
padding-bottom: 5px;
justify-content: center;
`

export const header = css`
font-family: 'Helvetica Neue';
font-stretch: condensed;
font-size: 16px;
color: #38454f;
font-weight: bold;
display: flex;
justify-content: center;
padding-top: 15px;
`

export const boxShadow = css`
-webkit-box-shadow: -2px 5px 20px -5px rgba(0,0,0,0.2);
-moz-box-shadow: -2px 5px 20px -5px rgba(0,0,0,0.2);
box-shadow: -2px 5px 20px -5px rgba(0,0,0,0.2);
`

export const horizontal = css`

min-width: 100%;
min-height: 200px;
overflow-x: auto;
display: flex ;
`

export const cardContent = css`
width: 400px;
margin: 5px;
`

export const b1 = css`
background-image: url(${tournamentBannerImage1});
width: 400px;
margin: 5px;
`


export const b2 = css`
background-image: url(${tournamentBannerImage2});
width: 400px;
margin: 5px;
`


export const b3 = css`
background-image: url(${tournamentBannerImage3});
width: 400px;
margin: 5px;
`

export const gradient = css`
height: 100px;
background-image: linear-gradient(0deg, black, white);

`


export const banner = css `
position: absolute;
min-width: 100% ;
height: 400px ;
background-image: url(${bgTournament});
margin:0;
display: flex;
justify-content: center ;
align-items: center ;
`