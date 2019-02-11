import React from 'react'
import Card from './Card' ;

import python from '../../assets/careers_python.png';
import android from '../../assets/careers_android.png';
import ios from '../../assets/ios.png';
import marketing from '../../assets/marketing.png';
import react from '../../assets/react.png';
import ui from '../../assets/ui.png';
class CareersCard extends React.PureComponent { 
    
response= {
    "data":[{
            "Image" :python,
            "Text" :"Backend Developer(Python)",
            "Link" : 'https://docs.google.com/forms/d/1xe31vei05f76snE6otmeRKfYKy_Sfn8qWkKGzexudyY',
            },{
            "Image" :react,
            "Text" :"React/React Native",
            "Link":"https://docs.google.com/forms/d/1DGhISd8cpvn3jg3vMsBiZy5nwUJgt5sZICXXXhkR0TE"
            },
            {
            "Image" :ios,
            "Text" :"iOS Developer",
            "Link":"https://docs.google.com/forms/d/19OYp7SWy81CD3dMm63B4aHkQ23Y__K5WH32676lhVbo"
            },
            {
            "Image" :marketing,
            "Text" :"Digital Marketing",
            "Link":"https://docs.google.com/forms/d/1uEa3dvNUYntjQ54dUOmvypI_rciCWGDYFGp0CYc3bcw"
            },{
            "Image" :android,
            "Text" :"Android Developer",
            "Link":"https://docs.google.com/forms/d/1IL9AIBiseIJqGWNE_kUahozdmZiqqXwCF0bxtrCyOQ4"
            },
            {
                "Image" :ui,
                "Text" :"UI/UX Developer",
                "Link":"https://goo.gl/forms/C4WcQM4tEAc6sl0s2"
                }
        ]
}
//Function Injects Array object into the Injector function to populate 3x3 Table.
imageInjector = () => {
    let table = [];
    let n=4;
    // Outer loop to create Main Row
    for (let i = 0; i < (n+2)/3; i++) {
        let children = []
        //Inner loop to create cParent For Loop
        for (let j = 0; j < 3 && this.response.data[3*i+j]!==undefined; j++) {
          children.push(<td style={{margin:'50px'}}><Card Image={this.response.data[3*i+j].Image} Text={this.response.data[3*i+j].Text} Link={this.response.data[3*i+j].Link} /></td>)
        }
        //Create the Children Loop
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