import axios from "axios";

const URL = "http://localhost:4150/api/v1/route"

export const createUser = async(data: any) => {
    try {
        return await axios.post(`${URL}/createUser`, data).then((res)=> {
            return res.data.data
        });
    }
     catch (error) {
        console.log(error)
    }
};

export const signInUser = async(data:any) => {
    try {
        return await axios.post(`${URL}/signIn`, data).then((res)=> {
           return res.data.data
        })
    } 
     catch (error) {
        console.log(error)
    }
};

export const readOneUser = async(id: string)=> {
  try {
      return await axios.get(`/api/${id}/readOneUser`).then((res)=> {
        return  res.data.data
      });
  } 
  catch (error) {
    
  }
};