import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='bg-[#dfe6e9]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;