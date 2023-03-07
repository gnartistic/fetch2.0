import React from 'react'
import Loader from 'react-loaders'
import Login from '../Login'

const Fetch = () =>
{
    return (
        <>
            <div className='page'>
                <Login />
                <Loader type="ball-pulse-sync" />
            </div>
        </>
    )
}

export default Fetch