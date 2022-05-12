import React, { Component } from 'react';

// create a component
class Home extends React.Component {
    state = {
      index : 1,
      products : []
    }
    async componentDidMount(){
      const url = "./products-limit8.json";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({products: data});
    }
    render() {
        return (
            <React.Fragment>
            <div className='banner'>
                <img src="./banner-bg.jpg"  width='100%' alt="" />
            <div className='container mt-3'>
                <div className='row'>
                <div className='col-md-12'>
                    <div className='caption'>
                    <h2>Tos Shopping Now !!</h2>
                    <div class="line-dec"></div>
                    <p>Pixie HTML Template can be converted into your desired CMS theme. Total <strong>5 pages</strong> included. You can use this Bootstrap v4.1.3 layout for any CMS. 
                    </p>
                    <div className='main-button'>
                        <a href="# form-control">Order Now!</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                <div className="col-sm-3 col-md-4 ">
                <div className='card' >
                    <img className='card-img-top' src="./images/m1.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Special closth</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary form-control">Order Now</a>
                    </div>
                </div>
                </div>
                <div className="col-sm-3 col-md-4 ">
                <div className="card" >
                    <img className='card-img-top' src="./images/m1.jpg" width='250px' alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Special closth</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary form-control">Order Now</a>
                    </div>
                </div>
                </div>
                <div className="col-sm-3 col-md-4 ">
                <div className="card" >
                <img className='card-img-top' src="./images/m1.jpg" width='250px' alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Special closth</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary form-control">Order Now</a>
                    </div>
                </div>
                </div>
                </div>
                <div className="row mt-3">
                <div className="col-sm-3 col-md-4 ">
                <div className='card' >
                <img className='card-img-top' src="./images/m1.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Special closth</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary form-control">Order Now</a>
                    </div>
                </div>
                </div>
                <div className="col-sm-3 col-md-4 ">
                <div className="card" >
                <img className='card-img-top' src="./images/m1.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Special closth</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary form-control">Order Now</a>
                    </div>
                </div>
                </div>
                <div className="col-sm-3 col-md-4 ">
                <div className="card" >
                <img className='card-img-top' src="./images/m1.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Special closth</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary form-control">Order Now</a>
                    </div>
                </div>
                </div>
                </div>
               
            </div>
            <div id="carouselExampleIndicators" class="carousel slide mt-5" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block " width="100%" height="100%" src="./images/m1.jpg" alt="Max-width 50%"/>
    </div>
    <div class="carousel-item">
      <img class="d-block "  width="100%" height="100%" src="./images/m1.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block h-100"  width="100%" height="100%" src="./images/m1.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div className="mt-5"></div><br /><br />
            </React.Fragment>
        );
    }
}

export default Home;
