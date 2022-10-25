import { createSlice} from '@reduxjs/toolkit'

const initialState={
    dates:[]
}



export const DateAndPlaceReducer = createSlice({
    name:'datesAndPlace',
    initialState,
    reducers:{
        setDateAndPlace:(state,action)=>{
            console.log(action.payload,"inside setdateslice")
        
            state.dates.push(action.payload)
            localStorage.setItem('districtName',JSON.stringify(action.payload))
          
        },
        reset:(state)=>{
        
        }
    }, 
})

export const {setDateAndPlace,reset } = DateAndPlaceReducer.actions
export default DateAndPlaceReducer.reducer