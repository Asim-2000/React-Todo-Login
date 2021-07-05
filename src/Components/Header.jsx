import React from 'react'
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
const Header = () => {


    return (
          <div className="container">
            <div className="row">
              <div className="col-md-10 ">
                <h1 className="header text-right"> Asim's ToDo List</h1>
              </div>
                <div className="col-md-2 pt-5">
                <Link to="/" className="btn btn-danger">
                  Logout
                </Link>
              </div>
            </div>
          </div>
    );
}

export default withRouter(Header);