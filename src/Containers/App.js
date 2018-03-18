import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ActionCreators from '../actions/Actions'
import '../App.css';
import '../SmallLogo.png'
import Ionicon from 'react-ionicons'
import PriceEstimate from '../components/PriceEstimate'
import Clear from '../components/Clear'
import ExamList from '../components/ExamList'
import Total from '../components/Total'
import Data from '../data/data'


class App extends Component {

  render() {
    const { dispatch, total } = this.props;
    const updateEstimator = bindActionCreators(ActionCreators.updateEstimator, dispatch);
    const clearTotal = bindActionCreators(ActionCreators.clearTotal, dispatch);
    const dataCarryName = bindActionCreators(ActionCreators.dataCarry, dispatch);
    const addPrices = bindActionCreators(ActionCreators.addPrices, dispatch);
    const removeExams = bindActionCreators(ActionCreators.removeExams, dispatch)
    const removeIndividualExams = bindActionCreators(ActionCreators.removeIndividualExams, dispatch)

    const style = {
      marginLeft: 12,
  }

    // sum adds each exam through reduce to produce a total
    const sum = this.props.state.reduce((sum, exam) => sum + exam.price, 0)
    // names maps to produce each name on the side list when triggered by add price
    // removeIndividualExams removes the exam name and price by clicking on the 'X'
    const names = this.props.state.map((exam, index) =>
    <table className="btn-delete-examlist-container" key={index}>
      <tr>{exam.name} - {exam.price}</tr>
      <tr className="icon-delete-examlist">
        <Ionicon
          icon="ios-remove-circle" 
          fontSize="18px" 
          color="red" 
          onClick={() => removeIndividualExams(index)} style={style} />
      </tr>
    </table>)
      // <p key={index}> {exam.name} - {exam.price} $ 
      //   <span 
      //     className="delete-side-marker" 
      //     onClick={() => removeIndividualExams(index)}>
      //     <Ionicon icon="ios-remove-circle" fontSize="22px" color="red" style={style}/>
      //   </span> 
      // </p>)

    const priceComponent = 
      <PriceEstimate addPrices={addPrices} />

    const clearComponent = 
      <Clear clearTotal={clearTotal} />

    const examListComponent = 
      <ExamList 
        dataCarryName={names}
        removeExams={removeExams}
        total={sum}
      />

    const totalComponent = 
      <Total 
      total={sum}/>
     
    return (
      <div className="App">
        <aside>
            { examListComponent }
        </aside>
        <div className="header-container">
          <img src={require('../SmallLogo.png')} alt="logo" id="logo" />
          <div className='price-container'>
            {/* displays the total sum of added prices */}
            { totalComponent }
          </div>
          { clearComponent }
        </div>
        <div className="main-container">
        {/* Component that displays list of exmas */}
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