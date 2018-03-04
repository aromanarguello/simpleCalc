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
        super(props)
        this._data = {
            itemName: '',
            itemPrice: '',
         }
}


    prices = Data

    static propTypes = {
        updateEstimator: PropTypes.func.isRequired,
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
                        {this._data.itemName = item.name}
                        return (
                            <TableRow key = {key} >
                                <TableRowColumn 
                                    className="exam-cells" >
                                    {item.name}
                                    
                                </TableRowColumn>
                                <TableRowColumn className="price-cells" >
                                    <RaisedButton 
                                        key={item.id}
                                        label={item.price}
                                        primary={true} 
                                        style={style}
                                        type="submit"   
                                        onClick={this.props.updateEstimator}
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
