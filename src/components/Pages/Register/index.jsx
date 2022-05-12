import React from "react";

class Register extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h2 className="text-center">Register</h2>
                                </div>
                                <div className="card-body">
                                    <form action="#">
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" id="username" className="form-control" placeholder="Username"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" className="form-control" placeholder="Email Login"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" id="password" className="form-control" placeholder="Password"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirm-password">Confirm Password</label>
                                            <input type="password" id="confirm-password" className="form-control" placeholder="Confirm Password"/>
                                        </div>

                                        <div className="form-group">
                                            <button type="reset" className="btn btn-secondary">Cancel</button>
                                            <button type="button" className="btn btn-success float-right">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;