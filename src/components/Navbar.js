import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid" >
                    <a className="navbar-brand" href="#">Praduman Sharma</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup" >
                        <div className="navbar-nav">
                            <a className="nav-link active" href="#">About</a>
                            <a className="nav-link" href="#">Projects</a>
                            <a className="nav-link" href="#">Skills</a>
                            <a className="nav-link" href="#">Contact</a>
                        </div>
                    </div>
         
            </div>
        </nav>
    )
}

export default Navbar