import {configureStore} from '@reduxjs/toolkit';
import appointmentSlice from './reducers/appointmentSlice';

const store = configureStore({
    reducer: {
        appointments: appointmentSlice,
    }
})

export default store;