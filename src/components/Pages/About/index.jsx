import React, { Component } from 'react';

// create a component
class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <h1 className="text-center">ReactJS Group 4</h1>
                    <h2 className="text-center">UP2022 Web Programming</h2>
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <div className="card text-center">
                                <img className='card-img-top' src="./sreyrot.jpg" width='250px' alt="Srey Roth Profile"/>
                                <div className="card-body">
                                    <h5 className="card-title">Member</h5>
                                    <p className="card-text">Ms.Srey Roth ON</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center">
                                <img className='card-img-top' src="./sinat.jpg" width='250px' alt="Sinat Profile"/>
                                <div className="card-body">
                                    <h5 className="card-title">Team Leader</h5>
                                    <p className="card-text">Ms.Sinat NANG</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center">
                                <img className='card-img-top' src="./bunsin.jpg" width='250px' alt="Bunsin Profile"/>
                                <div className="card-body">
                                    <h5 className="card-title">Member</h5>
                                    <p className="card-text">Mr.Bunsin NANH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;
