import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    appointments: [],
    status: 'pending', //succesful, failed
    error: null
}

const baseURL = 'https://jons-appointments-scheduler.herokuapp.com/api/v1';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTdlOWYzMDg5ZmU4NTdiNTk4ZDFlNyIsImZpcnN0TmFtZSI6ImpvbiIsImVtYWlsIjoiam9uZGV4dGVyMjBAZ21haWwuY29tIiwiaWF0IjoxNjUxMTMyMjIyLCJleHAiOjE2NTEzMDUwMjJ9.iyY75e4b_qtjYUxfIh6uQn5_G4JpLY8tgcwni-baI_o'
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export const fetchAllAppointments = createAsyncThunk('appointments/fetchAppointments', async() => {
    try {
        const response = await axios.get(`${baseURL}/appointments`, config);
        return response.data
        
    } catch (error) {
        return error.message
    }
})


const appointmentSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
        builder.addCase(fetchAllAppointments.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(fetchAllAppointments.rejected, (state, action)=> {
            state.status = 'failed'
            state.error = action.error.message;
            console.log(action.error.message)
        })
        builder.addCase(fetchAllAppointments.fulfilled, (state, action)=>{
            state.status = 'successful';
            console.log(action)
            state.appointments = action.payload.data;
        })
    }
});



export default appointmentSlice.reducer
