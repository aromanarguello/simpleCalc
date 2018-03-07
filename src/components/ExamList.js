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
        dataCarryName: PropTypes.string.isRequired,
        removeExams: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.names = [];

    }

    // removeExams = (index) => {
    //     this.names.slice(0, index),
    //     this.names.slice(index, + 1)
    // }

    
    render() {
        
        {this.names.push(this.props.dataCarryName)}
        return (
            <MuiThemeProvider>
             <div className="side-exam-view">
             <Paper zDepth={2}>
                <h1> Carrito </h1>
                {}
                {this.names.map((i, k) => {
                    return(
                        <ul key={k}
                             className="exam-list-names">
                            <li  ><TextField 
                            hintText={i}
                            underlineShow={true}
                            style={style} />
                            <button onClick={() => this.props.removeExams(k)}>X</button>
                            </li>
                            <Divider />
                        </ul>
                    )
                })}
            </Paper>
        </div>
        </MuiThemeProvider>
        );
        
    }
}

// function mapStateToProps (state,action) {
//     return {
//         name: state[0].name,
//         price: state[0].total,
//         state: state
//     }
// }

// export default connect(mapStateToProps)(ExamList);