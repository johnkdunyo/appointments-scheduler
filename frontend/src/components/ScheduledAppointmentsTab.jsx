import React from 'react'
import ScheduledEventsCard1 from './ScheduledEventsCard1';
import ScheduledEventsCard2 from './ScheduledEventsCard2';
import ScheduledEventsCard3 from './ScheduledEventsCard3';

const ScheduledAppointmentsTab = () => {
  return (
    <React.Fragment>
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

    </React.Fragment>
  )
}

export default ScheduledAppointmentsTab;