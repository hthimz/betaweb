import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../components/Banner/Banner';
import TournamentTab from '../components/TournamentTab/TournamentTab';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import About from '../components/About/About';
import Videos from '../components/Videos/Videos';
import Blogs from '../components/Blogs/Blogs';
import Footer from '../components/Footer/Footer';
import CardExampleCard from '../components/TabTournamentCard/Card';
import Blog from '../components/TabBlog/Blog';
import Tab2Tournament from '../components/TabTournament2/Tab2Tournament';
import GameWeekSection from '../components/GameWeekSection/gameWeekSection';
import RootC from '../components/TestTourn/RootC';



// import CardExampleCard from '../components/TabTournamentCard/Card';
class LandingPage extends React.Component {



  nextPath = path => {
    this.props.history.push(path);
    // this.props.route();
  }

  tourPath = path => {
    this.props.history.push(path);
    // this.props.route();
  }

//   RootsCentral = () => {
//     fetch('http://52.66.194.65/api/tournament/v1/profile/?form_type=basic&tournament_id=143', {
//       method: 'GET',
//       headers:
//       {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer iVX5i6BYXMBFD2gCR5HHG1jtJMuHJK',
//         }
//   }).then( response => { let sir= response.json();
//     console.log(sir,'Trying Hard')
//     return sir;
//   }).then(body => {{this.setState({
//       data:body
//   })}console.log(body,'Body aa gaya bhai')}).catch(err => console.log(err, 'Error aa gaya BC'));
//   }
  
// componentDidMount(){
// this.RootsCentral();
// console.log('The Event Has Triggered')
// }
  

//Making API call for Tournament and Saving the data in the tournament 
  render() {
    return (
      <div>
        
          <Banner />
          <TournamentTab />
          <Videos />
          {/* <Blog`s /> */}
          {/* <button id= 'waste' onClick={this.RootsCentral}>Press This Boys</button> */}
          <CarouselComponent />
          <About />
          <div style={{padding:'30px'}}></div>
          {/* <Footer /> */}
          <Footer navigate={path=>this.nextPath(path)} />
          {/* <CardExampleCard />
          <Blog /> */}
          {/* <Tab2Tournament /> */}
          {/* <GameWeekSection /> */}
      </div>
    );
  }
}

export default LandingPage;
