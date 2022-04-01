import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer className="iq-footer">
        <div className="container-fluid container">
            <div className="row">
                <div className="col-lg-6">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item"><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li className="list-inline-item"><a href="terms-of-service.html">Terms of Use</a></li>
                    </ul>
                </div>
                <div className="col-lg-6 text-right">
                    Designed with ❤️ by <Link to="/">Jon Dexter™ </Link> -- ©2022
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer