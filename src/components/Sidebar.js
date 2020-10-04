import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

import LOGO from '../assets/img/logo.svg'

import {IconDashboard, IconExit, IconHomeLink, IconSettings, IconBack, IconMenu} from "./icons";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }


    componentDidMount() {
        console.log(this.props.width)
    }

    toggleSidebar = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    closeSidebar = () => {
        if (this.props.width <= 920) {
            this.setState({isOpen: false})
        }
    }


    render() {
        const sidebarClass = this.state.isOpen ? 'sidebar sidebar-open shadow-left' : 'sidebar sidebar-close'

        return (
            <React.Fragment>
                {/*{this.props.width < 560?*/}
                <button onClick={this.toggleSidebar} className="change-dashboard custom-btn-rounded mt-4 mt-sm-5">
                    {this.state.isOpen ? <IconBack/> : <IconMenu/>}
                </button>
                {/*: ''}*/}
                <div className={sidebarClass}>
                    <div className="sidebar-content">
                        <NavLink onClick={this.closeSidebar} activeClassName={''} className={'LOGO'} to="/">
                            <img src={LOGO} className="mw-100" width="155" alt="PDP"/>
                        </NavLink>
                        <div className="sidebar-menu d-flex flex-column">
                            <NavLink onClick={this.closeSidebar} className="sidebar-menu-item" activeClassName={'active'} to="/dashboard">
                                <IconDashboard/> Dashboard
                            </NavLink>
                            <NavLink onClick={this.closeSidebar} className="sidebar-menu-item" activeClassName={'active'} to="/settings">
                                <IconSettings/> Sozlamalar
                            </NavLink>
                            <div className="mt-auto">
                                <NavLink className="sidebar-menu-item" activeClassName={''} to="/">
                                    <IconHomeLink/> Home pdp.uz
                                </NavLink>
                                <div className="sidebar-menu-item">
                                    <IconExit/> Chiqish
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Sidebar.propTypes = {};

export default Sidebar;
