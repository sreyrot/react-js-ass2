import React from "react";

class Login extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h2 className="text-center">Login</h2>
                                </div>
                                <div className="card-body">
                                    <form action="#">
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <input type="email" id="username" className="form-control" placeholder="Username"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" id="password" className="form-control" placeholder="Password"/>
                                        </div>

                                        <div className="form-group">
                                            <button type="reset" className="btn btn-secondary">Cancel</button>
                                            <button type="button" className="btn btn-success float-right">Login</button>
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

export default Login;