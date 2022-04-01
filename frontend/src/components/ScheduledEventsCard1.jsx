import React from 'react';
import { Link } from 'react-router-dom';

const event = {
    title: "Project A014 Meeting",
    description: "Meeting to consider the requirements and prepare the workflow. Client and all developers are joining",
    location: "BSL Office Annex, East Legon",
    time: "09:45 PM - 10:45 PM",
    date: "May 25, 2022"
}

const ScheduledEventsCard1 = () => {
  return (
    <React.Fragment>
        <div className="col-lg-12">
            <div className="card card-block card-stretch">
                <div className="card-body">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <div className="d-flex flex-wrap align-items-center">
                            <div className="date mr-3"><h4 className="text-danger">{event.date}</h4></div>
                            <div className="border-left pl-3"> 
                                <div className="media align-items-top">
                                    <h5 className="mb-3">{event.title}</h5>
                                    <div className="badge badge-color ml-3">Upcoming</div>
                                </div>                                                            
                                <div className="media align-items-center">
                                    <p className="mb-0 pr-3"><i className="las la-clock mr-2 text-danger"></i>{event.title}</p>
                                    <p className="mb-0"><i className="las la-map-marker mr-2 text-danger"></i>{event.location}</p>
                                </div>
                            </div>
                        </div>                                                    
                        <div className="d-flex align-items-center list-action">
                            <Link to="/" className="badge mr-3" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit Event" ><i className="ri-edit-box-line"></i></Link>
                            <Link to="/" className="badge" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete Event" ><i className="ri-delete-bin-line"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </React.Fragment>
  )
}

export default ScheduledEventsCard1