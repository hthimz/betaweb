import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route } from "react-router-dom";
import Careers from './screens/Careers';      
import LandingPage from './screens/LandingPage';
import RootC from './components/TestTourn/RootC';
import RootJ from './components/TestTourn/RootJ';
import RootW from './components/TestTourn/RootW';
import Privacypolicy from './components/PrivacyPolicy/PrivacyPolicy';

import {setMessage} from './actions/message';


class App extends Component {
  
//   _onChange = (value) => {
//     this.props.dispatch(setMessage(value))
//   }
// route = () => {
//   this.setState({
//     screen: !this.state.screen
//   })
// }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/careers" component={Careers} />
            <Route path="/TPL" component={RootW} />
            <Route path="/ACL" component={RootJ} />
            <Route path="/RPL" component={RootC} />
            <Route path="/PrivacyPolicy" component={Privacypolicy}/>
          </div>
        </BrowserRouter>
        
        
      </div>
    );
  }
}

export default App;
