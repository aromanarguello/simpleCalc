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

const Clear = props => {
        return (
            <MuiThemeProvider>
            <div className="clear-btn">        
                <RaisedButton 
                    backgroundColor="#234082"                
                    label="Limpiar" 
                    labelColor="white"
                    primary={false} 
                    style={style}
                    onClick={props.clearTotal}
                    />
            </div>
            </MuiThemeProvider>
        );
    }

export default Clear;