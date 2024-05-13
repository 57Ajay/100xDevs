import { Fragment } from "react";

const Dashboard=()=> {
  return (
    <Fragment>
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="widgets">
                <div className="widget">
                    <h2>Courses</h2>
                    <ul>
                        <li>Full-Stack Development</li>
                        <li>Front-End Development</li>
                        <li>Back-End Development</li>
                    </ul>
                </div>
                <div className="widget">
                    <h2>Progress</h2>
                    <div className="progress-bar">
                        <div className="progress" style={{width: "75%"}}></div>
                    </div>
                </div>
                <div className="widget">
                    <h2>Assignments</h2>
                    <ul>
                        <li>Assignment 1</li>
                        <li>Assignment 2</li>
                        <li>Assignment 3</li>
                    </ul>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default  Dashboard;
