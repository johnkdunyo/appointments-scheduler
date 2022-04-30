import React from 'react'
import PendingEventsCard from './PendingEventsCard'
import { useSelector } from 'react-redux';


const PendingAppointmentsTab = () => {

    const appointments = useSelector(state=>state.appointments.appointments.filter(appointment=>appointment.status==='pending'));

    console.log(appointments)
    
  return (
    <React.Fragment>
        <div className='tab-pane fade' id="pending-appointments-tab">
            <div className="row">
                {appointments.map((appointment)=>(
                    <PendingEventsCard key={appointment._id} appointment={appointment}/>
                ))}
                {/* <PendingEventsCard /> */}
            </div>
        </div>
    </React.Fragment>
  )
}

export default PendingAppointmentsTab