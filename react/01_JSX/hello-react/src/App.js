//import { Fragment } from 'react';
import './App.css';

function App() {


  const name = '리액트';
  return (
  <div className="react">
    {name}
    {/*주석은 이렇게 작성합니다.*/}
    //하지만 이런 주석이나
    /*이런 주석은 페이지에 그대로 나타나게 됩니다.*/
  </div>
  );
}

export default App;
