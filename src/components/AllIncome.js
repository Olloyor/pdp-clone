import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {IconCalendar} from "./icons";
import ButtonCalendar from "./ButtonCalendar";
import {Spinner} from "./Spinner";

class AllIncome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moneyType: "ALL"
        }
    }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        // console.log(e.target.name)
        // console.log(e.target.value)
    }

    render() {
        const {commonIncome, loading} = this.props;

        return (
            loading ? <Spinner /> :
                <div className="statistic">
                    <div className="row">
                        <div className="col-6 col-md-5">
                            <h5 className="statistic-title">Umumiy tushum. Barcha tiplar bo’yicha</h5>
                        </div>
                        <div className="col-6 col-sm">
                            <select onChange={this.handleChange} className="form-control select-box"
                                    value={this.state.moneyType} name="moneyType" id="selectEx">
                                <option className="select-box-item" value="ALL">Barchasi</option>
                                <option className="select-box-item" value="REAL">Real pul</option>
                                <option className="select-box-item" value="NOREAL">No real pul</option>
                            </select>
                        </div>
                        <div className="col-6 col-sm">
                            <p className="statistic-text float-right">Sentabr.2020</p>
                        </div>
                        <div className="col-6 col-md-1">
                            <ButtonCalendar/>
                        </div>
                    </div>
                    <div className="row mt-2 mt-sm-4 pt-3">
                        <div className="col-md-6 align-self-center">
                            <div className="btn-group custom-radio-wrapper" role="group">
                                <label className="custom-radio-label">
                                    <input type="radio" className="form-check-input" name="optradio"/>Barchasi
                                </label>
                                <label className="custom-radio-label active">
                                    <input type="radio" className="form-check-input" name="optradio"/>real pul
                                </label>
                                <label className="custom-radio-label">
                                    <input type="radio" className="form-check-input" name="optradio"/>no real pul
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6 text-sm-right">
                            <h4 className="statistic-text-medium font-family-bold">{commonIncome['income'+this.state.moneyType] || 0} UZS</h4>
                            <p className="statistic-text-muted text-sm-right"> This month: <span
                                className="text-green">+{commonIncome['incomeMonth'+this.state.moneyType] || 0}</span></p>
                        </div>
                    </div>
                </div>
        );
    }
}

AllIncome.propTypes = {
    commonIncome: PropTypes.object.isRequired
};

export default AllIncome;
