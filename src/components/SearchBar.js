import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import * as ActionCreators from '../actions/Actions'



export default class SearchBar extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
    }


    searchTerm = e => {
        const name = e.target.value
        console.log(name)
    }

    
    // const examNameFilter = props.data.map(exam => exam.name);
    //     // const examMatch = examNameFilter.match(/[A-Za-z]/)
    //     console.log('this is from searchbar: ' + typeof(examNameFilter))
    render() {
        // console.log(name)
        console.log('propTypes: ' + this.props.data)

        return (
        <MuiThemeProvider>
            <TextField hintText="Busque su examen aqui" onChange={this.searchTerm} />
        </MuiThemeProvider>
        )
    }
}


// onNameChange = e => {
//     const name = e.target.value;
//     this.setState({ name: name });
// };