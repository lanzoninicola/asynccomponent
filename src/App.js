import React, { Component, Fragment } from 'react';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      route: 'page1'
    }
  }

  onChangePage = (pageNumber) => {
    console.log(pageNumber);
    this.setState({ route: `page${pageNumber}` })
  }

  render() {

    const { route } = this.state;


    return (
      <Fragment>
        <header className="header">
          <Button onChangePage={this.onChangePage} page={'1'}>Page 1</Button>
          <Button onChangePage={this.onChangePage} page={'2'}>Page 2</Button>
          <Button onChangePage={this.onChangePage} page={'3'}>Page 3</Button>
        </header>
        <div className="App" >
          {(route === 'page1') ? <Page1 /> : null}
          {(route === 'page2') ? <Page2 /> : null}
          {(route === 'page3') ? <Page3 /> : null}

        </div>
      </Fragment>
    );
  }


}

export default App;
