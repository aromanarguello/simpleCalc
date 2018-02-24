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
    total: PropTypes.array.isRequired
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       total: 0
  //   };
  //   this.onChange = this.onChange.bind(this)
  //   this.onClear = this.onClear.bind(this)
  // };

  // event handler, when price button is pressed this functions sets the new state
  // if the state is not 0, it will add to the existing number with the result having
  // 2 significant digits
  // onChange(e) {
  //   if(this.state.total != 0) {
  //     this.setState({ total: ( Number(this.state.total) + Number(e.target.innerText) ).toFixed(2)})
  //   } else { 
  //     this.setState({ total: e.target.innerText })
  //   }
  // };
  // event handler, when 'Limpiar' button is pressed this functions sets the state to 0
  // onClear() {
  //   this.setState({ total: 0 })
  // };

  render() {
    const { dispatch, prices } = this.props;
    const updateEstimator = bindActionCreators(ActionCreators.updateEstimator, dispatch);
    const clearTotal = bindActionCreators(ActionCreators.clearTotal, dispatch)

    return (
      <div className="App">
      <div className="header-container">
        <img src={require('../SmallLogo.png')} alt="logo" id="logo" />
        <div className='price-container' >
          {this.state.total} $        
        </div>
        <Clear clearTotal={clearTotal} />
      </div>
        <div className="main-container">
          <PriceEstimate 
            ClassName="price-estimate-container" 
            addToPriceEstimator={updateEstimator} />
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