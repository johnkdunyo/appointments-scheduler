import React from 'react';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const CalendarTab = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default CalendarTab;