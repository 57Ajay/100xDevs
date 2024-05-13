import {Fragment} from 'react'

const Dashboard=()=> {
  return (
    <Fragment>
        <p>Dashboard Page</p>
        <button onClick={()=>{window.location.href="/"}}>Landing Page</button>
    </Fragment>
  )
}

export default  Dashboard;