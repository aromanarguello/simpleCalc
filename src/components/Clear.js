import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/Actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import App from '../Containers/App'

const style = {
    margin: 12,
};

export default class Clear extends Component {
    static propTypes = {
        onClear: PropTypes.func.isRequired
    }

    // event handler, when 'Limpiar' button is pressed this functions sets the state to 0
    onClear() {
        this.setState({ total: 0 })
    };
      
    render() {
        return (
            <MuiThemeProvider>
            <div className="clear-btn">        
                <RaisedButton 
                    backgroundColor="#234082"                
                    label="Limpiar" 
                    labelColor="white"
                    primary={false} 
                    style={style}
                    onClick={this.onClear}
                    />
            </div>
            </MuiThemeProvider>
        );
    }
}

