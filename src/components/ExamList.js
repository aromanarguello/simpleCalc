import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import * as ActionCreators from '../actions/Actions'


const ExamList = props => {
    return (
        <MuiThemeProvider>
             <div className="side-exam-view">
             <Paper zDepth={2}>
                <h1> Carrito </h1>
                <div className="side-total-amount">
                    { props.total.toFixed(2) } $
                </div>
                { props.dataCarryName }
            </Paper>
        </div>
        </MuiThemeProvider>
    );
}
export default ExamList;
