
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <div className='w-4/5 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Root;