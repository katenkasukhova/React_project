import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardComponent from './components/CardComponent';

function App() {
  return (
<div className="App d-flex flex-column min-vh-100">
<header className="bg-dark text-white py-3">
  <div className="container">
    <div className="row align-item-center">
      <div className="col">
        <span>
          <img src={logo} className="App-logo" alt="logo" style={{height: '40px'}}/>
          Мое приложение
        </span>
      </div>
    </div>
  </div>
</header>

<main className="container my-5">
<div className="row g-4">
  <div className="col-md-4">
    <CardComponent
    title = "Лягуха 1"
    imageUrl = "/images/frog1.webp"
    description = "Одна крутая лягуха"
    imageAlt = "лягуха 1"/>
  </div>

   <div className="col-md-4">
    <CardComponent
    title = "Лягуха 2"
    imageUrl = "/images/frog3.webp"
    description = "Две крутые лягухи"
    imageAlt = "лягуха 2"/>
  </div>

   <div className="col-md-4">
    <CardComponent
    title = "Лягуха 3"
    imageUrl = "/images/frog5.png"
    description = "Три крутые лягухи"
    imageAlt = "лягуха 3"/>
  </div>
</div>
</main>

<footer className="bg-secondary py-3 mt-auto">
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
  )
}

export default App;
