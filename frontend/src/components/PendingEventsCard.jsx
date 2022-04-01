import React from 'react';
import { Link } from 'react-router-dom';

const event = {
    title: "Project A014 Meeting",
    description: "Meeting to consider the requirements and prepare the workflow. Client and all developers are joining",
    location: "BSL Office Annex, East Legon",
    time: "09:45 PM - 10:45 PM",
    date: "May 25, 2022"
}

const PendingEventsCard = () => {
  return (
    <React.Fragment>
        <div className="col-lg-4 col-md-6">
            <div className="card card-block card-stretch card-height">
                <div className="card-body rounded event-detail event-detail1">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <div>
                            <h3 className="text-info">{event.date}</h3>
                        </div>
                        <div className="d-flex align-items-center list-action">
                            <Link to="/" className="badge mr-3" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" ><i className="ri-edit-box-line"></i></Link>
                            <Link to="/" className="badge" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" ><i className="ri-delete-bin-line"></i></Link>
                        </div>
                    </div>
                    <h4 className="my-2">{event.title}</h4>   
                    <p className="mb-4 card-description">{event.description}</p>
                    <p className="mb-2 text-info"><i className="las la-clock mr-3"></i>{event.time}</p>
                    <p className="mb-2 text-info"><i className="las la-map-marker mr-3"></i>{event.location}</p>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default PendingEventsCard