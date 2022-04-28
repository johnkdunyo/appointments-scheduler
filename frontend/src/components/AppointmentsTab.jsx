import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAppointments } from '../redux/reducers/appointmentSlice';
import AppointmentsCard from './AppointmentsCard';

const AppointmentsTab = () => {
    
    const dispatch = useDispatch()

    const [isloading, setIsLoading] = useState(false);
    const appointments = useSelector(state=> state.appointments.appointments.filter(appointment=>appointment.status==='booked'));
    const appointmentStatus = useSelector(state=>state.appointments.status);

    // load appointments on component mount
    useEffect(()=>{
        dispatch(fetchAllAppointments())
    }, [dispatch])


    // console.log(appointments)
    // component to render when appointments are oending
    const AppointmentPendings = () => {
        return (
            <h5>Loading ...</h5>
        )
    }


    appointments.map((appointment)=>
    console.log(Object.keys(appointment)))



  return (
    <React.Fragment>
        <div id="appointments-tab" className="tab-pane fade active show">
            {appointmentStatus === 'pending' && <AppointmentPendings /> }
        <div className="row">   
            {appointments.map((appointment)=>(
                <AppointmentsCard key={appointment._id} appointment={appointment} />
            ))}

           
        </div>
    </div>
    </React.Fragment>
  )
}

export default AppointmentsTab;