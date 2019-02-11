import React from 'react';
import Header from '../Header/Header';
import classNames from 'classnames';
import { hero, careerText, careerText1 } from './style';
import image from '../../assets/Tab2Tournament/image.png';
import champions from '../../assets/Tab2Tournament/champions.png';
import wifi from '../../assets/Tab2Tournament/wifi.png';
import epigamia from '../../assets/Tab2Tournament/epigamia.png';
import butternut from '../../assets/Tab2Tournament/butternut.png';
import enerzal from '../../assets/Tab2Tournament/enerzal.png';
import posh from '../../assets/Tab2Tournament/posh.png';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';





export default class RootW extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        currentScrollHeight: 0,
        data:{},
        // image: ['live_scoring.png', 'grounds.png', 'user_profile.png','phone_view.png']
        sponsor:[],
        id:145,
        }
        }


        ///data for the populating the Component
        RootsCentral = () => {
                fetch('http://52.66.194.65/api/tournament/v1/profile/?form_type=basic&tournament_id=145', {
                method: 'GET',
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer iVX5i6BYXMBFD2gCR5HHG1jtJMuHJK',
                    }
            }).then( response => { let sir= response.json();
                // console.log(sir,'Here in Points Table')
                return sir;
            }).then(body => {this.setState(
            { data:body,
                sponsor:body.sponsor,
            }
            )}).catch(err => console.log(err, 'Error aa gaya BC'));
            }
            
    UNSAFE_componentWillMount(){
        this.RootsCentral();
        // console.log('The Event Has Triggered');
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


render ()
    {   {this.state.data}
        {this.state.id=145}
        const opacity = Math.min(100 / this.state.currentScrollHeight, 1);
        return(
        <div>
            <div className={classNames(hero,'d-flex justify-content-between flex-column')}>
        <Header opacity={opacity}/> 
        <div className={classNames('d-flex flex-column justify-content-between')} style={{marginTop:'80px'}}>
                <div style={{paddingTop:'92px', display:'flex', justifyContent:'space-between', paddingLeft:'100px',width:'100%'}}>
                    <div><img style={{width:'572px'}} src={this.state.data.cover_pic}/></div>
                    <div style={{display:'flex',paddingLeft:'20px'}}>
                            <div>
                                <div style={{display:'flex'}}>
                                        <div><img src={this.state.data.logo} style={{height:'65px',width:'65px'}} /></div>
                                        <div style={{paddingTop:'7px',fontFamily:'Roboto !important',fontWeight:'bold',color:'#FFFFFF',fontSize:'32px',paddingLeft:'20px',}}>{this.state.data.name}</div>
                                </div>
                                
    <div style={{paddingTop:'30px',paddingRight:'208px',textAlign:'justify',fontFamily:'Roboto !important',color:'#FFFFFF',fontWeight:'550'}}>{this.state.data.description=="" ? <div>The Tournament is Famous through out the nation for the platform that is provides to young and budding talent.</div> : <div style={{fontFamily:'Rubik'}}>{this.state.data.description}</div>}</div>

                                <div  style={{display:'flex',paddingTop:'57px'}}>
                                        <div style={{width :'319px' ,height:'72px', backgroundColor:'#38454f',borderRadius:'40px',display:'flex'}}> <div style={{color:'#FFFFFF',fontSize:'15px',fontWeight:'bold',fontFamily:'Roboto !important',paddingTop:'22px',paddingLeft:'29px'}}>Prize </div> <div style={{color:'#FFFFFF',fontSize:'31px',fontWeight:'bold',fontFamily:'Roboto !important',paddingTop:'11px',paddingLeft:'29px'}}>Rs {this.state.data.prize}</div></div>
                                        <div style={{padding:'33px',display:'flex'}}><div><img style={{paddingLeft:'10px',paddingRight:'20px',width:'51px'}}src={wifi}/></div> <div style={{fontFamily:'Roboto !important', fontWeight:'550',fontSize:'18px',color:'#FFFFFF'}}>Registration on</div></div>
                                </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>

        <div style= {{backgroundColor:'#f3f3f3', width :'100%',height:'100%'}}>
                <div id="Sponsors" style={{paddingTop:'15px',paddingLeft:'97px',paddingRight:'97px'}}>
                    <div style={{ fontSize:'22px', backgroundColor:'#FFFFFF', display:'flex',flexDirection:'column'}}>
                        <div style= {{paddingTop:'10px',paddingLeft:'35px' ,display:'flex',fontWeight:'bold'}}>Sponsors</div>
                        <div>
                            <div style={{paddingLeft:'35px', paddingRight:'20px'}}>
                                <hr style={{height:'1px', backgroundColor:'#f3f3f3'}}/>
                        </div>

                        <div id = "Sponsor Cards" style={{display:'flex',paddingLeft:'40px'}}>

                                <div id ="Bisleri" style={{display:'flex', flexDirection:'column', paddingTop:'20px', }}> <div><img style={{height:'50px',width:'100px'}} src={epigamia}/></div> <div style={{fontWeight:'700',fontSize:'12px',paddingTop:'15px'}}>Epigamia</div> </div>
                                <div id= "Adidas" style={{display:'flex', flexDirection:'column', paddingTop:'20px', paddingLeft:'60px'}}> <div ><img style={{height:'50px',width:'100px'}} src={butternut}/></div> <div style={{fontWeight:'700',fontSize:'12px',paddingTop:'15px'}}>The Butternut Co.</div></div>
                                <div id="Enerzal" style={{display:'flex', flexDirection:'column', paddingTop:'20px',paddingLeft:'60px' }}> <div><img style={{height:'50px',width:'100px'}} src={enerzal}/></div> <div style={{fontWeight:'700',fontSize:'12px',paddingTop:'15px'}}>Enerzal</div></div>
                                <div id= "Pepsi" style={{display:'flex', flexDirection:'column', paddingTop:'20px', paddingLeft:'60px'}}> <div><img style={{height:'50px',width:'100px'}} src={posh}/></div> <div style={{fontWeight:'700',fontSize:'12px',paddingTop:'15px'}}>Poshn</div></div>        
                        </div>
                        </div>
                    </div>

                    
                    <Navbar  baba={this.state.id} sponsor={this.state.data}/>
                </div>
        </div>


                    <div style={{paddingTop:'20px'}}>
                    <Footer />
                    </div>
        </div>
    );
}

}
