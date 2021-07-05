
import React from 'react';

import {Redirect} from 'react-router-dom'
const Login = ({loginhandler,inputName,inputpassword,nameChangeHandler,passwordChangeHandler,redirect}) => {

   
    return (
      <div>
        {redirect ? (
          <Redirect to="/todo" />
        ) : (
          <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
              <h2 className="header">Sign in to your account</h2>
              <div className="form-container col-md-6">
                <form className="login-form" onSubmit={loginhandler}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      className="login-input"
                      value={inputName}
                      name="name"
                      type="text"
                      onChange={nameChangeHandler}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>

                    <input
                      value={inputpassword}
                      name="password"
                      type="password"
                      onChange={passwordChangeHandler}
                    />
                  </div>
                  <div className="text-center">
                    <button className="submit-btn" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default Login;