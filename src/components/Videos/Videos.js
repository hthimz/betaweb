import React from "react";
import Slider from "react-slick";
import  {video} from './style';
// import { thinLeft, thinRight } from 'react-icons-kit/entypo'
import VideoCarousel from '../VideoCarousel/VideoCarousel';
import YouTube from 'react-youtube';

export default class Videos extends React.PureComponent {

  render() {
      const opts={
        height: '300',
        width: '590',
        autoplay:'0',
        playerVars:{'rel' :0}
      }
        
    return (
      <div style={{ backgroundColor: '#ffffff', opacity:1, paddingBottom:'40px'}}>
        <div className ={video}>
          goplaybook gallery
        </div>
      <div className={'d-flex justify-content-center mt-4'} style={{backgroundColor:'#fff', width:'1400px',marginLeft:'20px',borderRadius:'10px'}}>

          <div className={'m-3'} style={{display:'flex',overflow:'auto',paddingTop:'15px', width: '1185px', whiteSpace:'nowrap',}}>
          
              <div id="FirstBox" style={{paddingLeft:'30px',paddingRight:'40px',borderRadius:'10px'}}>
                <YouTube 
                    videoId="OpPHyKqAVxw" style={{borderRadius:'20px'}}
                    opts={opts}
                />
              </div>
              <div style={{paddingRight:'40px'}}>
                <YouTube 
                    videoId="tzCtm-_yLY0"
                    opts={opts}
                    
                />
              </div>
              <div style={{paddingRight:'40px'}}>
                <YouTube 
                    videoId="6k-6Wi-HW5k"
                    opts={opts}
                />
              </div>
              <div style={{paddingRight:'40px'}}>
                <YouTube  
                    videoId="bevRX0J-D8M"
                    opts={opts}
                />
              </div>
              <div style={{paddingRight:'40px'}}>
                <YouTube 
                    videoId="X6I17ZB2k70"
                    opts={opts}
                />
              </div>

          </div>

      </div>
      </div>
    );
  }
}