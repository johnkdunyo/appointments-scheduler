import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Loader from '../components/Loader';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";

import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const createEventForm = {
  name: "",
  location: "",
  description: "",
  duration: 20,
  link: "",
  location_2: "",
  duration_2: "",
}


const AddOneOffEvent = () => {

  const [event, setEvent] = useState(createEventForm);
  const [ location, setLocation ] = useState('');

  const onEventFormHandler = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value})
    console.log(event)
    // console.log(location)
  }



  const handleDateClick =(arg) => {
    console.log(arg)
    // console.log(arg)
    // const selectedDate = arg.dateStr;
    // console.log(arg.jsEvent)
    arg.jsEvent.srcElement.style.backgroundColor = 'green'
    
    const [ currentDate, currentTime ]= new Date( Date.now()).toISOString().split('T');
    // if(currentDate > selectedDate){
    //   toast('Please select a date after today')
    // }else{
    //   arg.dayEl.style.backgroundColor = 'green';
    // }


  }

  const unSelectHandler =(arg) => {
    console.log(arg)
    
  }


const onFormSubmitHandler = (e) => {
  e.preventDefault()
}


  return (
    <React.Fragment>
      <ToastContainer />
        <Loader />
        <div className='wrapper'>
            <Header />
            <div className='content-page'>
              <div className='container'>
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <div className="py-4 border-bottom">
                        <div className="float-left"><Link to="/" className="badge bg-white back-arrow"><i className="las la-angle-left"></i></Link></div>
                        <div className="form-title text-center">
                            <h3>Add One-Off Event</h3>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                  <div className='card card-block card-stretch create-event-form'>
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
                                name='name'
                                onChange={onEventFormHandler}
                                />
                            </div>
                          </div>

                          <div className='col-lg-12 mb-4'>
                            <label htmlFor="standard-select" className='title'>Location</label>
                            <div className="select" onChange={onEventFormHandler}>
                              <select id="standard-select" className='form-control' name='location'>
                                <option value="default">Select an option</option>
                                <option value="Zoom">Zoom</option>
                                <option value="Google Meet">Google Meet</option>
                                <option value="Physical location">Physical location</option>
                              </select>
                              <span className="select-styles"></span>
                            </div>
                          </div>

                          {event.location === 'Physical location' && (
                            <div className="col-lg-12 mb-3">
                            <div className="form-group">
                              <label  className='title' htmlFor="event name"> Physical address</label>
                              <input 
                                type="text" 
                                className='form-control'  
                                placeholder='enter a physcial address....' 
                                name='location_2'
                                onChange={onEventFormHandler}
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
                                />
                            </div>
                          </div>

                           <div className='col-lg-12 mb-4'>
                            <label htmlFor="standard-select" className='title'>Duration</label>
                            <div className="select" onChange={onEventFormHandler}>
                              <select id="standard-select" className='form-control' name='duration'>
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
                                name='duration_2'
                                onChange={onEventFormHandler}
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
                                placeholder={`app/username/${event.name}/${event.location}`}
                                onChange={onEventFormHandler}
                                name="link"
                                readOnly
                              />
                            </div>
                          </div>

                          
                      </div>
                      <div className='float-right-button'>
                            <button className='btn btn-primary position-relative'>Next</button>
                      </div>
                      </form>
                      
                    </div>
                  </div>
                </div>

                <div className='col-lg-8'>
                    <div className='card card-block card-stretch'>
                        <div className="card-body">
                          <FullCalendar
                                plugins={[ interactionPlugin, timeGridPlugin ]}
                                initialView="timeGridWeek"
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
                                eventColor='red'
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
              </div>
            </div>
            
            <Footer />
        </div>
    </React.Fragment>
  )
}


export default AddOneOffEvent