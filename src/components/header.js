import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md mt-3">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" href="#home">Home</Link>
                                </li>
                                <li className="nav-item ms-4">
                                    <Link className="nav-link" href="#skills">Skills</Link>
                                </li>
                                <li className="nav-item ms-4">
                                    <Link className="nav-link" href="#projects">Projects</Link>
                                </li>
                                <li className="nav-item ms-4">
                                    <Link className="nav-link" href="#contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route path="/skills">

                    </Route>
                    <Route path="/projects">

                    </Route>
                    <Route path="/contact">

                    </Route>
                    <Route path="/">
                        
                    </Route>
                </Switch>
            </div>

        );
    }
}

export default Header;