import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




const UserNav =() => {

    const user = useSelector(state=> state.user);

    
    return (
        <>
        <div  className="search-toggle dropdown-toggle d-flex align-items-center" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="../assets/images/user/01.jpg" className="avatar-40 img-fluid rounded" alt="user" />
            <div className="caption ml-3">
                <h6 className="mb-0 line-height">{user.name}<i className="las la-angle-down ml-3"></i></h6>
            </div>
        </div>
        <div className="iq-sub-dropdown dropdown-menu user-dropdown" aria-labelledby="dropdownMenuButton3">
            <div className="card m-0">
                <div className="card-body p-0">
                    <div className="py-3">
                        <Link to="/account/settings" className="iq-sub-card">
                            <div className="media align-items-center">
                                <i className="ri-user-line mr-3"></i>
                                <h6>Account Settings</h6>
                            </div>
                        </Link>
                        <Link to="#popup1" data-toggle="modal" data-target="#exampleModalCenter" className="iq-sub-card">
                            <div className="media align-items-center">
                                <i className="ri-links-line mr-3"></i>
                                <h6>Share Your Link</h6>
                            </div>
                        </Link>
                    </div>
                    <Link to="/login" className="right-ic p-3 border-top btn-block position-relative text-center" role="button">
                        Logout
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

const Header = () => {

    


  return (
    <React.Fragment>
        <div className="iq-top-navbar">
          <div className="container">
              <div className="iq-navbar-custom">
                  <div className="d-flex align-items-center justify-content-between">
                      <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                          {/* <i className="ri-menu-line wrapper-menu"></i> */}
                          <Link to="/" className="header-logo">
                              <img src="../assets/images/logo.png" className="img-fluid rounded-normal light-logo" alt="logo" />
                              {/* <img src="assets/images/logo-white.png" className="img-fluid rounded-normal darkmode-logo" alt="logo" /> */}
                          </Link>
                      </div>
                      {/* <div className="iq-menu-horizontal">
                          <nav className="iq-sidebar-menu">
                              <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
                                  <Link to="/" className="header-logo">
                                      <img src="assets/images/logo.png" className="img-fluid rounded-normal" alt="logo" />
                                  </Link>
                                  <div className="iq-menu-bt-sidebar">
                                      <i className="las la-bars wrapper-menu"></i>
                                  </div>
                              </div>
                              <ul id="iq-sidebar-toggle" className="iq-menu d-flex">
                                    <li className="active">
                                        <Link to="/" className="">
                                            <span>Dashboard</span>
                                        </Link>
                                    </li>
                                    <li className=" ">
                                        <Link to="/schedule" className="">
                                            <span>My Schedule</span>
                                        </Link>
                                    </li>
                                                   
                              </ul>
                          </nav>
                      </div> */}
                      <nav className="navbar navbar-expand-lg navbar-light p-0">
                          <div className="navbar-toggler" type="button" data-toggle="collapse"
                              aria-controls="navbarSupportedContent"
                              aria-label="Toggle navigation">
                              <img src="../assets/images/user/01.jpg" className="avatar-40 img-fluid rounded" alt="user" />
                          </div>
                         {/* <div className='show' data-toggle="collapse"><UserNav /> </div> */}
                          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav ml-auto navbar-list align-items-center">
                                  {/* <li className="nav-item nav-icon dropdown">
                                      <Link to="" className="search-toggle dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown"
                                          aria-haspopup="true" aria-expanded="false">
                                          <i className="las la-bell"></i>
                                          <span className="badge badge-primary count-mail rounded-circle">2</span>
                                          <span className="bg-primary"></span>
                                      </Link>
                                      <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton">
                                          <div className="card shadow-none m-0">
                                              <div className="card-body p-0 ">
                                                  <div className="cust-title p-3">
                                                      <h5 className="mb-0">Notifications</h5>
                                                  </div>
                                                  <div className="p-2">
                                                      <Link to="/" className="iq-sub-card">
                                                          <div className="media align-items-center cust-card p-2">
                                                              <div className="">
                                                                  <img className="avatar-40 rounded-small" src="../assets/images/user/u-1.jpg" alt="01" />
                                                              </div>
                                                              <div className="media-body ml-3">
                                                                  <div className="d-flex align-items-center justify-content-between">
                                                                      <h6 className="mb-0">Anne Effit</h6>
                                                                      <small className="mb-0">02 Min Ago</small>
                                                                  </div>
                                                                  <small className="mb-0">Manager</small>
                                                              </div>
                                                          </div>
                                                      </Link>
                                                      <Link to="/" className="iq-sub-card">
                                                          <div className="media align-items-center cust-card p-2">
                                                              <div className="">
                                                                  <img className="avatar-40 rounded-small" src="../assets/images/user/u-2.jpg" alt="02" />
                                                              </div>
                                                              <div className="media-body ml-3">
                                                                  <div className="d-flex align-items-center justify-content-between">
                                                                      <h6 className="mb-0">Eric Shun</h6>
                                                                      <small className="mb-0">05 Min Ago</small>
                                                                  </div>
                                                                  <small className="mb-0">Manager</small>
                                                              </div>
                                                          </div>
                                                      </Link>
                                                      <Link to="/" className="iq-sub-card">
                                                          <div className="media align-items-center cust-card p-2">
                                                              <div className="">
                                                                  <img className="avatar-40 rounded-small" src="../assets/images/user/u-3.jpg" alt="03" />
                                                              </div>
                                                              <div className="media-body ml-3">
                                                                  <div className="d-flex align-items-center justify-content-between">
                                                                      <h6 className="mb-0">Ken Tucky</h6>
                                                                      <small className="mb-0">10 Min Ago</small>
                                                                  </div>
                                                                  <small className="mb-0">Employee</small>
                                                              </div>
                                                          </div>
                                                      </Link>
                                                  </div>
                                                  <Link to="/" className="right-ic btn-block position-relative p-3 border-top text-center"  role="button">
                                                      See All Notification
                                                  </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </li> */}
                                  <li className="caption-content">
                                      <UserNav />
                                  </li>
                              </ul>
                          </div>
                      </nav>
                  </div>
              </div>
          </div>
      </div>

    </React.Fragment>
  )
}

export default Header