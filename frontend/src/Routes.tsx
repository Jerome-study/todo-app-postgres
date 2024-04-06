import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from './pages/home';
import { DemoPage } from './pages/Demo';
import { SignInPage } from './pages/SignIn';
import { SignUpPage } from './pages/SignUp';
import { UserHomePage } from './pages/Protected/User';
import { ProfilePage } from "./pages/Protected/Profile";

export const PathRouter = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/demo' element={<DemoPage />} />
                <Route path='/signIn' element={<SignInPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/user' element={<UserHomePage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='*' element={<Navigate to={"/404"}/>}/>
                <Route path='/404' element={<a href="/user">Redirect</a>} />  
            </Routes>
        </>
    )
}
