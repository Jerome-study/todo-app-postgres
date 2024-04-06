import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HomePage } from './pages/home';
import { DemoPage } from './pages/Demo';
import { SignInPage } from './pages/SignIn';
import { SignUpPage } from './pages/SignUp';

function App() {
  return(
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/demo' element={<DemoPage />} />
        <Route path='/signIn' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </>
  )
}

export default App
