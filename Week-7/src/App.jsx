import { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Dashboard = lazy(()=>import("./components/Pages/Dashboard"));
const Landing = lazy(()=>import("./components/Pages/Landing"));

import "./App.css";


const App=()=> {
  return (
    <Fragment>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Landing/>
          </Suspense>} />
          <Route path="/dashboard" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard/>
          </Suspense>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;