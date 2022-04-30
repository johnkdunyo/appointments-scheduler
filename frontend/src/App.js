import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Register, AddOneOnOneEvent, AddGroupEvent, EventSample  } from './pages';
import AddEvent from './pages/AddEvent';
import ProtectedRoute from './components/ProtectedRoute';
import jwt_decode from 'jwt-decode';
import store from './redux/store';
import { setCurrentUser } from './redux/reducers/userSlice';






const userToken = localStorage.getItem('user_token');
if(userToken){
  const user = jwt_decode(userToken);
  store.dispatch(setCurrentUser({user, userToken}));
  console.log('user exists');
}

function App() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  
  
  return (
    <BrowserRouter>
      <Routes >
          <Route path='/' exact element={ isLoggedIn ? <Home /> :<Login /> } />
          <Route path='/signup' exact element={<Register /> } />

          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            <Route path='/home' element={<Home /> } />
            <Route path='/one-on-one-meeting/add' exact element={<AddOneOnOneEvent /> } />
            <Route path='/group-meeting/add' exact element={<AddGroupEvent /> } />
            <Route path='/addevent' exact element={<AddEvent /> } />
            <Route path='/eventsample' exact element={<EventSample /> } />
          </Route>

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
