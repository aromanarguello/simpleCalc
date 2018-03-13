import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import * as ActionCreators from '../actions/Actions'



export default class SearchBar extends Component {
    
    state = {
        dataSource: [],
    };

    // handleUpdateInput = value => {
    //     this.setState({
    //         dataSource: [
    //             value,
    //             value + value, 
    //             value + value + value,
    //         ]
    //     });
    // };

    static propTypes = {
        data: PropTypes.array.isRequired,
    }
  
    matchTerms = (e) => {
        const nameTerm = e.target.value
        const examNameFilter = this.props.data.filter(exam => exam.name.match(nameTerm))
        this.setState({examNameFilter})
    }     
    
    render() {
        return (
        <MuiThemeProvider>
            {/* <AutoComplete
                hintText="Busque aqui"
                dataSource={this.props.data.map(exam => exam.name)}
                onUpdateInput={this.handleUpdateInput}
                /> */}
            <TextField hintText="Busque su examen aqui" onChange={this.matchTerms} />
            {console.log(this.state)}
        </MuiThemeProvider>
        )
    }
}