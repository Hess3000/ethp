import React, { Component } from 'react';
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

class Footer extends Component {

	render() {
		return (
			
			<Segment inverted style={{ margin: '0em 0em 0em', padding: '2em 0em' }} vertical>
          <Container textAlign='center'>
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='http://www.sjddigital.com/'>
                 Created by SJD Digital
              </List.Item>
              <List.Item as='a' href='http://www.sjddigital.com/'>
                2018
              </List.Item>
            </List>
          </Container>
        </Segment>

			)
	}
}

export default Footer;