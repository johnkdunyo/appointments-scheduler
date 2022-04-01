import React from 'react'
import { Link } from 'react-router-dom'
import AppointmentsCard from '../components/AppointmentsCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'
import ScheduledEventsCard2 from '../components/ScheduledEventsCard2'
import ScheduledEventsCard1 from '../components/ScheduledEventsCard1'
import ScheduledEventsCard3 from '../components/ScheduledEventsCard3'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import PendingEventsCard from '../components/PendingEventsCard'



const Appointments = () => {
  return (
    <div id="appointments-tab" className="tab-pane fade active show">
        <div className="row">                                
            <AppointmentsCard />
            <AppointmentsCard />
            <AppointmentsCard />
        </div>
    </div>
  )
}

const ScheduleAppointment =() => {
  return (
    <div id="schedule-event-tab" className="tab-pane fade">
        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
            <ul className="d-flex nav nav-pills text-center schedule-tab" id="schedule-pills-tab" role="tablist">                                
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#event-all" data-extras="#filter-none" role="tab" aria-selected="false">All</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active show" data-toggle="pill" href="#event-upcoming" data-extras="#filter-button" role="tab" aria-selected="true">Upcoming</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#event-past" data-extras="#filter-button" role="tab" aria-selected="false">Past</a>
                </li>
            </ul>
            
        </div>
        <div className="schedule-content">
            <div id="event-all" className="tab-pane fade">
                <div className="row">
                    <ScheduledEventsCard1 /> 
                    <ScheduledEventsCard1 />                                             
                </div>
            </div>
            <div id="event-upcoming" className="tab-pane fade active show">
                <div className="row">
                    <ScheduledEventsCard2 />
                    <ScheduledEventsCard2 />
                </div>
            </div>
            <div id="event-past" className="tab-pane fade">
                <div className="row">
                    <ScheduledEventsCard3 />
                    <ScheduledEventsCard3 />
                </div>
            </div>
        </div>
    </div>
  )
}

const TasksTracker = () => {
  return (
    <div id="tasks-tab" className="tab-pane fade">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <div>                                
                                <h3 className="mb-3">Save Your Time Using Workflow</h3>
                                <p className="mb-md-0">Choose Your Own Workflow From Given Below.<br/>Or Create Your Own Workflow</p>
                            </div>
                            <div className="create-workform">
                                <a href="#create-event" data-toggle="modal" data-target="#create-event" className="btn btn-primary pr-5 position-relative">Create Workflow<span className="event-add-btn"><i className="ri-add-line"></i></span></a>
                            </div>                            
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-info">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-boxes"></i>
                                        </div>
                                        <h4 className="mb-2">Email Reminder to Invitee</h4>                             
                                        <p className="mb-4 card-description">Send automated email reminder to invitees for task.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-info mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-danger">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="lab la-ioxhost"></i>
                                        </div>
                                        <h4 className="mb-2">Email Reminder to Host</h4>                             
                                        <p className="mb-4 card-description">Send automated email reminder to the meeting host.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-danger mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-success">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-envelope-open"></i>
                                        </div>
                                        <h4 className="mb-2">Create Process Template</h4>                             
                                        <p className="mb-4 card-description">Create structured step-by-step process template for team.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-success mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-warning">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-stopwatch"></i>
                                        </div>
                                        <h4 className="mb-2">Run Multiple Instances</h4>                             
                                        <p className="mb-4 card-description">Quickly run multiple instances and checklist for team.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-warning mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-primary">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-handshake"></i>
                                        </div>
                                        <h4 className="mb-2">Track Process and collaborate</h4>                             
                                        <p className="mb-4 card-description">Track activity and prepare checklist to collaborate.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-primary mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-info">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-envelope"></i>
                                        </div>
                                        <h4 className="mb-2">Text Booking confirmation</h4>                             
                                        <p className="mb-4 card-description">Send text message for booking confirmation.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-info mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-danger">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-hourglass"></i>
                                        </div>
                                        <h4 className="mb-2">Email Feedback Survey</h4>                             
                                        <p className="mb-4 card-description">Use forms to collect feedback of the launch campaigns.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-danger mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-success">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-bookmark"></i>
                                        </div>
                                        <h4 className="mb-2">Take follow-up meeting</h4>                             
                                        <p className="mb-4 card-description">Streamline a follow-up process for the internal team.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-success mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-warning">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-bell"></i>
                                        </div>
                                        <h4 className="mb-2">Integrate and automate task</h4>                             
                                        <p className="mb-4 card-description">Integrate and automate daily and weekly tasks and sales.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-warning mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
  )
};

const PendingAppointmentTab = () => {
    return (
        <div className='tab-pane fade' id="pending-appointments-tab">
            <div className="row">
                <PendingEventsCard />
            </div>
        </div>
    )
};

const CalendarTab = () => {
    return (
        <div className='tab-pane fade' id="calendar-tab">
            <h1 className='mb-3'>my Schedule</h1>
            <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-block card-stretch">
                            <div className="card-body">
                            <FullCalendar
                                plugins={[ dayGridPlugin ]}
                                initialView="dayGridMonth"
                                weekends={true}
                                events={[
                                    { id: 1, title: 'event 1', date: '2022-03-21', color: 'green', editable: true },
                                    { title: 'event 2', date: '2022-03-22' }
                                ]}
                            />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
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
                            <Appointments />
                            <ScheduleAppointment />
                            <PendingAppointmentTab />
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