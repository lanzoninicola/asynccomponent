import React, { Component, Fragment, Suspense } from 'react';
import './App.css';
import Page1 from './components/Page1';
import Button from './components/Button';



const Page2 = React.lazy(() => import('./components/Page2'));
const Page3 = React.lazy(() => import('./components/Page3'));


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      route: 'page1'
    }
  }

  onChangePage = (pageNumber) => {
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
          {(route === 'page2') ? (
            <Suspense fallback={<div>Loading...</div>}>
              <Page2 />
            </Suspense>
          ) : null}
          {(route === 'page3') ? (
            <Suspense fallback={<div>Loading...</div>}>
              <Page3 />
            </Suspense>
          ) : null}

        </div>
      </Fragment>
    );
  }


}

export default App;
