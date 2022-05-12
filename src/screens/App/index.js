import './App.css';
import ClassHeader from "./../../components/Header";
import React from 'react';
class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <ClassHeader headers={['Home',"Listing","About","Contact"]}
          headersRight={["Login","Register"]}/>
      </React.Fragment>
    );
  }
}
export default App;
