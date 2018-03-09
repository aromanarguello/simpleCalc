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

  render() {
    const { dispatch, total } = this.props;
    const updateEstimator = bindActionCreators(ActionCreators.updateEstimator, dispatch);
    const clearTotal = bindActionCreators(ActionCreators.clearTotal, dispatch);
    const dataCarryName = bindActionCreators(ActionCreators.dataCarry, dispatch);
    const addPrices = bindActionCreators(ActionCreators.addPrices, dispatch);
    const removeExams = bindActionCreators(ActionCreators.removeExams, dispatch)
    const clearCart = bindActionCreators(ActionCreators.removeIndividualExams, dispatch)

     // sum adds each exam through reduce to produce a total
     const sum = this.props.state.reduce((sum, exam) => sum + exam.price, 0)
     // names maps to produce each name on the side list when triggered by add price
     const names = this.props.state.map((exam, index) =>
     <p key={index}> {exam.name} <span onClick={() => removeExams(exam)}> --X</span> </p>)
    // used to clear reset total
     const clear = this.props.state.map(( exam, index) => {
       {() => removeExams(exam)}
     })

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
            dataCarryName={names}
            removeExams={removeExams}
            total={sum}
            />
            {console.log('STATE:' + this.props.state)}
        </aside>
        <img src={require('../SmallLogo.png')} alt="logo" id="logo" />
        <div className='price-container'>
        {/* displays the total sum of added prices */}
        {sum.toFixed(2)}
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
      state
  };
}


export default connect(mapStateToProps)(App)