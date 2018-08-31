import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import classNames from 'classnames';
import { center, card ,image, outer, content, header, fix, boxShadow} from './styles'
// import { NewsHeaderCard } from 'react-ui-cards';

import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';

export default class CardExampleCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    return (
      <div>
        <button onClick={this._handleClick.bind(this)}>Random Tournament</button>
        <Coverflow
          width={960}
          height={350}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
        >
          <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
            <img src='https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg' alt='Album one' />
          </div>
          <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album two' data-action="http://passer.cc"/>
          <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album three' data-action="https://doce.cc/"/>
          <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album four' data-action="http://tw.yahoo.com"/>
          <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album five' data-action="http://www.bbc.co.uk"/>
          <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album six' data-action="https://medium.com"/>
          <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album seven' data-action="http://www.google.com"/>
          <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album one' data-action="https://facebook.github.io/react/"/>
          <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album two' data-action="http://passer.cc"/>
          <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album three' data-action="https://doce.cc/"/>
          <img src='http://e1.365dm.com/18/07/16-9/20/skysports-cristiano-ronaldo_4353998.jpg' alt='Album four' data-action="http://tw.yahoo.com"/>
        </Coverflow>
      </div>
    );
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
};

// ReactDOM.render(
//   <Container></Container>,
//   document.querySelector('.example_4')
// );