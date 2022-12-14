import ProjectPage from './ProjectPage'
import CreditsPage from './CreditsPage'
import BioPage from './BioPage'
import FitnessPage from './FitnessPage'
import ZeldaPage from './ZeldaPage'
import React, { Component } from 'react'

class App extends Component {
  handleSwitch = number => {
    window.location.href='#top'
    this.setState( {
      pageN: number
    });
  }

  state = { 
    page: [
      <ProjectPage onSwitch={this.handleSwitch}/>,
      <BioPage onSwitch={this.handleSwitch}/>,
      <CreditsPage onSwitch={this.handleSwitch}/>,
      <FitnessPage onSwitch={this.handleSwitch}/>,
      <ZeldaPage onSwitch={this.handleSwitch}/>
    ],
    pageN: 0
  } 
  
  render() { 
    return (
       <div className='appContainer'>{this.state.page[this.state.pageN]}</div>
    );
  }
}
 
export default App;
