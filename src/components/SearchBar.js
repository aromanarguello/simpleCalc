import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import * as ActionCreators from '../actions/Actions'


export default class SearchBar extends Component {
    
    static propTypes = {
        data: PropTypes.array.isRequired,
        matchTerms: PropTypes.func.isRequired
    }
   
    render() {
        return (
        <MuiThemeProvider>
            <TextField hintText="Busque su examen aqui" onChange={this.props.matchTerms} />
        </MuiThemeProvider>
        )
    }
}