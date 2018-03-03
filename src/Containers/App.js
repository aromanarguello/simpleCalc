import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ActionCreators from '../actions/Actions'
import '../App.css';
import '../SmallLogo.png'
import PriceEstimate from '../components/PriceEstimate'
import Clear from '../components/Clear'
import Reducer from '../reducer/reducer'


class App extends Component {

  // static propTypes = {
  //   prices: PropTypes.array.isRequired,
  //   Action: PropTypes.func.isRequired,
  //   Store: PropTypes.func.isRequired
  // }


  render() {
    console.log()
    const { dispatch, prices } = this.props;
    const updateEstimator = bindActionCreators(ActionCreators.updateEstimator, dispatch);
    const clearTotal = bindActionCreators(ActionCreators.clearTotal, dispatch)

    const priceComponent = 
      <PriceEstimate 
        updateEstimator={updateEstimator}
      />

      const clearComponent = 
      <Clear clearTotal={clearTotal} />
      
      const totalComponent = (state) => {
        this.props.total
      }

    return (
      <div className="App">
      <div className="header-container">
        <img src={require('../SmallLogo.png')} alt="logo" id="logo" />
        <div className='price-container'>
          {this.props.total}
        </div>
         { clearComponent }
      </div>
        <div className="main-container">
          { priceComponent }
        </div>
        {/* <aside></aside> */}
      </div>
    );
  };

}

function mapStateToProps (state)  {
  return {
      name: state.map(x  => x.name),
      total: state.map(x => x.total)
  }
};

export default connect(mapStateToProps)(App)