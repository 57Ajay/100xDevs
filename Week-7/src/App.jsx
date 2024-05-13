import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App=()=> {
  return (
    <Fragment>
      <div>
        <h1>Hi this is top bar</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;