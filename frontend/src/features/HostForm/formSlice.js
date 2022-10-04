import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import formService from './formService'

const initialState ={
    forms:[],
    isError:false,
    isSuccess: false,
    isLoading: false,
    message:''
}

//Apply form

export const applyForm = createAsyncThunk(
    'form/create',async(formData,thunkAPI)=>{

        try{
            const token = thunkAPI.getState().auth.user.token    
            return await formService.applyForm(formData,token)

        }catch(error){
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

export const applicationStatus = createAsyncThunk(
    'status/create',async(_,thunkAPI)=>{

        try{
            const token = thunkAPI.getState().auth.user.token    
            return await formService.applicationStatus(token)

        }catch(error){
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




export const formSlice = createSlice({

    name:'forms',
    initialState,
    reducers:{
        reset:(state) => initialState
    },
    extraReducers:(builder)=>{
        builder
            .addCase(applyForm.pending, (state)=>{
                state.isLoading =true;
            })
            .addCase(applyForm.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.forms=action.payload
              })
              .addCase(applyForm.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
              })
              .addCase(applicationStatus.pending, (state)=>{
                state.isLoading =true;
            })
            .addCase(applicationStatus.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.forms.push(action.payload)
              })
              .addCase(applicationStatus.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
              })
        
    
        }
})

export const {reset} = formSlice.actions
export default formSlice.reducer