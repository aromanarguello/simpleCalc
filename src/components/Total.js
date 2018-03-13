import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton'

const Total = props => {
    return (
        <MuiThemeProvider>
            {props.total.toFixed(2)}
        </MuiThemeProvider>
    )
}

export default Total;