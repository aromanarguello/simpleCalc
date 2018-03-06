import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as ActionCreators from '../actions/Actions'

export default class ExamList extends Component {

    static propTypes = {
        dataCarryName: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.names = [];
    }



    render() {
        {this.names.push(this.props.dataCarryName)}
        return (
            <div className="side-exam-view">
                <h1> Carrito </h1>
                
                {this.names.map((i, k) => {
                    return(
                        <ul key={k} 
                             className="exam-list-names">
                            <li>{i}</li>
                        </ul>
                    )
                })}
            </div>
          
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