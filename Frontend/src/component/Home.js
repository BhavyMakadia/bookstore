import React from 'react'
import backgroundImage from './bgimage.jpg'; 
import b1 from'./1.jpg';
import b2 from'./2.jpg';
import b3 from'./3.jpg';



export default function Home() {
  return (
    <div className='text-center my-5'  style={{ paddingBottom: '50px' }}>
     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={b1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={b2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={b3} alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    <h1 >
    WELCOME TO NEW BOOK STORE
    </h1>
    
    <div className="container text-center p-10">
      <h1>Welcome to Our Bookstore</h1>
      <p>Explore our vast collection of books covering various genres.</p>
     
      
    </div>
    </div>
  )
}
