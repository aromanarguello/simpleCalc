import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import * as ActionCreators from '../actions/Actions'

const ExamList = props => {
    return (
        <MuiThemeProvider>
             <div className="side-exam-view">
             <Paper zDepth={2}>
                <h1> Carrito </h1>
                { props.total.toFixed(2) }
                { props.dataCarryName }
            </Paper>
        </div>
        </MuiThemeProvider>
    );
}

ExamList.propTypes = {
    dataCarryName: PropTypes.array.isRequired,
    removeExams: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
}

export default ExamList;
