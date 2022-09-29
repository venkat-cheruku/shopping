import { createSlice } from "@reduxjs/toolkit";

const registartionSlice = createSlice({
  name: 'registartionSlice',
  initialState:{  
    firstName:"",
    middleName:"",
    lastName:"",
    email:"",
    contact:"",
    password:"",
    gender:"",
    userdetails:""
    
  },
  reducers:{
      updateFirstName:(state,action) => {
        state.firstName= action.payload;
    },
    updateMiddleName:(state,action) => {
        state.middleName= action.payload;
    },
    updateLastName:(state,action) => {
       
        state.lastName= action.payload;
    },
    updateEmail:(state,action) => {
        state.email= action.payload;
    },
    updateContact:(state,action) => {
        state.contact= action.payload;
    },
    updatePassword:(state,action) => {
        state.password= action.payload;
    }
    ,updateGender:(state,action) => {

        state.gender= action.payload;
        },
        updateuserDetails:(state,action) => {

            state.gender= action.payload;
            },
  }
});
export const { 
    updateFirstName,updateMiddleName,updateLastName,updateEmail,
    updateContact,updatePassword,updateGender,updateuserDetails
 } = registartionSlice.actions;


export default registartionSlice.reducer;