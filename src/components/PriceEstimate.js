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

    static propTypes = {
        onChange: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        key: PropTypes.string.isRequired,
        updateEstimator: PropTypes.func.isRequired,
        Action: PropTypes.func.isRequired
    }

    // event handler, when price button is pressed this functions sets the new state
    // if the state is not 0, it will add to the existing number with the result having
    // 2 significant digits
    // onChange(e) {
    //     if (this.state.total != 0) {
    //         this.setState({ total: (Number(this.state.total) + Number(e.target.innerText)).toFixed(2) })
    //     } else {
    //         this.setState({ total: e.target.innerText })
    //     }
    // };

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
                                        onClick={this.props.updateEstimator}/>
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
