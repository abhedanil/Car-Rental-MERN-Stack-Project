import React from 'react'
import NavBar from '../components/Navbar'
import {useSelector} from 'react-redux'

import FilterLayout from '../components/FilterLayout'
function FilterPage() {

    return (
        <div>
            <NavBar />
            <FilterLayout/>
        </div>
    )
} 
 
export default FilterPage
