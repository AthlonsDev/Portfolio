import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

const myCarouselElement = document.querySelector('#mainCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav
            ">
              <li class="nav-item">
                <a class="nav-link" href="#">Mobile Apps</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Web Apps</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Softwares</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Designs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="App-header justify-content-center">
        <h1>Portfolio</h1>
        <p>
          This is my portfolio.
        </p>
        <p>
          I am a software developer.
        </p>
        <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={require("./images/europa1.jpg")} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={require("./images/triton1.jpg")} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={require("./images/triton2.jpg")} class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
