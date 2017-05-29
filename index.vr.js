import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class TMExample extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('oscars-room.jpg')}/>
        <View style={{transform: [{translate: [0, 0, -3]}]}}>
          <Blink text='I love to blink' />
          <Blink text='Yes blinking is so great' />
          <Blink text='Look at me look at me look at me' />
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('TMExample', () => TMExample);
