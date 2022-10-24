import axios from 'axios'

const API_URL = '/api/users'

const searchCar = async (districtName)=>{
    console.log(districtName,"innnnnnnnnnnnnnnn")
    const response = await axios.post(API_URL +'/searchCars',districtName)
    console.log(response,"55555555555")
  
    return response.data.cars
}

const searchCarService ={
    searchCar
}

export default searchCarService