import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    appointments: [],
    status: 'pending', //succesful, failed
    error: null
}

const baseURL = 'https://jons-appointments-scheduler.herokuapp.com/api/v1';
const token = localStorage.getItem('user_token')
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
console.log(config)

export const fetchAllAppointments = createAsyncThunk('appointments/fetchAppointments', async() => {
    try {
        const response = await axios.get(`${baseURL}/appointments`, config);
        return response.data
        
    } catch (error) {
        return error.message
    }
})

export const addAppointment = createAsyncThunk('appointments/addAppointment', async(appointmentData)=>{
    console.log(appointmentData)
    try{
        const response = await axios.post(`${baseURL}/appointments/add`, appointmentData, config);
        console.log(response)
        return response
    }catch(error){
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
            // console.log(action)
            state.appointments = action.payload.data;
        })

        builder.addCase(addAppointment.rejected, (state, action)=>{
            state.status = 'rejected';
            state.error = action.payload
        })
        builder.addCase(addAppointment.fulfilled, (state, action)=>{
            state.status ='successful';
            console.log(action)
        })
    }
});



export default appointmentSlice.reducer
