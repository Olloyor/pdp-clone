import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from "reactstrap";
import {IconNotification, IconUser} from "./icons";

class Navbar extends Component {

    render() {
        return (
            <div className="layout-header">
                <Row className="mt-4 mt-sm-5 mb-3">
                    <Col xs={12} lg={5}  className="offset-lg-7">
                        <div className="d-flex float-right align-items-center h-100">
                            <div className="d-flex align-items-center">
                                <h5 style={{fontSize:'1.6rem'}} className="font-family-medium mb-0 mr-3">Odilbek Mirzayev</h5>
                                <button className="custom-btn-rounded">
                                    <IconUser/>
                                </button>
                                <button className="ml-3 ml-sm-4 custom-btn-rounded">
                                    <IconNotification/>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

Navbar.propTypes = {};

export default Navbar;
