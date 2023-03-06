import { Outlet } from 'react-router-dom';
import './index.scss';

const Layout = () =>
{
    return <div className='App page' id='pageWrap'>
        <Outlet />
    </div>
}

export default Layout;