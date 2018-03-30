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

    state = {
       prices: Data
    }
    // imports the JSON object from data.js file and assisngs it to the variable price
    // Data is an array thus should be treated as like.

    static propTypes = {
        addPrices: PropTypes.func.isRequired,
    }

    // (e) takes the onchange input value from text field -> assigns it to nameTerm -> the state is filtered and nameTerm is used as a parameter to match the exam being filtered -> prices key is assigned the result of examNameFilter
    matchTerms = (e) => {
        const nameTerm = e.target.value
        if(nameTerm !== e) {
            // case insensitive
            const examNameFilter = this.state.prices.filter(exam => exam.name.toLowerCase().match(nameTerm.toLowerCase()))
            this.setState({prices: examNameFilter})
        }
        // re-renders the complete Data
        if(nameTerm === "") {
            this.setState({prices: Data})
        }
    }

    

    render() {
        return (     
            <MuiThemeProvider>    
                <div className="table-container">
                <SearchBar className="search-bar" matchTerms={this.matchTerms}/>
                    <Table multiSelectable={true} selectable={true} >
                        <TableBody>
                        {this.state.prices.map((item, key) => {
                        
                            return (
                                <TableRow key={key}>
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
