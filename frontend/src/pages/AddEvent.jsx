import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";

import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { addAppointment } from '../redux/reducers/appointmentSlice'


const createEventForm = {
    title: "",
    location: "",
    description: "",
    duration: 20,
    link: "",
    custom_location: "",
    custom_duration: "",
    availabilities: []
  }



  

const AddEvent = () => {
  const dispatch = useDispatch();
  // navigator
  const navigator = useNavigate()

  // states
    const [ event, setEvent ] = useState(createEventForm);
    const [ isSubmitted, setIsSubmitted] = useState(false)

    const [ date, setDate ] = useState(createEventForm.availabilities);


    // helper methods
    const onEventFormHandler = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value})
        console.log(event)
        // console.log(location)   
    };

    const onFormSubmitHandler = (e) => {
        e.preventDefault()
        // TODO fix physical location and custom duration
        // if(event.location === 'Physical location'){
        //   setEvent({...event, location: event.custom_location})
        // }else if (event.duration ===' custom'){
        //   setEvent({...event, duration: event.custom_duration})
        // }
        // (event.location === 'Physical location') ? setEvent({...event, location: event.custom_location}) : setEvent({...event, location: event.location})
        // (event.duration === 'custom') ? ( setEvent({...event, duration:event.custom_duration})) : setEvent({...event, duration:event.duration})
        console.log(event)
        setIsSubmitted(true);
    };


    const handleDateClick =(arg) => {
        // console.log(arg)
        // console.log(arg)
        const selectedDate_utc = arg.start.toUTCString()
        
        // console.log(arg.jsEvent)
        // arg.jsEvent.srcElement.style.backgroundColor = 'green'
        
        const currentDate_num = new Date( Date.now())  //.split('T');
        const selectedDate_num = arg.start.getTime();

        
        if(currentDate_num > selectedDate_num){
          toast('Please select a date after today')
        }else{
          arg.jsEvent.srcElement.style.backgroundColor = 'green';
          setDate([...date, selectedDate_utc])
          event.availabilities.push(selectedDate_utc)
        }
      console.log(event)
    
    };
    
      const unSelectHandler =(arg) => {
        // console.log(arg)
    };

    const onModalConfirmClick = async() => {
      console.log(event)
      const response = await dispatch(addAppointment(event));
      if(response){
        navigator('/')
      }
      
    }


  return (
    <React.Fragment>
      <ToastContainer />
        <Loader />
        <div className='wrapper'>
            <Header />
            <div className='content-page'>
              <div className='container'>
                <div className="">
                  <div className="col-lg-12 mb-4">
                    <div className="py-4 border-bottom">
                        <div className="float-left"><Link to="/" className="badge bg-white back-arrow"><i className="las la-angle-left"></i></Link></div>
                        <div className="form-title text-center">
                            <h3>Add One-Off Event</h3>
                        </div>
                    </div>
                </div>

                {! isSubmitted && (
                    <div className="">
                    <div className="row justify-content-center align-items-center  ">
                    <div className="col-lg-6">
                      <div className='card card-block create-event-form'>
                        <div className="card card-body p-4">
                          <form onSubmit={onFormSubmitHandler}>
                            <div className="row">
                              
                              <div className="col-lg-12 mb-3">
                                <div className="form-group">
                                  <label  className='title' htmlFor="event name"> Event name *</label>
                                  <input 
                                    type="text" 
                                    className='form-control'  
                                    placeholder='event name...' 
                                    name='title'
                                    onChange={onEventFormHandler}
                                    required
                                    />
                                </div>
                              </div>
    
                              <div className='col-lg-12 mb-4'>
                                <label htmlFor="standard-select" className='title'>Location</label>
                                <div className="select" onChange={onEventFormHandler} required>
                                  <select id="standard-select" className='form-control' name='location' required>
                                    <option value="default">Select an option</option>
                                    <option value="Zoom">Zoom</option>
                                    <option value="Google Meet">Google Meet</option>
                                    <option value="Physical location">Physical location</option>
                                  </select>
                                  <span className="select-styles"></span>
                                </div>
                              </div>
    
                              {(event.location==='' || event.location === "default" ) && (
                                  <h3 className='title pl-3'>Please select a location</h3>
                              )}
    
                              {event.location === 'Physical location' && (
                                <div className="col-lg-12 mb-3">
                                <div className="form-group">
                                  <label  className='title' htmlFor="event name"> Physical address</label>
                                  <input 
                                    type="text" 
                                    className='form-control'  
                                    placeholder='enter a physcial address....' 
                                    name='custom_location'
                                    onChange={onEventFormHandler}
                                    required
                                />
                                </div>
                              </div>
                              )}
    
                              <div className="col-lg-12 mb-3">
                                <div className="form-group">
                                  <label  className='title' htmlFor="event location"> Descriptions</label>
                                  <textarea 
                                    type="text" 
                                    className='form-control'  
                                    placeholder='Write a summary and any details your invitee should know about the the event..'
                                    name='description'
                                    onChange={onEventFormHandler}
                                    required
                                    />
                                </div>
                              </div>
    
                               <div className='col-lg-12 mb-4'>
                                <label htmlFor="standard-select" className='title'>Duration</label>
                                <div className="select" onChange={onEventFormHandler}>
                                  <select id="standard-select" className='form-control' name='duration' required>
                                    <option value="20">20 minutes</option>
                                    <option value="30">30 minutes</option>
                                    <option value="40">40 minutes</option>
                                    <option value="60">1 hour</option>
                                    <option value="custom">custom</option>
                                  </select>
                                  <span className="focus"></span>
                                </div>
                              </div>
    
                              {event.duration === 'custom' && (
                                <div className="col-lg-12 mb-3">
                                <div className="form-group">
                                  <label  className='title' htmlFor="event name"> Meeting duration</label>
                                  <input 
                                    type="number" 
                                    className='form-control'  
                                    placeholder='enter an estimated meeting duration in seconds....' 
                                    name='custom_duration'
                                    onChange={onEventFormHandler}
                                    required
                                    />
                                </div>
                              </div>
                              )}
    
                              <div className="col-lg-12 mb-3">
                                <div className="form-group">
                                  <label  className='title' htmlFor="event location"> Event link</label>
                                  <input 
                                    type="text" 
                                    className='form-control'  
                                    placeholder={`app/username/${event.title}/${event.location}`}
                                    onChange={onEventFormHandler}
                                    name="link"
                                    readOnly
                                  />
                                </div>
                              </div>
    
                              
                          </div>
                          <div className='float-right-button'>
                                <button className='btn btn-primary position-relative' type='submit'>Next</button>
                          </div>
                          </form>
                          
                        </div>
                      </div>
                    </div>
                    </div>
                    </div>
                )}


                { isSubmitted && (
                    <div className="row">
                    <div className="col-lg-4">
                    <div className="card card-block card-stretch card-height">
                        <div className="card-body rounded event-detail event-detail-primary">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div>
                                    <h4 className="text-primary mt-0">Meeting Information</h4>
                                </div>
                                
                            </div>
                            <h3 className="my-2">{event.title}</h3>   
                            <p className="mb-4 card-description">{event.description}</p>
                            <p className="mb-2 text-primary"><i className="las la-clock mr-3"></i>{event.duration === 'custom' ? event.custom_duration : event.duration} minutes</p>
                            <p className="mb-2 text-primary"><i className="las la-map-marker mr-3"></i>{event.location === "Physical location" ? event.custom_location : event.location }</p>

                            <div><h4 className='my-2 mt-3'>Selected Availabilies</h4></div>
                            { event.availabilities && ( 
                                event.availabilities.map((val, ind) => {
                                    return (<p className='mb-2 text-primary' key={ind}>{val}</p>)
                                })
                            )}

                            <div className="float-right-button mt-2">
                                <button className='btn btn-danger mr-2' onClick={()=> setDate([])}>Cancel</button>
                                <button type='button'className='btn btn-primary'data-toggle="modal" data-target="#staticBackdrop" >Confirm</button>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* modal area */}
                    <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Confirm Meeting Infomation</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                              <div className="card-body">
                                <h3 className="my-2">{event.title}</h3>   
                                <p className="mb-4 card-description">{event.description}</p>
                                <p className="mb-2 text-primary"><i className="las la-clock mr-3"></i>{event.duration === 'custom' ? event.custom_duration : event.duration} minutes</p>
                                <p className="mb-2 text-primary"><i className="las la-map-marker mr-3"></i>{event.location === 'Physical location' ? event.custom_location : event.location}</p>

                                <div><h4 className='my-2 mt-3'>Selected Availabilies</h4></div>
                                { event.availabilities && ( 
                                    event.availabilities.map((val, ind) => {
                                        return (<p className='mb-2 text-primary' key={ind}>{val}</p>)
                                    })
                                )}
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=> setDate([])} >Cancel</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={onModalConfirmClick}>Confirm</button>
                          </div>
                        </div>
                      </div>
                    </div>



                    <div className='col-lg-8'>
                    <div className='card card-block card-stretch'>
                        <div className="card-body">
                          <FullCalendar
                                plugins={[ interactionPlugin, timeGridPlugin ]}
                                initialView="timeGridWeek"
                                timeZone='local'
                                weekends={true}
                                selectable={true}
                                unselectAuto={false}
                                events={[
                                    { id: 1, title: 'Mevent 1', date: '2022-03-21T14:30:00', color: 'green'},
                                    { title: 'event 2', date:  '2022-03-21T19:30:00' }
                                ]}
                                unselect={unSelectHandler}
                                select={handleDateClick}
                                // dateClick={handleDateClick}
                                // eventColor='red'
                                //   headerToolbar ={{
                                //     left: 'prev,next today',
                                //     center: 'title',
                                //     right: 'month,basicWeek,basicDay'
                                // }}
                                nowIndicator={true}
                                selectMirror={true}      
                          />
                        </div>  
                    </div>
                        
                </div>

                    
                </div>
                )}




                </div>
              </div>
            </div>
            
            <Footer />
        </div>
    </React.Fragment>
  )
}

export default AddEvent