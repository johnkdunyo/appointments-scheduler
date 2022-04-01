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


const EventSample = () => {


  const handleDateClick =(arg) => {
    // console.log(arg.dateStr)
    const selectedDate = arg.dateStr;
    
    const [ currentDate, currentTime ]= new Date( Date.now()).toISOString().split('T');
    if(currentDate > selectedDate){
      toast('Please select a date after today')
    }else{
      arg.dayEl.style.backgroundColor = 'green';
    }

  }


  const handleTimeButtonClick = () => {
    toast("Hello world")
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
                      <form >
                        <div className="row">
                          
                          <div className="col-lg-12 mb-4">
                            <div className="form-group">
                              <label  className='title' htmlFor="event name"> Event name *</label>
                              <input type="text" className='form-control'  placeholder='event name...'/>
                            </div>
                          </div>

                          <div className="col-lg-12 mb-3">
                            <div className="form-group">
                              <label  className='title' htmlFor="event location"> Location </label>
                              <input type="text" className='form-control'  placeholder='add event location...'/>
                            </div>
                          </div>

                          {/* <div className='col-lg-12 mb-3'>
                            <label htmlFor="standard-select" className='title'>Location</label>
                            <div className="select">
                              <select id="standard-select" className='form-control'>
                                <option value="Option 1" className='item'>Add a location</option>
                                <option value="Option 2"></option>
                                <option value="Option 3">Option 3</option>
                                <option value="Option 4">Option 4</option>
                                <option value="Option 5">Option 5</option>
                              </select>
                              <span className="focus"></span>
                            </div>
                          </div> */}
                          


                          <div className="col-lg-12 mb-3">
                            <div className="form-group">
                              <label  className='title' htmlFor="event location"> Descriptions</label>
                              <textarea type="text" className='form-control'  placeholder='Write a summary and any details your invitee should know about the the event..'/>
                            </div>
                          </div>

                           <div className='col-lg-12 mb-3'>
                            <label htmlFor="standard-select" className='title'>Duration</label>
                            <div className="select">
                              <select id="standard-select" className='form-control'>
                                <option value="Option 2">30 minutes</option>
                                <option value="Option 3">40 minutes</option>
                                <option value="Option 4">1 hour</option>
                                <option value="Option 5">custom</option>
                              </select>
                              <span className="focus"></span>
                            </div>
                          </div>

                          <div className="col-lg-12 mb-3">
                            <div className="form-group">
                              <label  className='title' htmlFor="event location"> Event link</label>
                              <input type="text" className='form-control'  placeholder='event link...'/>
                            </div>
                          </div>

                      </div>
                      </form>
                      
                    </div>
                  </div>
                </div>

                <div className='col-lg-8'>
                        <div className='card card-block card-stretch'>
                                <div className="card-body">
                                <FullCalendar
                                        plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
                                        initialView="timeGridWeek"
                                        weekends={true}
                                        events={[
                                            { id: 1, title: 'Mevent 1', date: '2022-03-21T14:30:00', color: 'green'},
                                            { title: 'event 2', date:  '2022-03-21T19:30:00' }
                                        ]}
                                        dateClick={handleDateClick}
                                        eventColor='red'
                                    //   headerToolbar ={{
                                    //     left: 'prev,next today',
                                    //     center: 'title',
                                    //     right: 'month,basicWeek,basicDay'
                                    // }}
                                    nowIndicator={true}
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


export default EventSample