import logo from './logo.svg';
import './App.css';
import AddForm from './components/AddForm';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import AddSearch from './components/AddSearch';
import AddHome from './components/AddHome';
import AddDeals from './components/AddDeals';

function App() {
  return (
  <BrowserRouter>
  <Routes>
<Route  path='/' element={<AddForm/>}/>
<Route path='/search' element={<AddSearch/>}/>
<Route path='/home' element={<AddHome/>}/>
<Route path='/deals' element={<AddDeals/>}/>
  </Routes>
  
  
  
  </BrowserRouter>
  );
}

export default App;
