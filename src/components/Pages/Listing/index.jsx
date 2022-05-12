import React, { Component } from 'react';

// create a component
class Listing extends React.Component {
    state = {
      index : 1,
      products : [],
      proTitle :'',
      proImage: '',
      proPrice: '',
      proDescription: '',
      category : '',
    }
    
    async componentDidMount(){
      const url = "./products.json";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({products: data});
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div>
                        <h2>Products Listing</h2>
                        <hr className="bg-warning pb-1" />
                    </div>
                    <div className="row mb-5">
                        {this.state.products.map((data) => (
                        <div className="col-md-3 mt-3" key={data.id}>
                            <div className="card">
                                <img className='card-img-top' src={data.image} height="220vh" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{data.title}</h5>
                                    <small className="text-warning"><b>Category: </b>{data.category}</small>
                                    <p className="card-text"><b>Price: </b><span className='text-danger'>${data.price}</span> 
                                    <a href="#" className='float-right' data-toggle="modal" data-target="#detail-modal"
                                    onClick={()=> this.setState({proTitle:data.title,proImage:data.image,proPrice:data.price,
                                        proDescription:data.description,category:data.category})}
                                    >More Detail</a></p>
                                    <a href="#" className="btn btn-primary form-control">Order Now</a>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div class="modal fade" id="detail-modal" tabindex="-1" role="dialog" aria-labelledby="detail-modalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="detail-modalLabel">Product Detail</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="text-center">
                                        <img src={this.state.proImage} alt="" width="100%" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <h5><b>Name: </b>{this.state.proTitle}</h5>
                                    <p><b>Category: </b><small className="text-warning">{this.state.category}</small></p>
                                    <p><b>Price: </b><span className='text-danger'>${this.state.proPrice}</span></p>
                                    <p><b>Description: </b>{this.state.proDescription}</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Listing;
