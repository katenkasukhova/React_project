import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardComponent from './components/CardComponent';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardsPage from './pages/CardsPage';
import TablePage from './pages/TablePage';
import PeoplePage from './pages/PeoplePage';
import DescriptionPage from './pages/DescriptionPage';
import FormPages from './pages/FormPage';
import FormPage from './pages/FormPage';
import MapsPage from './pages/MapsPage';
import UsersPage from './pages/UsersPage';
import TypeScript from './pages/TypeScript';
import CalculatePage from './pages/CalculatePage';

function App() {
  return (
    <Router>
<div className="App d-flex flex-column min-vh-100">

<header className="text-white py-3" style={{backgroundColor: 'rgb(0, 30, 10)'}}>
  <div className="container">
    <div className="row align-item-center">

      <div className="col-md-6">
        <span>
          <img src={logo} className="App-logo" alt="logo" style={{height: '40px'}}/>
          Мое приложение
        </span>
      </div>

      <div className="col-md-6 text-end">
        <Link to="/" className="text-white text-decoration-none me-3">Main Page</Link>
        <Link to="/cards" className="text-white text-decoration-none me-3" >Lyaguhi</Link>
        <Link to="/table" className="text-white text-decoration-none me-3">Table page</Link>
        <Link to="/human" className="text-white text-decoration-none me-3">stuff</Link>
        <Link to="/description" className="text-white text-decoration-none me-3">description</Link>
        <Link to="/form" className="text-white text-decoration-none me-3">form</Link>
        <Link to="/maps" className="text-white text-decoration-none me-3">maps</Link>
        <Link to="/users" className="text-white text-decoration-none me-3">users</Link>
        <Link to="/typescript" className="text-white text-decoration-none me-3">TS</Link>
        <Link to="/calc" className="text-white text-decoration-none me-3">calc</Link>
      
      </div>

    </div>
  </div>
</header>

<main className="container my-5">
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/cards" element={<CardsPage/>}/>
  <Route path="/table" element={<TablePage/>}/>
  <Route path="/human" element={<PeoplePage/>}/>
  <Route path="/description" element={<DescriptionPage/>}/>
  <Route path='/form' element={<FormPage/>}/>
  <Route path='/maps' element={<MapsPage/>}/>
  <Route path='/users' element={<UsersPage/>}/>
  <Route path='/typescript' element={<TypeScript/>}/>
  <Route path='/calc' element={<CalculatePage/>}/>
</Routes>
</main>

<footer className="py-3 mt-auto" style={{backgroundColor: 'rgba(2, 114, 1)'}}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col">
        <span>
          2025, курсы по frontend'y
        </span>
      </div>
  </div>
  </div>

</footer>
</div>
</Router>
  )
}

export default App;
