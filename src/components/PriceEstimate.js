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

const style = {
    margin: 12,
  };

export default class PriceEstimate extends Component {
    /** Constructor to store exam name and price to export to store */
    
    constructor(props) {
        super(props);
        
        this.data = {
            _data: {
                itemName: '',
                itemPrice: '',
            }
        };
    }
    
    // imports the JSON object from data.js file and assisngs it to the variable price
    // Data is an array thus should be treated as like.
    prices = Data

    static propTypes = {
        data: PropTypes.object.isRequired,
        updateEstimator: PropTypes.func.isRequired,
        addPrices: PropTypes.func.isRequired,
        dataCarry: PropTypes.func.isRequired,
        Action: PropTypes.func.isRequired,
        _data: PropTypes.array.isRequired
    }

    render() {
        return (
            <MuiThemeProvider>
                <Table multiSelectable={true} selectable={true} >
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn className="exam-cells">Examén</TableHeaderColumn>
                            <TableHeaderColumn className="price-cells">Precio</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {this.prices.map((item, key) => {
                        // this will store the price and name of clicked item
                        // on the _data object above for use in other components.ß
                        {this.data._data.itemName = item.name}
                        {this.data._data.itemPrice = item.price}
                        return (
                            <TableRow key = {key} >
                                <TableRowColumn 
                                    className="exam-cells">
                                    {item.name}
                                    
                                </TableRowColumn>
                                <TableRowColumn className="price-cells" >
                                    <RaisedButton 
                                        key={item.id}
                                        label={item.price}
                                        primary={true} 
                                        style={style}
                                        type="submit"   
                                        onClick={this.props.addPrices}
                                        />
                                        $ 
                                </TableRowColumn>                               
                            </TableRow>
                        )
                    })}
                    </TableBody>
                </Table>
            </MuiThemeProvider>
        )
    }
}
