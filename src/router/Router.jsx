import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home'
import User from '../components/user/User';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:userId" element={<User />}></Route>
        </Routes>
    );
};

export default Router;
