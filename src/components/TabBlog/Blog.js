import React from 'react';
import Slider from "react-slick";


export default class Blog extends React.Component{
    render()
        {
        const settings = 
        {
        autoplay:true,
        autoplaySpeed:3000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        };
        return(
            <div style ={{backgroundColor:'#000000', margin:'0px !important',padding:'0px'}}>
            <div>
            <div style ={{color: '#FFFFFF', display:'flex',fontFamily:'Rubik !important',fontWeight:'bold',fontSize:'25px'}}> goplaybook Blogs</div>
            <div style={{color:'#FFFFFF',display:'flex',fontFamily:'Rubik !important',fontSize:'18px'}}>Follow all the interesting sports buzz Local or International, on goplaybook</div>
            </div>
                    <Slider {...settings}>
                    <div>
                        <div></div>
                        <div>sdfghj</div>                   
                    </div>
                    
                    <div>
                        <h3>2</h3>
                    </div>
                    
                    <div>
                        <h3>3</h3>
                    </div>
                    
                    <div>
                        <h3>4</h3>
                    </div>
                    
                    <div>
                        <h3>5</h3>
                    </div>
                    
                    <div>
                        <h3>6</h3>
                    </div>
                    </Slider>
                
            </div>
        );

        }
    };