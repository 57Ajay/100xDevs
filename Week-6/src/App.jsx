import { Fragment } from 'react';
import './App.css'
import UseEffect from './components/hooks/UseEffect'
import UseMemo from './components/hooks/UseMemo';
import UseCallback from './components/hooks/UseCallback';
import UseRef from './components/hooks/UseRef';
import Assignment1 from './components/assignments/use-memo/Assignment1';
import Assignment2 from './components/assignments/use-memo/Assignment2';
import Assignment3 from './components/assignments/use-memo/Assignment3';
import Assignment11 from './components/assignments/use-callback/Assignment11';
import Assignment22 from './components/assignments/use-callback/Assignment22';
import Assignment31 from './components/assignments/use-ref/Assignment31';
import Assignment32 from './components/assignments/use-ref/Assignment32';
const App=()=> {
  return(
    <Fragment>
      <UseEffect />
      <UseMemo />
      <UseCallback /><br />
      <UseRef />
      <Assignment1 />
      <Assignment2 />
      <Assignment3 /><br />
      <Assignment11 /><br />
      <Assignment22 /><br />
      <Assignment31 /><br />
      <Assignment32 /><br />
    </Fragment>
  )
};

export default App;
