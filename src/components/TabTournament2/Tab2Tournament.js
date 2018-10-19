import React from 'react';
import Header from '../Header/Header';
import classNames from 'classnames';
import { hero, careerText, careerText1 } from './style';
import image from '../../assets/Tab2Tournament/image.png';
import champions from '../../assets/Tab2Tournament/champions.png';
import wifi from '../../assets/Tab2Tournament/wifi.png';
import bisleri from '../../assets/Tab2Tournament/bisleri.png';
import adidas from '../../assets/Tab2Tournament/adidas.png';
import enerzal from '../../assets/Tab2Tournament/enerzal.png';
import pepsi from '../../assets/Tab2Tournament/pepsi.png';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';




export default class Tab2Tournament extends React.Component{
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
                <div style={{paddingTop:'92px', display:'flex', justifyContent:'space-between', paddingLeft:'100px',width:'100%'}}>
                    <div><img style={{width:'572px'}} src={image}/></div>
                    <div style={{display:'flex',paddingLeft:'20px'}}>
                            <div>
                                <div style={{display:'flex'}}>
                                        <div><img src={champions} style={{height:'65px',width:'65px'}} /></div>
                                        <div style={{paddingTop:'7px',fontFamily:'Roboto !important',fontWeight:'bold',color:'#FFFFFF',fontSize:'32px',paddingLeft:'20px',}}>Goplaybook Champions Cup</div>
                                </div>
                                
                                <div style={{paddingTop:'30px',paddingRight:'208px',textAlign:'justify',fontFamily:'Roboto !important',color:'#FFFFFF',fontWeight:'550'}}>A knockout cup for chelsea enthusiasts to showcase their footballing talent. Cup will have a lot of fun and girls and ofcourse football</div>

                                <div  style={{display:'flex',paddingTop:'57px'}}>
                                        <div style={{width :'319px' ,height:'72px', backgroundColor:'#38454f',borderRadius:'40px',display:'flex'}}> <div style={{color:'#FFFFFF',fontSize:'15px',fontWeight:'bold',fontFamily:'Roboto !important',paddingTop:'22px',paddingLeft:'29px'}}>Prize </div> <div style={{color:'#FFFFFF',fontSize:'31px',fontWeight:'bold',fontFamily:'Roboto !important',paddingTop:'11px',paddingLeft:'29px'}}>Rs 1,00,000</div></div>
                                        <div style={{padding:'33px',display:'flex'}}><div><img style={{paddingLeft:'10px',paddingRight:'20px',width:'51px'}}src={wifi}/></div> <div style={{fontFamily:'Roboto !important', fontWeight:'550',fontSize:'18px',color:'#FFFFFF'}}>Registration on</div></div>
                                </div>
                        </div>
                    </div>
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


                    <Navbar />
                </div>
        </div>


                    <div style={{paddingTop:'70px'}}>

                    </div>
        </div>
    );
}

}
