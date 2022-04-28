import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'


import AppointmentsTab from '../components/AppointmentsTab'
import ScheduledAppointmentsTab from '../components/ScheduledAppointmentsTab'
import PendingAppointmentsTab from '../components/PendingAppointmentsTab'
import CalendarTab from '../components/CalendarTab'


const Home = () => {
  return (
    <React.Fragment>
        <Loader />
        <div className='wrapper'>
          <Header />
          <div className='content-page'>
            <div className="content-top">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 mb-3">
                          <div className="d-flex align-items-center justify-content-between">
                              <div className="navbar-breadcrumb">
                                  <h1 className="mb-1">My Dashboard </h1>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-10 col-md-8">
                          <ul className="d-flex nav nav-pills mb-4 text-center event-tab" id="event-pills-tab" role="tablist">
                              <li className="nav-item">
                                  <a id="view-btn" className="nav-link active show" data-toggle="pill" href="#appointments-tab" data-extra="#search-with-button" role="tab" aria-selected="true">Appointments</a>
                              </li>
                              <li className="nav-item">
                                  <a id="view-schedule" className="nav-link" data-toggle="pill" href="#schedule-event-tab" data-extra="#view-event" role="tab" aria-selected="false">Scheduled Appointments</a>
                              </li>
                              <li className='nav-item'>
                                    <a id="view-schedule" className="nav-link" data-toggle="pill" href="#pending-appointments-tab" data-extra="#view-event" role="tab" aria-selected="false">Pending Appointments</a>
                              </li>
                              <li className="nav-item">
                                  <a id="view-workflow" className="nav-link" data-toggle="pill" href="#calendar-tab" data-extra="#view-data" role="tab" aria-selected="false">My Calendar</a>
                              </li>
                          </ul>
                      </div>
                      <div className="col-lg-2 col-md-4 tab-extra" id="view-event">
                          <div className="float-md-right mb-4"><a href="#appointments-tab" className="btn view-btn">View Appointments</a></div>
                      </div> 
                  </div>        
                  <div className="tab-extra active" id="search-with-button">
                      <div className="d-flex flex-wrap mb-4"> {/** align-items-center */}
                          <div className="iq-search-bar search-device mb-0 pr-3">
                              <form action="#" className="searchbox">
                                  <input type="text" className="text search-input" placeholder="Search..."  />
                              </form>
                          </div>
                          <div className="float-sm-right">
                              <p className="btn btn-primary pr-5 position-relative" data-toggle="dropdown" style={{height: 40}}>Create  
                              <span className="event-add-btn" style={{height: 40}} ><i className="ri-add-line" ></i></span></p>
     
                                <div className='dropdown-menu border-none'>
                                <div className='card m-2'>
                                    <div className='item pr-3 pl-3 mb-4'> 
                                        <Link to="/addevent" className="item">
                                            <div className="d-flex align-items-center">
                                                <div className="i-icon text-success">
                                                    <i className="las la-map-marked-alt"></i>
                                                </div>
                                                <div className="ml-2">
                                                    <h6 className='font-weight-600'>One-off Meeting</h6>
                                                    <p className="mb-0">Invite someone to pick a time to meet asap</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <div className='item pr-3 pl-3 mb-4'> 
                                        <Link to="/one-on-one-meeting/add" className='item'>
                                            <div className="d-flex align-items-center">
                                                <div className="i-icon text-success">
                                                <i className="las la-calendar-day"></i>
                                                </div>
                                                <div className="ml-2">
                                                    <h6 className='font-weight-600'>One-on-One Meeting</h6>
                                                    <p className="mb-0">Let an invitee pick a time to meet you</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div> */}
                                    {/* <div className='item pr-3 pl-3 mb-4'> 
                                        <Link to="/group-meeting/add" className="item">
                                            <div className="d-flex align-items-center">
                                                <div className="i-icon text-success">
                                                    <i className="las la-map-marked-alt"></i>
                                                </div>
                                                <div className="ml-2">
                                                    <h6 className='font-weight-600'>Group Meeting</h6>
                                                    <p className="mb-0">Let multiple people meet you at one time</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div> */}
                                </div>
                                </div>

                           
                          </div>
                      </div>
                  </div>    
              </div>
            </div>

              <div className="container">
                <div className="row">
                    <div className="col-lg-12">                
                        <div className="event-content">
                            <AppointmentsTab />
                            <ScheduledAppointmentsTab />
                            <PendingAppointmentsTab />
                            <CalendarTab />
                        </div>
                    </div>
                </div>
            </div>

          </div>

        <Footer />
        </div>
      
    </React.Fragment>
  )
}

export default Home