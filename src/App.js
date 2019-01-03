import React, { Component } from 'react';
import EthPrice from './Eth-price';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const style = {
  h1: {
    marginTop: '1em',
  }
}

class App extends Component {
  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center' style={style.h1}>
          Cost of storing data on the Ethereum blockchain
        </Header>
        <Segment basic>
          Storing data on the Ethereum blockchain is expensive. It's best to store the hash of the data you wish to store. However, if you really need to store data on the Ethereum blockchain or you're just curious, here are the current prices for doing so. The cost of storing data changes all the time due to market forces, to get the latest conditions refresh the page. 
        </Segment>

        <EthPrice>
        </EthPrice>
      </Container>
    )
  }
}

export default App;
