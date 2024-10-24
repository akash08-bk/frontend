//import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home'
import View from './Pages/View'
import Update from './Pages/Update'
import Create from './Pages/Create'
import Delete from './Pages/Delete'



function App() {
  return (
    <div >
      
      <BrowserRouter>
        <NavBar/>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/update' element={<Update/>} />
            <Route path='/view' element={<View/>} />
            <Route path='/delete' element={<Delete/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
