import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns'

const AppointmentsCard = ({appointment}) => {
    // console.log(appointment)


    const appointmentState = {
        id:1,
        status: "active", 
        title: "Project 401 Meeting",
        description: "Meeting to consider the requirements and prepare the workflow. Client and all developers are joining",
        estimatedDuration: 50,
        date: "Friday, 25TH May 2022",
        time: "5 : 30PM GMT",
        location: "Facebook Live and Zoom",
        meetingLink: 'https://zoom.us/0RYhyss/',
        people: 20,
    }

    // 0: "_id"
    // 1: "title"
    // 2: "description"
    // 3: "location"
    // 4: "duration"
    // 5: "status"
    // 6: "availabilities"
    // 7: "createdAt"
    // 8: "user"
    // 9: "__v"
    // 10: "bookedDate"
    // length: 11

    const date = new Date(appointment.bookedDate);
    // appointment.bookedDate = date;

    const tempAppoint = {...appointment}

    tempAppoint.bookedDate =date.toDateString();

    tempAppoint.time = date.toLocaleTimeString('en-US',
    {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'})
    

    // const [appointment, setAppointment ] = useState(appointmentState);

    // const [appStatus, setAppStatus ] = useState(false);

    const deleteEvent = () => {
        console.log("delete event clicked")
    }

    // const checkboxHandler = () => {
    //     console.log('clicked')
       
       
    // }
  
  return (
    <React.Fragment>
        <div className="col-lg-4 col-md-6">
            <div className="card card-block card-stretch card-height">
                <div className={`card-body rounded event-detail event-detail-primary ${appointment.status}`}>
                    <div className="d-flex align-items-top justify-content-between">
                        <div>
                            <h4 className="mb-4 mr-4">{tempAppoint.title}</h4>                                        
                            {/* <p className={`mb-2 text-primary font-weight-500 text-uppercase`}><i className="las la-user-friends pr-2"></i>{tempAppoint.type}</p> */}
                            <p className="mb-4 card-description">{tempAppoint.description}</p>
                            <p className="mb-2 text-primary"><i className="las la-clock mr-3 text-danger"></i>{tempAppoint.time}</p>
                            <p className="mb-2 text-primary"><i className="las la-calendar mr-3 text-danger"></i>{tempAppoint?.bookedDate}</p>
                            <p className="mb-2 text-primary"><i className="las la-map-marker mr-3 text-danger"></i>{tempAppoint.location}</p>
                            <p className="mb-2 text-primary"><i className="las la-user-friends mr-3 text-danger"></i>{tempAppoint.people} Participants</p>
                            <div className="d-flex align-items-center pt-4">
                                <button className="btn btn-success info mr-3 px-xl-4">{tempAppoint.duration} mins</button>
                                <button className={`btn btn-outline-primary copy px-xl-4`} data-extra-toggle="copy" title="Copy to clipboard" data-toggle="tooltip"><i className="las la-link pr-2"></i>Event Link</button>
                                <button className={`btn btn-outline-primary d-none turn-on px-xl-4`}>Turn On</button>
                            </div>
                        </div>
                        <div className="card-header-toolbar mt-1">
                            <div className="dropdown">
                                <span className="dropdown-toggle" id="dropdownMenuButton02" data-toggle="dropdown">
                                    <i className="ri-more-2-fill"></i>
                                </span>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton02">
                                    <Link to="/editevent" className="dropdown-item" ><i className="ri-pencil-line mr-3"></i>Edit</Link>
                                    <Link to="/addnote" className="dropdown-item" ><i className="ri-sticky-note-line mr-3"></i>Add Internal Note</Link>
                                    <button className="dropdown-item" onClick={deleteEvent} ><i className="ri-delete-bin-6-line mr-3"></i>Delete</button>  
                                    <div className="dropdown-item border-top mt-2">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>Status</div>
                                            {/* come back here latter */}
                                            {/* <button className="custom-control custom-switch p-0" onClick={checkboxHandler}>
                                                { (appStatus) ? (<input type="checkbox" className="custom-control-input card-change"   defaultChecked/>) : (<input type="checkbox" className="custom-control-input card-change"/>)} 
                                                
                                                <label className="custom-control-label"></label>
                                            </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default AppointmentsCard