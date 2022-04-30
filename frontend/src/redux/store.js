import {configureStore} from '@reduxjs/toolkit';
import appointmentSlice from './reducers/appointmentSlice';
import userSlice from './reducers/userSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
        appointments: appointmentSlice,
    }
})

export default store;