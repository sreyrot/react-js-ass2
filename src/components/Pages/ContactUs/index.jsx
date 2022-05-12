import React, { Component } from 'react';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
        };
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Name cannot be empty";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Name is only letters";
            }
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Email cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf("@");
            let lastDotPos = fields["email"].lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    fields["email"].indexOf("@@") == -1 &&
                    lastDotPos > 2 &&
                    fields["email"].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }
        if (!fields["des"]) {
            formIsValid = false;
            errors["des"] = "Description annot be empty";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }
    state = {
        name: '',
        email: '',
        des: '',
        send: false,
    }

    //handleChange function
    handleChange = (field, e) => {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    handleClick = (e) => {
        e.preventDefault();
        if (this.handleValidation()) {
            this.setState({ send: true })
        } else {
            alert("Form has errors.");
        }

    }

    // reset form
    handReset = () => {
        this.form.reset()
    }
    render() {
        return (
            <React.Fragment>
                <div className='container mt-3'>
                    <div>
                        <h2>Contact Us</h2>
                        <hr className="bg-warning pb-1" />
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="card-header bg-secondary text-white">
                            Fill In Your Information
                        </div>
                        <div className="card-body">
                            <form action="#" ref={form => this.form = form}>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="Name">Name</label>
                                            <input refs="name" type="text" placeholder='Name' onChange={this.handleChange.bind(this, "name")} name='name'
                                                 className='form-control' />
                                            <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                                            <br />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="Email">Email</label>
                                            <input refs="email" type="email" required name='email' onChange={this.handleChange.bind(this, "email")}
                                                 placeholder='Email' className='form-control' />
                                            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Description">Description</label>
                                    <textarea refs="des" name="des" id="" cols="30" onChange={this.handleChange.bind(this, "des")}
                                         placeholder='Description' rows="3" className='form-control'></textarea>
                                </div>
                                <div>
                                    <span style={{ color: "red" }}>{this.state.errors["des"]}</span>
                                    <br />
                                </div>
                            </form>
                            <button type='submit' onClick={this.handleClick.bind(this)} className="btn btn-primary mt-3 float-right" name='send' >Send</button>
                            <button type="reset" onClick={this.handReset} id='reset' className="btn btn-danger mt-3 " name='reset' >Reset</button>

                        </div>
                    </div>
                    <div className='mt-3'>
                        {this.state.send &&
                            <Credentials
                                name={this.state.fields['name']}
                                email={this.state.fields['email']}
                                des={this.state.fields['des']}
                            />
                        }
                    </div>
                    <div className="row mt-5 ml-1">
                        <div className="card">

                            <div className="card-body">
                                <h3>Google Maps</h3>
                                <hr className="bg-warning pb-1" />
                                <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500303.085000378!2d104.60999121086633!3d11.579229527318157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1648719659550!5m2!1sen!2skh" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const Credentials = ({ name, email, des }) => {
    return (
        <div className='card'>
            <div className='card-header bg-success text-white'>
                Your Information
            </div>
            <div className='card-body'>
                <p><b>Name is:</b> {name}</p>
                <p><b>Email is:</b> {email}</p>
                <p><b>Description is:</b> {des}</p>
            </div>
        </div>
    )
}
export default ContactUs;
