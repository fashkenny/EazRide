import { createSlice } from '@reduxjs/toolkit'


interface iData {
    _id?: string;
    email?: string;
    password?: string;
    userName?: string;
    avatar?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: string;
}


interface iDataII{
    _id: string;
}


const initialState = {
    user: null || {} as iDataII
}

const authGlobal = createSlice({
  name: "authState",
  initialState,
  reducers: {
    createUser: (state:any, {payload}:any) => {
        state.user = payload
    },
    logInUserGlobal: (state:any, {payload}:any) => {
      state.user = payload
    }
  }
});

export const {createUser, logInUserGlobal} = authGlobal.actions

export default authGlobal.reducer