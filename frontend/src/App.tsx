import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { PathRouter } from './Routes';

function App() {
  return(
    <>
      <ToastContainer />
      <PathRouter />
    </>
  )
}

export default App
