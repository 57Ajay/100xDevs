import './App.css';
import { Fragment } from 'react';
import RevenueCard from './components/RevenueCard';

const App=()=> {
  return (
    <Fragment>
      <RevenueCard title={"Amount Pending"} amount={`22,345,423`} orderCount={10}/>
    </Fragment >
  )
}

export default App;
