import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Fragment>
            <div className="navbar">
                <Link to='/' style={{ textDecoration: 'none' }}>
                <h1 style={{marginLeft:"20px", color:"white"}}><i className='fa fa-pencil' />
                    Blog</h1>
                    </Link>
            </div>
        </Fragment>
    )
}

export default NavBar;