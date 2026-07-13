import React from 'react'
import Navbar from './Navbar'
import './Donor.css'

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="container">

        <div className="home-box text-center">

          <h1 className="home-title">
            🩸 Blood Bank Management System
          </h1>

          <p className="home-text">
            Welcome to the Blood Bank Management System. This application helps
            manage blood donor information efficiently by allowing you to add
            new donors and view the list of registered donors.
          </p>

          <div className="row mt-5">

            <div className="col-md-4 mb-3">
              <div className="home-card">
                <h3>❤️ Save Lives</h3>
                <p>
                  Every blood donation can save up to three lives.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="home-card">
                <h3>📝 Register Donors</h3>
                <p>
                  Add donor details quickly and securely.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="home-card">
                <h3>📋 View Donors</h3>
                <p>
                  Access all registered donor details anytime.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Home