import logo from './logo.svg';
import './App.css';

import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

import GridLayout from 'react-grid-layout';

function App() {
  const widthDefault = window.innerWidth - 15;

  return (
    <GridLayout className="layout" cols={12} rowHeight={40} width={widthDefault}>
    <div
      className="grid"
      key="a" data-grid={{x: 0, y: 0, w: 1, h: 12, static: true}}></div>
    <div
      className="grid"
      key="b" data-grid={{x: 1, y: 0, w: 8, h: 12}}>b</div>
    <div
      className="grid"
      key="c" data-grid={{x: 9, y: 0, w: 3, h: 12}}>c</div>
      <div
      className="grid"
      key="d" data-grid={{x: 0, y: 12, w: 12, h: 2}}>d</div>
  </GridLayout>
  );
}

export default App;
