import React, { Component } from 'react';
import Form from './Form';
import Header from './Header';
import './sass/SignIn.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: ''
        };
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        this.setState({ email: '', password: '' });
      };
    
      handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };
    
    render() {
        return (
            <div className='SignIn'>
                <Header />
                <div className='sign-in-and-sign-up'>
                <div className='sign-in'>
                    <h2 className='title'>I already have an account</h2>
                    <span className='sub-title'>Sign in with your email and password</span>

                    <form onSubmit={this.handleSubmit}>
                    <Form
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <Form
                        name='password'
                        type='password'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <button className='custom-button' >
                        Sign In
                        </button>
                        <button className='google-button' >
                        Sign In With Google
                        </button>
                    </div>
                    </form>
                </div>
                <div className='sign-up'>
                    <h2 className='title'>I do not have a account</h2>
                    <span className='sub-title'>Sign up with your email and password</span>
                    <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <Form
                        type='text'
                        value='name'
                        onChange={this.handleChange}
                        required
                    />
                    <Form
                        type='email'
                        value='email'
                        onChange={this.handleChange}
                        required
                    />
                    <Form
                        type='password'
                        name='password'
                        value='password'
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <Form
                        type='password'
                        name='confirmPassword'
                        value='confirmPassword'
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <button className='custom-button'>
                       SignUp
                    </button>
                 </form>
                </div>
                </div>
            </div>
        );
    }
}

export default SignIn;