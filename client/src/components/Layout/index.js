import { Outlet } from 'react-router-dom';

const Layout = () =>
{
    return <div className='App page' id='pageWrap'>
        <Outlet />
    </div>
}

export default Layout;