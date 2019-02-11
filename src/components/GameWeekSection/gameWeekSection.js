import React from 'react';
import Header from '../Header/Header';
import classNames from 'classnames';
import { hero, careerTex} from './style';
import bisleri from '../../assets/Tab2Tournament/bisleri.png';
import adidas from '../../assets/Tab2Tournament/adidas.png';
import enerzal from '../../assets/Tab2Tournament/enerzal.png';
import pepsi from '../../assets/Tab2Tournament/pepsi.png';
import SportsLine from './SportsLine/SportsLine';






export default class GameWeekSection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        currentScrollHeight: 0,
        // image: ['live_scoring.png', 'grounds.png', 'user_profile.png','phone_view.png']
        }
        }

    componentDidMount() {
        window.onscroll =()=>{
        if(window.scrollY<250) {
            this.setState({currentScrollHeight: window.scrollY});
        } else {
            const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
            if (this.state.currentScrollHeight !== newScrollHeight){
                this.setState({currentScrollHeight: newScrollHeight})
        }
        }
        }
                    }
render (){
    const opacity = Math.min(100 / this.state.currentScrollHeight, 1);
    return(
        <div>
            <div className={classNames(hero,'d-flex justify-content-between flex-column')}>
        <Header opacity={opacity}/> 
        <div className={classNames('d-flex flex-column justify-content-between')} style={{marginTop:'80px'}}>
                <div id= 'Score Section' style={{display:'flex', justifyContent:'space-around'}} >
                    <div id='Left logo' style={{backgroungColor:'#000000', width :'100px',height:'100px', color:'#FFFFFF',paddingTop:'200px'}}>Logo 1 </div>
                    <div id='Middle Section'>
                            <div style={{color:'#FFFFFF',fontFamily:'Montserrat',fontSize:'14px',fontWeight:'bold',paddingTop:'60px'}}>Gameweek 1</div>
                            <div style={{display:'flex',paddingTop:'85px',justifyContent:'space-around'}}>
                                    <div style={{color:'#FFFFFF',fontWeight:'bold',fontSize:'70px',fontFamily:'Montserrat'}}>1</div>
                                    <div style={{color:'#FFFFFF',fontWeight:'bold',fontSize:'70px',fontFamily:'Montserrat'}}>-</div>
                                    <div style={{color:'#FFFFFF',fontWeight:'bold',fontSize:'70px',fontFamily:'Montserrat'}}>1</div>
                            </div>
                            <div style={{color:'#FFFFFF',fontSize:'12px',fontSize:'12px',fontFamily:'Montserrat',paddingTop:'25px'}}>Tornado Ground, Sunday 5 Tournament</div>
                    </div>
                    <div id='end Logo' style={{backgroungColor:'#000000', width :'100px',height:'100px', color:'#FFFFFF',paddingTop:'200px'}}> Logo 2 </div>
                </div>
                
        </div>
        </div>
        
        <div style= {{backgroundColor:'#f6fbd0', width :'100%',height:'100%'}}>
                <div id="Sponsors" style={{paddingTop:'15px',paddingLeft:'97px',paddingRight:'97px'}}>
                    <div style={{ fontSize:'22px', backgroundColor:'#FFFFFF', display:'flex',flexDirection:'column'}}>
                        <div style= {{paddingTop:'10px',paddingLeft:'35px' ,display:'flex',fontWeight:'bold'}}>Sponsors</div>
                        <div>
                            <div style={{paddingLeft:'35px', paddingRight:'20px'}}>
                                <hr style={{height:'1px', backgroundColor:'#f6fbd0'}}/>
                        </div>
                                
                        <div id = "Sponsor Cards" style={{display:'flex',paddingLeft:'40px'}}>
                                <div id ="Bisleri" style={{display:'flex', flexDirection:'column', paddingTop:'20px', }}> <div><img style={{height:'50px',width:'100px'}} src={bisleri}/></div> <div style={{fontWeight:'700',fontSize:'12px',paddingTop:'15px'}}>Bisleri</div> </div>
                                <div id= "Adidas" style={{display:'flex', flexDirection:'column', paddingTop:'20px', paddingLeft:'60px'}}> <div ><img style={{height:'50px',width:'100px'}} src={adidas}/></div> <div style={{fontWeight:'700',fontSize:'12px',paddingTop:'15px'}}>Adidas</div></div>
                                <div id="Enerzal" style={{display:'flex', flexDirection:'column', paddingTop:'20px',paddingLeft:'60px' }}> <div><img style={{height:'50px',width:'100px'}} src={enerzal}/></div> <div style={{fontWeight:'700',fontSize:'12px',paddingTop:'15px'}}>Enerzal</div></div>
                                <div id= "Pepsi" style={{display:'flex', flexDirection:'column', paddingTop:'20px', paddingLeft:'60px'}}> <div><img style={{height:'50px',width:'100px'}} src={pepsi}/></div> <div style={{fontWeight:'700',fontSize:'12px',paddingTop:'15px'}}>Pepsi</div></div>
                            </div>
                        </div>
                    </div>

                </div>
        </div>


                    <div style={{paddingTop:'70px'}}>
                            < SportsLine />
                    </div>
        </div>
    );
}

}
