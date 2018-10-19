import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import classNames from 'classnames';
import { center, card ,image, outer, content, header, fix, boxShadow , gradient,horizontal, cardContent,banner,b1,b2,b3} from './styles'
// import { NewsHeaderCard } from 'react-ui-cards';

import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';

import bgTournament from '../../assets/bgTournament.png';
export default class CardExampleCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    return (
      // <div>
      //   <button onClick={this._handleClick.bind(this)}>Random Tournament</button>
      //   <Coverflow
      //     width={960}
      //     height={350}
      //     displayQuantityOfSide={2}
      //     navigation={true}
      //     enableHeading={false}
      //     active={this.state.active}
      //   
      //     <div
      //       // onClick={() => fn()}
      //       // onKeyDown={() => fn()}
      //       role="menuitem"
      //       tabIndex="0"
      //       this is my product tso dont mess with it bruh.
      //
      //     >
      //     </div>
      //     <img src='https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg' alt='Album one' />
      //                                  
      //     <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album two' data-action="http://passer.cc"/>
      //     <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album three' data-action="https://doce.cc/"/>
      //     <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album four' data-action="http://tw.yahoo.com"/>
      //     <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album five' data-action="http://www.bbc.co.uk"/>
      //     <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album six' data-action="https://medium.com"/>
      //     <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album seven' data-action="http://www.google.com"/>
      //     <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album one' data-action="https://facebook.github.io/react/"/>
      //     <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album two' data-action="http://passer.cc"/>
      //     <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album three' data-action="https://doce.cc/"/>
      //     <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album four' data-action="http://tw.yahoo.com"/>
      //   </Coverflow>
      // </div>
      
      <div>
        <div className={banner} style={{display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',justifyContent:'start !important',color:'#FFFFFF'}}>
          Tournaments Happening Around You
        </div>
        <div>
        <div className={horizontal}>
        
        <div className={b1} style={{display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',paddingTop:'120px',paddingLeft:'30px',fontFamily:'Roboto !important',fontSize:'25px',fontWeight:'bold !important',color:'#FFFFFF'}}>Something To be Achieved</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>Football</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>New Delhi</div>
        </div>
        
        <div className={b2}>
        <div style={{display:'flex',paddingTop:'120px',paddingLeft:'30px',fontFamily:'Roboto !important',fontSize:'25px',fontWeight:'bold !important',color:'#FFFFFF'}}>Something To be Achieved</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>Football</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>New Delhi</div>
        </div>
        
        <div className={b3}>
        <div style={{display:'flex',paddingTop:'120px',paddingLeft:'30px',fontFamily:'Roboto !important',fontSize:'25px',fontWeight:'bold !important',color:'#FFFFFF'}}>Something To be Achieved</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>Football</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>New Delhi</div>
        </div>
        
        <div className={b1}>
        <div style={{display:'flex',paddingTop:'120px',paddingLeft:'30px',fontFamily:'Roboto !important',fontSize:'25px',fontWeight:'bold !important',color:'#FFFFFF'}}>Something To be Achieved</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>Football</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>New Delhi</div>
        </div>
        
        <div className={b2}>
        <div style={{display:'flex',paddingTop:'120px',paddingLeft:'30px',fontFamily:'Roboto !important',fontSize:'25px',fontWeight:'bold !important',color:'#FFFFFF'}}>Something To be Achieved</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>Football</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>New Delhi</div>
        </div>
        
        <div className={b3}>
        <div style={{display:'flex',paddingTop:'120px',paddingLeft:'30px',fontFamily:'Roboto !important',fontSize:'25px',fontWeight:'bold !important',color:'#FFFFFF'}}>Something To be Achieved</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>Football</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>New Delhi</div>
        </div>

        
        <div className={b1}>
        <div style={{display:'flex',paddingTop:'120px',paddingLeft:'30px',fontFamily:'Roboto !important',fontSize:'25px',fontWeight:'bold !important',color:'#FFFFFF'}}>Something To be Achieved</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>Football</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>New Delhi</div>
        </div>
        
        <div className={b2}>
        <div style={{display:'flex',paddingTop:'120px',paddingLeft:'30px',fontFamily:'Roboto !important',fontSize:'25px',fontWeight:'bold !important',color:'#FFFFFF'}}>Something To be Achieved</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>Football</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>New Delhi</div>
        </div>
        
        <div className={b3}>
        <div style={{display:'flex',paddingTop:'120px',paddingLeft:'30px',fontFamily:'Roboto !important',fontSize:'25px',fontWeight:'bold !important',color:'#FFFFFF'}}>Something To be Achieved</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>Football</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>New Delhi</div>
        </div>
        
        <div className={b1}>
        <div style={{display:'flex',paddingTop:'120px',paddingLeft:'30px',fontFamily:'Roboto !important',fontSize:'25px',fontWeight:'bold !important',color:'#FFFFFF'}}>Something To be Achieved</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>Football</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>New Delhi</div>
        </div>
        
        <div className={b2}>
        <div style={{display:'flex',paddingTop:'120px',paddingLeft:'30px',fontFamily:'Roboto !important',fontSize:'25px',fontWeight:'bold !important',color:'#FFFFFF'}}>Something To be Achieved</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>Football</div>
        <div style={{display:'flex',paddingLeft:'30px',fontFamily:'Roboto !important',color:'#FFFFFF'}}>New Delhi</div>
        </div>

          </div>
        </div>
        
      </div>

      </div>
      
     
    );
  }

  // _handleClick() {
  //   var num = Math.floor((Math.random() * 10) + 1);
  //   this.setState({
  //     active: num
  //   });
  // }
};

// ReactDOM.render(
//   <Container></Container>,
//   document.querySelector('.example_4')
// );