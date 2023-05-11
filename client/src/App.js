import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import Logout from './components/Logout';
import ViewProduct from './components/ViewProduct';
import RatingReview from './components/RatingReview';
import { ErrorPage } from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path="/registrations" element={<Registration/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/logout' element={<Logout/>}></Route>
        <Route  path="/views/:id" element={<ViewProduct/>}></Route>
        <Route  path="/comments/:id" element={<RatingReview/>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
