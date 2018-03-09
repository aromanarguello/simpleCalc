import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import * as ActionCreators from '../actions/Actions'

const ExamList = props => {
    return (
        <MuiThemeProvider>
             <div className="side-exam-view">
             <Paper zDepth={2}>
                <h1> Carrito </h1>
                {props.total.toFixed(2)}
                {props.dataCarryName}
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

// const style = {
//     marginLeft: 10,
//   };

// export default class ExamList extends Component {

//     static propTypes = {

//     };

    
//     render() {
//         return (
//             <MuiThemeProvider>
//              <div className="side-exam-view">
//              <Paper zDepth={2}>
//                 <h1> Carrito </h1>
//                 {this.props.total.toFixed(2)}
//                 {this.props.dataCarryName}
//                 {console.log(this.props.removeIndividualExams)} 
//             </Paper>
//         </div>
//         </MuiThemeProvider>
//         );
        
//     }
// }