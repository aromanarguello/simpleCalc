import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import App from '../Containers/App'

const style = {
  margin: 12,
};

export default class Clear extends Component {
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
                    onClick={this.props.onClear}
                    />
            </div>
            </MuiThemeProvider>
        );
    }
}

