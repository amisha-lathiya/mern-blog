import {createSlice,createAsyncThunk}  from '@reduxjs/toolkit'
import axios from 'axios';
export const AddUser=createAsyncThunk('addUser',async(data)=>{
   const response= await axios.post("http://localhost:8000/v1/api/auth/singIn",data);
   console.log(response);
   return response.data;
})

export const GetUser=createAsyncThunk('getUser', async () =>{
    const response =await axios.get("http://localhost:8000/v1/api/auth/getData");
    console.log(response)
    return response.data
})
const initialState = {
   user:[],
   loading:false,

  };
  
  export const SingUser =createAsyncThunk('singUser',async(data)=>{
  const response = await axios.post("http://localhost:8000/v1/api/auth/login",data);
  console.log(response.data);
  return response.data;
  })
export const userSlice=createSlice({
    name:'user',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(GetUser.fulfilled,(state,action)=>{
            console.log(action.payload);
        state.loading=true;
        state.user=action.payload;
        })
    }
    
})

export default userSlice