import { accordionActionsClasses } from '@mui/material'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import searchCarService from './searchCarService'

const initialState = {
    searchCars:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const SearchCars = createAsyncThunk(

    'cars/create', async (districtName,thunkAPI) => {
        console.log("inside car Search slice")
        console.log(districtName,"iiiiiiiiiiiiiiiiiiiiiinnnnnnnnn")

        try {
            console.log("inside car Search slice  try")

            return await searchCarService.searchCar(districtName)

        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const searchCarSlice = createSlice({

    name: 'cars',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(SearchCars.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(SearchCars.fulfilled, (state,action) => {
            
                state.isLoading=false
                state.isSuccess=true
                state.searchCars.push(action.payload)
            })
            .addCase(SearchCars.rejected, (state,action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })



    }
})


export default searchCarSlice.reducer