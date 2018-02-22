import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import App from '../App';

const style = {
    margin: 12,
  };

export default class PriceEstimate extends Component { 
    prices = [
        {
          name: "Biometria Hematica",
          price: 7.20
        },
        {
          name: "PSA",
          price: 16.20
        },
        {
          name: "Acido Urico",
          price: 6.00
        },
        {
          name: "Albumina",
          price: 4.00
        },
        {
          name: "Amilasa",
          price: 15.00
        },
        {
          name: "Bilirrubina",
          price: 20.50
        }
      ]

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
                        return (
                            <TableRow key = {key} >
                                <TableRowColumn 
                                    className="exam-cells">
                                    {item.name}
                                </TableRowColumn>
                                <TableRowColumn className="price-cells" >
                                    <RaisedButton 
                                        label={item.price.toFixed(2)}
                                        // labelColor="white"
                                        // backgroundColor="#234082"
                                        primary={true} 
                                        style={style}
                                        type="submit"                                
                                        onClick={this.props.onChange}/>
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
