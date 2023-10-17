
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='bg-[#dfe6e9]'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;