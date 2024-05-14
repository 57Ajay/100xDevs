import { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

const Dashboard = lazy(()=>import("./components/pages/Dashboard"));
const Landing = lazy(()=>import("./components/pages/Landing"));
const PropDrill1 = lazy(()=> import("./components/context/PropDrill1"));
const CounterApp  =lazy(()=> import("./components7.2/CounterApp.jsx"));

import "./App.css";
import { TopBar } from "./components/TopBar/TopBar";

const App=()=> {
  return (
    <Fragment>
      <RecoilRoot>
        <BrowserRouter>
        <TopBar/>
          <Routes>
            
            <Route path="/" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Landing/>
            </Suspense>} />

            <Route path="/dashboard" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>} />

            <Route path="/prop-drill" element={
            <Suspense fallback={<div>Loading...</div>}>
              <PropDrill1 />
            </Suspense>} />

            <Route path="Counter" element={
            <Suspense fallback={<div>Loading...</div>}>
              <CounterApp />
            </Suspense>} />

          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </Fragment>
  )
}

export default App;