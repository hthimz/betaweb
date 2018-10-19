import React from 'react';
import bisleri from '../../assets/Tab2Tournament/bisleri.png';
import adidas from '../../assets/Tab2Tournament/adidas.png';
import enerzal from '../../assets/Tab2Tournament/enerzal.png';
import pepsi from '../../assets/Tab2Tournament/pepsi.png';




export default class Sponsor extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:'#ffffff',width:'75%',paddingLeft:'160px',paddingRight:'160px',height:'100%'}}>
                <div style={{fontFamily:'Roboto',fontWeight:'bold',fontSize:'20px',color:'#00000'}}>
                Sponsors
                </div>
                <hr></hr>
                <div> 
                    <div><div><img src={bisleri} /></div>Bisleri</div>
                    <div><div><img src={adidas} /></div>Adidas</div>
                    <div><div><img src={enerzal} /></div>Enerzal</div>
                    <div><div><img src={pepsi} /></div>Pepsi</div>
                    <div><div><img src={enerzal} /></div>The Other Brand</div>
                </div>
            </div>
        );
    }
};