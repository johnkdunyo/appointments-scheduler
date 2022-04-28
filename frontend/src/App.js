import React from 'react';
// import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Register, AddOneOnOneEvent, AddGroupEvent, EventSample  } from './pages';
import AddEvent from './pages/AddEvent';


function App() {

  // const isSignin = useSelector(state => state.isSignedIn);

  
  
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' exact element={<Home /> } />
        <Route path='/login' exact element={<Login /> } />
        <Route path='/signup' exact element={<Register /> } />
        <Route path='/one-on-one-meeting/add' exact element={<AddOneOnOneEvent /> } />
        <Route path='/group-meeting/add' exact element={<AddGroupEvent /> } />
        <Route path='/addevent' exact element={<AddEvent /> } />
        <Route path='/eventsample' exact element={<EventSample /> } />
      </Routes  >
      
    </BrowserRouter>
  );
}

export default App;
