import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'
  import App from '../Containers/App'
  import Data from '../data/data'
  import TextField from 'material-ui/TextField';
  import SearchBar from './SearchBar'

const style = {
    margin: 12,
  };

export default class PriceEstimate extends Component {
    /** Constructor to store exam name and price to export to store */
    
    // imports the JSON object from data.js file and assisngs it to the variable price
    // Data is an array thus should be treated as like.s
    prices = Data

    static propTypes = {
        addPrices: PropTypes.func.isRequired,
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="table-container">
                    <SearchBar data={this.prices} />
                    <Table multiSelectable={true} selectable={true} >
                        <TableBody>
                        {this.prices.map((item, key) => {
                            return (
                                <TableRow key = {key} >
                                    <TableRowColumn 
                                        className="exam-cells">
                                        {item.name}
                                        {console.log(typeof(item.price))}
                                    </TableRowColumn>
                                    <TableRowColumn className="price-cells" >
                                        <RaisedButton 
                                            key={item.id}
                                            label={item.price}
                                            primary={true} 
                                            style={style}
                                            type="submit"
                                            // functions allows me to pass in the (item price and name as parameter)   
                                            onClick={() =>this.props.addPrices(item.price, item.name)}
                                            />
                                            
                                    </TableRowColumn>                               
                                </TableRow>
                            )
                        })}
                        </TableBody>
                    </Table>
                </div>
            </MuiThemeProvider>
        )
    }
}
