import React from 'react'
import { footer, btn } from './style';
import { BrowserRouter as Link ,NavLink} from "react-router-dom";
import Mailto from 'react-mailto.js';
export default class Footer extends React.PureComponent {

    render() {
        console.log(this.props,'kuch toh aaara hai');
        return (
    <div>
        <div className={footer}>
            <button className={btn} onClick={()=>this.props.navigate('/careers')}>Careers</button>
            {/* <Link to = '/careers'><button className={btn}>Careers</button> </Link> */}
            <Mailto 
                        secure={true}
                        to={['hello@goplaybook.com', ]}
                        cc={['avijeetsg@goplaybook.com']}
                        subject="Query From Website"
                        body={[
                            "Greetings goplaybook Team",
                        ].join('\n')}
                        onClick={(e) => {console.log(e)}}
            ><button className={btn}>Contact Us</button></Mailto>
            <NavLink to="/#about" >  <button className={btn}>About Us</button> </NavLink>
            {/* <button className={btn}>Register Ground</button>
            <button className={btn}>Host a Tournament</button> */}
        </div>
        <div style={{display:'flex',justifyContent :'center', backgroundColor:'#000000', color:'white', fontSize:'13px', padding:'5px', fontFamily:'Rubik'}}>
            copyright 2018 goplaybook Pvt Ltd
        </div>
        <div></div>
    </div>     
    );
    }
}
