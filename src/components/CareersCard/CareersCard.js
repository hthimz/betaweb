import React from 'react'
import Card from './Card' ;

import python from '../../assets/careers_python.png';
import android from '../../assets/careers_android.png';
import ios from '../../assets/ios.png';
import marketing from '../../assets/marketing.png';
import react from '../../assets/react.png';
class CareersCard extends React.PureComponent { 
    
response= {
    "data":[{
            "Image" :python,
            "Text" :"Backend Developer(Python)",
            "Link" : 'https://docs.google.com/forms/d/1mWO5HvI2MWWaH-v0dVEBqv4yM1RfGlryRwp76Y7h0RY',
            },{
            "Image" :android,
            "Text" :"Android Developer",
            "Link":"https://docs.google.com/forms/d/1aPgfreOchWLeX1oN_Wb2vPhmdsWAw26VgluA9Wwk3y0",
            },
            {
            "Image" :ios,
            "Text" :"iOS Developer",
            "Link":"https://docs.google.com/forms/d/1bcHjrfx_RkR-S5W9CVkvbjG5UrduKMS_bfszl9RwMnQ"
            },
            {
            "Image" :marketing,
            "Text" :"Digital Marketing",
            "Link":"https://docs.google.com/forms/d/1aPgfreOchWLeX1oN_Wb2vPhmdsWAw26VgluA9Wwk3y0"
            },{
            "Image" :react,
            "Text" :"React/React Native Developer",
            "Link":"https://docs.google.com/forms/d/1mDA2QrZuX3x_fZPGyVkTlzlRgFLu1L6cpZB3Kxvc_iQ"
            }
        ]
}

imageInjector = () => {
    let table = [];
    let n=4;
    // Outer loop to create parent
    for (let i = 0; i < (n+2)/3; i++) {
        let children = []
        //Inner loop to create children
        for (let j = 0; j < 3 && this.response.data[3*i+j]!==undefined; j++) {
          children.push(<td style={{margin:'50px'}}><Card Image={this.response.data[3*i+j].Image} Text={this.response.data[3*i+j].Text} Link={this.response.data[3*i+j].Link} /></td>)
        }
        //Create the parent and add the children
        table.push(<tr style={{display:'flex', justifyContent: 'start',width:'80%',height :'350px'}}>{children}</tr>)
      }
      return table;
}

    render() {
    return (
    <div>
        <div className={'d-flex flex-column align-items-center'}>
            {this.imageInjector()}
        </div>
    </div>
    );
    }
}

export default CareersCard;