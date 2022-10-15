import axios from 'axios'

const API_URL = '/api/users'

const searchCar = async (districtName)=>{
    
    const response = await axios.post(API_URL +'/searchCars', districtName)
    console.log(response)
    console.log(response.data.cars)
    return response.data.cars
}

const searchCarService ={
    searchCar
}

export default searchCarService