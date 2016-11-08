import React, {Component} from 'react';
import {Link} from 'react-router';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar-collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">Asyn Loading</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="main-navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/dashboard" activeClassName="active">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/admin" activeClassName="active">Admin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

NavBar.contextTypes = {
    router: React.PropTypes.object
};
