import React from 'react'
import ApplyNav from './ApplyNav'
import ApplyForm from './ApplyForm';

import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

function HostApply() {

 const  dispatch = useDispatch()
 const {user}= 
 useSelector(
     (state)=> state.auth
 )


  return (
    <>
        <ApplyNav/>
        <ApplyForm/>
    </>
  )
}

export default HostApply
