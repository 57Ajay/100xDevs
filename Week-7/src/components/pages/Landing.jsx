import { Fragment } from "react";

const Landing=()=> {
  return (
    <Fragment>
        <p>Landing Page</p>
        <button onClick={()=>{window.location.href="/Dashboard"}}>Dashboard</button>
    </Fragment>
  )
}

export default Landing;
