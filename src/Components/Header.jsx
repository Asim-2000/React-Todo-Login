import React from 'react';

const Header = () => {


    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 ">
            <h1 className="header text-right"> Asim's ToDo List</h1>
          </div>
          <div className="col-md-2 pt-5">
            <a
              href="/"
              className="btn btn-danger"
            >
              Logout
            </a>  
          </div>
        </div>
      </div>
    );
}

export default Header;