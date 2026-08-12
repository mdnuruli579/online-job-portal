import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AppRoute from './AppRoute';
import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
    <AppRoute/>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
    />
   </BrowserRouter>
  );
}

export default App;
