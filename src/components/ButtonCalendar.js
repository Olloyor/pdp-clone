import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {IconCalendar} from "./icons";

class ButtonCalendar extends Component {
    render() {
        return (
            <button className="float-right custom-btn-rounded">
                <IconCalendar/>
            </button>
        );
    }
}

ButtonCalendar.propTypes = {};

export default ButtonCalendar;
