import React from 'react';
import './App.css';
import Title from './components/Title';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';


class App extends React.Component{

  state={
    showFunc:false,
    showClass:false,
  }

  handleFuncClick = () => {
    this.setState({showFunc: !this.state.showFunc})
  }

  handleClassClick = () => {
    this.setState({showClass: !this.state.showClass})
  }

  render(){
    return (
      <div className="App">
        <Title />
        <div className='header-box'>
          <button className='header' onClick={this.handleFuncClick}><div>To see styling in functional components</div></button>
          <button className='header header2' onClick={this.handleClassClick}><div>To see styling in class components</div></button>
        </div>
        <div className='component-box'>
        {this.state.showFunc ? <FunctionalComponent />: null}
        {this.state.showClass ? <ClassComponent />: null}
        </div>
      </div>
    );
  }
}

export default App;
