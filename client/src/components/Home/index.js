import React from 'react';
import Dashboard from '../Dashboard';
import Loader from 'react-loaders';
import './index.scss';

const Home = () =>
{
    return (
        <>
            <div className='home-page page2'>
                <Dashboard />
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}

export default Home