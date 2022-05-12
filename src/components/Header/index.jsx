import React from "react";
import "./styles.css";
import "./footer.css";
import Home from "../Pages/Home";
import Login from "./../../components/Pages/Login";
import Register from "./../../components/Pages/Register";
import Listing from "./../../components/Pages/Listing";
import About from "./../../components/Pages/About";
import ContactUs from "./../../components/Pages/ContactUs";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
class ClassHeader extends React.Component{
    state ={
        currentUrl: window.location.pathname.replace("/",""),
    }
    async componentDidMount(){
        const pathname =  window.location.pathname.replace("/","");
        if (pathname == "") {
            this.setState({currentUrl: "Home"});
        }
    }
    
    render(){
        const {headers =[],headersRight} = this.props;
        return (
            <React.Fragment>
                <Router>
                    <nav className="navbar menu navbar-expand-lg  navbar-dark sticky-top">
                        <div className="nav-brand">
                            <img src="./logo192.png" alt="Brand Logo" width="50px" />
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto justify-content-center text-center mx-md-auto mx-0">
                                {headers.map((header, key) => {
                                    return <li key={key.toString()} className="nav-item">
                                        <Link className={this.state.currentUrl == header ? "nav-link active" : "nav-link"} to={header} 
                                            onClick={()=> this.setState({currentUrl: header})}>
                                            {header}
                                        </Link>
                                    </li>
                                })}
                            </ul>
                            <ul className="navbar-nav navbar-right">
                                {headersRight.map((menuRight, key) => {
                                    return <li key={key.toString()} className="nav-item">
                                        <Link className={this.state.currentUrl == menuRight ? "nav-link active" : "nav-link"} to={menuRight}
                                            onClick={()=> this.setState({currentUrl: menuRight})}>
                                            {menuRight}
                                        </Link>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </nav>
                    <Routes>
                       
                        <Route exact path='/' element={< Home />}></Route>
                        <Route exact path='/home' element={< Home />}></Route>
                        <Route exact path='/listing' element={< Listing />}></Route>
                        <Route exact path='/about' element={< About />}></Route>
                        <Route exact path='/contact' element={< ContactUs />}></Route>
                        <Route exact path='/login' element={< Login />}></Route>
                        <Route exact path='/register' element={< Register />}></Route>
                    </Routes>
                </Router>
                <footer className="footer">
                    <div className="footer-left col-md-4 col-sm-6">
                        <p className="about">
                            <span>The Ecommerce UP company is to previde smart shoping!</span> 
                            Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                            ultricies feugiat leo.
                        </p>
                        <div className="icons">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-linkedin" /></a>
                            <a href="#"><i className="fab fa-google-plus" /></a>
                            <a href="#"><i className="fab fa-instagram" /></a>
                        </div>
                    </div>
                    <div className="footer-center col-md-4 col-sm-6">
                        <div>
                            <i className="fa fa-map-marker" />
                            <p><span> Sorla #No 371-2004</span> Phom Penh, Cambodia</p>
                        </div>
                        <div>
                            <i className="fa fa-phone" />
                            <p> (+885) 010 202 622</p>
                        </div>
                        <div>
                            <i className="fa fa-envelope" />
                            <p> office@company.com</p>
                        </div>
                    </div>
                    <div className="footer-right mb-0 col-md-4 col-sm-6">
                        <h2>UP Ecommerce<span> <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'}  alt="" /> </span></h2>
                        <p className="menu">
                            <a href="#"> Home</a> |
                            <a href="#"> About</a> |
                            <a href="#"> Listing</a> |
                            <a href="#"> Contact Us</a> |
                            <a href="#"> Lign</a> |
                            <a href="#"> Register</a>
                        </p>
                        <p className="name"><b>UP Ecommerce © 2022</b></p>
                    </div>
                </footer>

            </React.Fragment>
        );
    }
}
export default ClassHeader;
