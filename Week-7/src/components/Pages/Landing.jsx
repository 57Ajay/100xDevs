import { Fragment } from "react";

const Landing=()=> {
  return (
    <Fragment>
        <div className="hero">
            <h1>Learn Full-Stack Development</h1>
            <p>Our full-stack development course will teach you everything you need to know to build and deploy web applications.</p>
            <button>Enroll Now</button>
        </div>
        <div className="features">
            <div className="feature">
                <i className="fas fa-code"></i>
                <h3>Learn to Code</h3>
                <p>Our course will teach you the fundamentals of programming, including HTML, CSS, JavaScript, and Node.js.</p>
            </div>
            <div className="feature">
                <i className="fas fa-database"></i>
                <h3>Build Databases</h3>
                <p>You will learn how to design and build databases using MongoDB and SQL.</p>
            </div>
            <div className="feature">
                <i className="fas fa-server"></i>
                <h3>Deploy Applications</h3>
                <p>We will teach you how to deploy your applications to the cloud using AWS and Heroku.</p>
            </div>
        </div>
        <div className="testimonials">
            <div className="testimonial">
                <p>`This course was amazing! I learned so much and I am now confident in my ability to build full-stack web applications.`</p>
                <p>- John Doe</p>
            </div>
            <div className="testimonial">
                <p>`I highly recommend this course to anyone who wants to learn full-stack development.`</p>
                <p>- Jane Doe</p>
            </div>
        </div>
        <div className="cta">
            <h1>Enroll Now</h1>
            <p>Don`t miss out on this opportunity to learn full-stack development. Enroll now and start your journey to becoming a web developer.</p>
            <button>Enroll Now</button>
        </div>
    </Fragment>
  )
}

export default Landing;
