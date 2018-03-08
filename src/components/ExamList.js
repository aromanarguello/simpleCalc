import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import * as ActionCreators from '../actions/Actions'

const style = {
    marginLeft: 10,
  };

export default class ExamList extends Component {

    static propTypes = {
        dataCarryName: PropTypes.array.isRequired,
        removeExams: PropTypes.func.isRequired,
        total: PropTypes.number.isRequired,
        data: PropTypes.array.isRequired
    };

    
    render() {
        return (
            <MuiThemeProvider>
             <div className="side-exam-view">
             <Paper zDepth={2}>
                <h1> Carrito </h1>
                {this.props.total.toFixed(2)}
                {this.props.dataCarryName} <button onClick={() => this.props.removeExams(this.props.data)} >X</button>
                {/* {this.names.map((i, k) => {
                    return(
                        <ul key={k}
                             className="exam-list-names">
                            <li key={k}>
                            <TextField 
                            disabled={true}
                            defaultValue={i}/>
                            <button onClick={() => this.props.removeExams(({i}))}>X</button>
                            </li>
                            <Divider />
                        </ul>
                    )
                })} */}
            </Paper>
        </div>
        </MuiThemeProvider>
        );
        
    }
}