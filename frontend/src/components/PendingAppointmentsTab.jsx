import React from 'react'
import PendingEventsCard from './PendingEventsCard'

const PendingAppointmentsTab = () => {
  return (
    <React.Fragment>
        <div className='tab-pane fade' id="pending-appointments-tab">
            <div className="row">
                <PendingEventsCard />
            </div>
        </div>
    </React.Fragment>
  )
}

export default PendingAppointmentsTab