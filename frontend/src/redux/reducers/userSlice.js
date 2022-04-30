import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";


const initialState = {
    isLoggedIn: false,
    status: 'Pending', // Rejected, Login failled, Login successful
    user: {}, //{data: ... token:..}
    error: null,
}

const baseURL = 'https://jons-appointments-scheduler.herokuapp.com/api/v1';

// const config = {
//     headers: { Authorization: `Bearer ${token}` }
// };

export const signInUser = createAsyncThunk('user/signIn', async(userData)=> {
    try {
        const response  = await axios.post(`${baseURL}/signin`, userData)
        // console.log(response)
        return {data:response.data.data, status:response.status};      
    } catch (error) {
        // console.log(error.response)
        return {message:error.response.data.message, status:error.response.status};
        
    }
    
});

export const signUpUSer = createAsyncThunk('user/signup', async(userData)=>{
    try {
        const response = await axios.post(`${baseURL}/register`, userData);
        console.log(response)
        return {token:response.data.token, status:response.status};   
    } catch (error){
        return {message:error.response.data.message, status:error.response.status};
    }
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action)=>{
            console.log(action)
            state.isLoggedIn = true;
            state.user = {data: action.payload.user, token:action.payload.userToken}
            state.status = 'Login successful'
        },
        logOutCurrentUser: (state) => {
            localStorage.clear();
            state.isLoggedIn = false;
            state.user ={};
            state.status = 'Pending'
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(signInUser.pending, (state, action)=>{
            state.status = 'Pending'
        })
        builder.addCase(signInUser.rejected, (state, action)=>{
            console.log(action)
            state.status = 'Rejected';
            // state.error = action.payload.error.message
        })
        builder.addCase(signInUser.fulfilled, (state, action)=>{
            console.log(action)
            // fulfiled is true even if user's credentials not true
            if(action.payload.status === 200){
                state.status = 'Login successful'
                state.user = {token:action.payload.data.token, data: jwtDecode(action.payload.data.token)}
                state.error = null;
                state.isLoggedIn = true;
                // then save user  token to localstorage
                localStorage.setItem('user_token', action.payload.data.token)
                // navigate to home page
                // return 'okay'
                
            } else if (action.payload.status === 401){
                console.log(action)
                state.status = 'Login failled'
                state.error = action.payload.message
            }
        })

        builder.addCase(signUpUSer.rejected, (state, action)=> {
            state.error = action.payload.message
            state.status = 'Rejected'
        })
        builder.addCase(signUpUSer.fulfilled, (state, action)=>{
            if(action.payload.status === 401){
                state.status = 'Login failled'
                state.error = action.payload.message
            }
            else if (action.payload.status === 200){
                state.status = "Account created successfully"
                state.user = { token: action.payload.token,  data: jwtDecode(action.payload.data.token)}
                // store user to localstorage
                localStorage.setItem('user_token', action.payload.token)
                state.isLoggedIn = true;
            }
        })
    }

});

export const {setCurrentUser, logOutCurrentUser } = userSlice.actions;

export default userSlice.reducer;