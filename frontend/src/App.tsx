import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Layout } from './Layout';

function App() {
  return(
    <>
      <ToastContainer />
      <Layout />
    </>
  )
}

export default App
