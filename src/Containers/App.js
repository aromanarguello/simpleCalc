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
import ExamList from '../components/ExamList'


class App extends Component {

  // static propTypes = {
  //   prices: PropTypes.array.isRequired,
  //   Action: PropTypes.func.isRequired,
  //   Store: PropTypes.func.isRequired
  // }


  render() {
    console.log(this.props.name)
    const { dispatch, total } = this.props;
    const updateEstimator = bindActionCreators(ActionCreators.updateEstimator, dispatch);
    const clearTotal = bindActionCreators(ActionCreators.clearTotal, dispatch);
    const dataCarryName = bindActionCreators(ActionCreators.dataCarry, dispatch);
    const addPrices = bindActionCreators(ActionCreators.addPrices, dispatch);
    const removeExams = bindActionCreators(ActionCreators.removeExams, dispatch)

    const priceComponent = 
      <PriceEstimate 
        updateEstimator={updateEstimator}
        dataCarryName={dataCarryName}
        addPrices={addPrices}
      />

      const clearComponent = 
      <Clear clearTotal={clearTotal} />
      
       
    return (
      <div className="App">
      <div className="header-container">
        <aside>
          <ExamList 
            dataCarryName={this.props.name}
            removeExams={removeExams}
            total={this.props.total}
            />
        </aside>
        <img src={require('../SmallLogo.png')} alt="logo" id="logo" />
        <div className='price-container'>
        {/* displays the total sum of added prices */}
        {console.log(typeof(this.props.total))}
          {this.props.total}
        </div>
         { clearComponent }
      </div>
        <div className="main-container">
          { priceComponent }
        </div>
    
      </div>
    );
  };


}

function mapStateToProps (state, name){
  return {
      total: Number(state[0].total).toFixed(2),
      name: state[0].name,
  };
}


export default connect(mapStateToProps)(App)