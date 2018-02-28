import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ActionCreators from '../actions/Actions'
import '../App.css';
import '../SmallLogo.png'
import PriceEstimate from '../components/PriceEstimate'
import Clear from '../components/Clear'

class App extends Component {

  static propTypes = {
    prices: PropTypes.array.isRequired
  }

  render() {
    const { dispatch, prices } = this.props;
    const updateEstimator = bindActionCreators(ActionCreators.updateEstimator, dispatch);
    const clearTotal = bindActionCreators(ActionCreators.clearTotal, dispatch)

    const priceComponent = 
      <PriceEstimate 
        updateEstimator={updateEstimator}
      />

    return (
      <div className="App">
      <div className="header-container">
        <img src={require('../SmallLogo.png')} alt="logo" id="logo" />
        <div className='price-container' >
          
          {/* {this.state.total} $         */}
        </div>
        <Clear clearTotal={clearTotal} />
      </div>
        <div className="main-container">
          { priceComponent }
        </div>
        {/* <aside></aside> */}
      </div>
    );
  };

}

const mapStateToProps = state => (
  {
    total: state
  }
);

export default connect(mapStateToProps)(App)