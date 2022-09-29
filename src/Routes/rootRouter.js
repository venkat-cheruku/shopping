import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/login";
import Registration from "../pages/Registration/Registration";
import Dashbaroad from "../pages/Dashbaroad/Dashbaroad";
import Cart from "../pages/Cart/cart";
import Header from '../components/Header';
import Profile from "../pages/Profile/profile";
const rootRouter = () => {
    return (
        <BrowserRouter>
              <Header/>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/dashbaroad" element={<Dashbaroad />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />


            </Routes>
        </BrowserRouter>
    )

}


export default rootRouter;