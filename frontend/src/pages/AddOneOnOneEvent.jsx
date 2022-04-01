import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Loader from '../components/Loader';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const AddOneOnOneEvent = () => {


  const [colorSeclected, setColorSeclected] = useState(true);

  const CheckHandler =(e) => {
    e.preventDefault()
    console.log(e.target.id)
  }

  


  return (
    <React.Fragment>
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
                            <h3>Add One-on-One Event</h3>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                  <div className='card card-block card-stretch create-event-form'>
                    <div className="card card-body p-5">
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

                          <div className="col-lg-12 mb-3">
                            <div className="form-group">
                              <label  className='title' htmlFor="event location"> Event link</label>
                              <input type="text" className='form-control'  placeholder='event link...'/>
                            </div>
                          </div>
                        
                          <div className="col-lg-12 mb-3">
                            <label  className='title' htmlFor="event color"> Event color *</label>
                            <div className='d-flex event-colors' onClick={CheckHandler}>
                              <button className="btn btn-primary btn-circle btn-sm" id='primary'>√</button>
                              <button className="btn btn-success btn-circle btn-sm" id='success'>√</button>
                              <button className="btn btn-danger btn-circle btn-sm" id='danger'>√</button>
                              <button className="btn btn-warning btn-circle btn-sm" id='warning'>√</button>
                              <button className="btn btn-info btn-circle btn-sm" id='info'>√</button>
                            </div>
                          </div>


                          

                      </div>
                      </form>
                      
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='card card-block card-stretch'>
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
            </div>

            <Footer />
        </div>
    </React.Fragment>
  )
}

export default AddOneOnOneEvent