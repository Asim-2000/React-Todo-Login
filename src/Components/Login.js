
import React from 'react';

import {Redirect} from 'react-router-dom'
const Login = ({loginhandler,inputName,inputpassword,nameChangeHandler,passwordChangeHandler,redirect}) => {

   
    return (
      <div>
        {redirect ? (
          <Redirect to="/todo" />
        ) : (
                    <div>
                        <h2 className='header'>Sign in to your account</h2>
            <form className="login-form" onSubmit={loginhandler}>
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <input
                  value={inputName}
                  name="name"
                  type="text"
                  onChange={nameChangeHandler}
                />
              </div>

              <div className="form-control">
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
        )}
      </div>
    );
}

export default Login;