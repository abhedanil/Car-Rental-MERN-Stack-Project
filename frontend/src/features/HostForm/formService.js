import axios from 'axios'
 
const API_URL = '/api/application/'

//apply form

const applyForm = async (formData,token)=>{
    const config ={
        headers :{
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL +'newApplicationform', formData,config)
    return response.data
}

const applicationStatus =async(token)=>{
    const config ={
        headers:{
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.get(API_URL+'getStatus',config)
    return response.data
}

const formService={
    applyForm,
    applicationStatus
}

export default formService