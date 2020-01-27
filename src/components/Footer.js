import React from 'react';

const Footer = () => {
    return (
    <footer>
    <div className="container">
        <div className="row">
        <div className="col-md-12">
            <div className="primary-button">
            <a href="#home">Back To Top</a>
            </div>
            <ul>
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
            <li><a href="#"><i className="fa fa-google" /></a></li>
            <li><a href="#"><i className="fa fa-dribbble" /></a></li>
            </ul>
            <p>Copyright © 2020 Company Name 
            - Created By: <a rel="nofollow noopener" href="https://github.com/rodolphe37?tab=repositories"><em>Rodolphe Augusto</em></a></p>
        </div>
        </div>
    </div>
    </footer>

    )
}

export default Footer;
