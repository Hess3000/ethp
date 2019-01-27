
import React, { Component } from 'react';
import { Image, Segment, Statistic, Card, Button, Container, Header, Grid, Table, Icon, Input } from 'semantic-ui-react';

const style = {
  h1: {
    marginTop: '1em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

const square = { width: 120, height: 120 };

class EthPrice extends Component {
	state = {
		ethToPound: '',
		ethToEuro: '',
		ethToDollar: '',
		avGasPriceConst: '',
		avGasPrice: '',
		safeLoGas: '',
		fastGas: '',
		fastestGas: '',
		gasUsed: '',
		costWord: '',
		costMb: '',
		costKb: '',
		costGb: '',
		transactionCost: '',
		bGR: '20000',
		kbGR: '625000',
		mbGR: '625000000',
		gbGR: '625000000000',

	}

	async componentDidMount() {
		try {
			// get gas price 
			const response = await fetch('https://www.etherchain.org/api/gasPriceOracle');
			const json1 = await response.json();
			const { 
				standard,
				safeLow,
				fast,
				fastest} = json1;
			// get data for eth to dollar exchange rate
			const response2 = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=USD');
			const json2 = await response2.json();
			const { usd } = json2.ethereum;
			
			this.setState( {ethToDollar: usd } );
			this.setState( {avGasPriceConst: standard } );
			this.setState( {avGasPrice: standard, safeLoGas: safeLow, fastGas: fast, fastestGas: fastest } );
			console.log( this.state.ethToDollar );

		}
		catch (err) {
			console.log(err.message)
		}

	}

	onChange = (event) => {
		this.setState( { avGasPrice: event.target.value } )
	}

	render () {
		return (
			<div style={style.last}>
			<Grid style={style.h1}>
				<Grid.Row centered>
					<Grid.Column mobile={16}>
						<Table celled unstackable>
					    <Table.Body>
					    	<Table.Row >
					        <Table.Cell>
					          Data size
					        </Table.Cell>
					        <Table.Cell>Ethereum cost</Table.Cell>
					        <Table.Cell>USD cost</Table.Cell> 
					      </Table.Row>

					      <Table.Row>
					        <Table.Cell >
					          <Icon name='file outline' />265-bit
					        </Table.Cell>
					        <Table.Cell>{(this.state.avGasPrice * this.state.bGR) / 1000000000 }</Table.Cell>
					        <Table.Cell>
					        	{this.state.ethToDollar * (this.state.avGasPrice * this.state.bGR) / 1000000000 }
					        </Table.Cell> 
					      </Table.Row>
					      
					      <Table.Row>
					        <Table.Cell>
					          <Icon name='file outline' />1 KB
					        </Table.Cell>
					        <Table.Cell>{(this.state.avGasPrice * this.state.kbGR) / 1000000000 }</Table.Cell>
					        <Table.Cell>
					        	{this.state.ethToDollar * (this.state.avGasPrice * this.state.kbGR) / 1000000000 }
					        </Table.Cell>
					      </Table.Row>

					      <Table.Row>
					        <Table.Cell>
					          <Icon name='file outline' />1 MB
					        </Table.Cell>
					        <Table.Cell>{(this.state.avGasPrice * this.state.mbGR) / 1000000000 }</Table.Cell>
					        <Table.Cell>
					        	{this.state.ethToDollar * (this.state.avGasPrice * this.state.mbGR) / 1000000000 }
					        </Table.Cell>
					      </Table.Row>

					      <Table.Row>
					        <Table.Cell>
					          <Icon name='file outline' />1 GB
					        </Table.Cell>
					        <Table.Cell>{(this.state.avGasPrice * this.state.gbGR) / 1000000000 }</Table.Cell>
					        <Table.Cell>
					        	{this.state.ethToDollar * (this.state.avGasPrice * this.state.gbGR) / 1000000000 }
					        </Table.Cell>
					      </Table.Row>

					    </Table.Body>
					  </Table>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered>
					<Grid.Column>
						<Segment.Group>
						   <Segment>The price of sending data is determined by the amount of data sent, the gas cost, and the current value of Ethereum. The table above is based on the current standard gas price of the latest blocks mined on the Ethereum blockchain. You can adjust the gas price below.</Segment>
					    <Segment>
					    	<Input onChange={this.onChange} label={{ basic: true, content: 'Gwei' }} label='Set gas price' placeholder={this.state.avGasPrice} ref={this.state.avGasPrice} /></Segment>
						    <Segment>{this.state.avGasPriceConst} Gwei = Current standard gas cost (less than 5 mins to confirm)</Segment>
						    <Segment>${this.state.ethToDollar} = Current price of ethereum</Segment>
						 </Segment.Group>
					</Grid.Column>
				</Grid.Row>

			</Grid>
			<Grid stackable centered columns={3}>
			<Grid.Row>
			<Segment.Group horizontal>
	      
	    		<Segment style={square}>
			      <Header as='h4'>
			        {this.state.safeLoGas} Gwei
			        <Header.Subheader>
			        	Safe low - Less than 30 mins to confirm
			        </Header.Subheader>
			      </Header>
			    </Segment>
    		

    		
	        <Segment style={square}>
			      <Header as='h4'>
			        	{this.state.fastGas} Gwei
			        <Header.Subheader>
								Fast - less than 1 min to confirm
			        </Header.Subheader> 
			      </Header>
			    </Segment>
	      

	      
	        <Segment style={square}>
			      <Header as='h4'>
			        	{this.state.fastestGas} Gwei
			        <Header.Subheader>
								Fastest - less than 2 blocks
			        </Header.Subheader> 
			      </Header>
			    </Segment>
	     
	      </Segment.Group>
	      	

	      </Grid.Row>
			  </Grid>
			</div>
		)
	}
}

export default EthPrice;