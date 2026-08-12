import AppRoute from './AppRoute';
import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
    <AppRoute/>
   </BrowserRouter>
  );
}

export default App;
