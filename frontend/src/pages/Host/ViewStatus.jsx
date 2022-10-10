import React,{useEffect,useState} from 'react'
import ApplyNav from './ApplyNav'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Card from "@mui/material/Card";
function ViewStatus() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const [Status, setStatus] = useState(null);

    const {forms,isLoading,isError,isSuccess,message} =useSelector(
        (state)=> state.forms)
        console.log(forms[0])
        const form=forms[0]
  return (
    <div>
        <ApplyNav/>
        <div>
            <Card>

            <h3> Your Application is {form.status}</h3>
            </Card>
        </div>
    </div>
  )
}

export default ViewStatus
