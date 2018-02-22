import React, { Component } from 'react';
import './App.css';
import './SmallLogo.png'
import PriceEstimate from './components/PriceEstimate';
import Clear from './components/Clear';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        total: 0
    };
    this.onChange = this.onChange.bind(this)
    this.onClear = this.onClear.bind(this)
  };

  onChange(e) {
    if(this.state.total != 0) {
      this.setState({ total: ( Number(this.state.total) + Number(e.target.innerText) ).toFixed(2)})
    } else { 
      this.setState({ total: e.target.innerText })
    }
  };

  onClear() {
    this.setState({ total: 0 })
  };
 
  render() {
    return (
      <div className="App">
      <div className="header-container">
        <img src={require('./SmallLogo.png')} alt="logo" id="logo" />
        <div className='price-container' >
          {this.state.total} $        
        </div>
        <Clear onClear={this.onClear} />
      </div>
        <div className="main-container">
          <PriceEstimate ClassName="price-estimate-container" onChange={this.onChange} />
        </div>
        {/* <aside></aside> */}
      </div>
    );
  };

}

export default App;
