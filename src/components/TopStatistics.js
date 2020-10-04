import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ButtonCalendar from "./ButtonCalendar";

class TopStatistics extends Component {
    render() {

        const {topStatistic, loading} = this.props;

        return (
            <div className="row mt-4">
                <div className="col-md-3 statistic">
                    <div className="row">
                        <div className="col-8">
                            <div className="statistic-title">Ro’yxatdan o’tgan talabalar soni</div>
                        </div>
                        <div className="col-4">
                            <ButtonCalendar/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <h5 className="statistic-text-big">{topStatistic.registered}</h5>
                        </div>
                        <div className="col-7 flex-column align-items-start">
                            <p className="statistic-text text-green">+{topStatistic.registeredMonth} ta</p>
                            <p className="statistic-text-muted">in this month</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 statistic">
                    <div className="row">
                        <div className="col-8">
                            <div className="statistic-title">Aktiv talabalar soni</div>
                        </div>
                        <div className="col-4">
                            <ButtonCalendar/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <h5 className="statistic-text-big text-green">{topStatistic.active}</h5>
                        </div>
                        <div className="col-7 flex-column align-items-start">
                            <p className="statistic-text text-green">+{topStatistic.activeMonth} ta</p>
                            <p className="statistic-text-muted">in this month</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 statistic">
                    <div className="row">
                        <div className="col-8">
                            <div className="statistic-title">Bitirgan talabalar soni</div>
                        </div>
                        <div className="col-4">
                            <ButtonCalendar/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <h5 className="statistic-text-big text-orange">{topStatistic.finished}</h5>
                        </div>
                        <div className="col-7 flex-column align-items-start">
                            <p className="statistic-text text-orange">+{topStatistic.finishedMonth} ta</p>
                            <p className="statistic-text-muted">in this month</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 statistic">
                    <div className="row">
                        <div className="col-8">
                            <div className="statistic-title">To’xtab qolgan talabalar soni</div>
                        </div>
                        <div className="col-4">
                            <ButtonCalendar/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <h5 className="statistic-text-big text-red">{topStatistic.stopped}</h5>
                        </div>
                        <div className="col-7 flex-column align-items-start">
                            <p className="statistic-text text-red">+{topStatistic.stoppedMonth} ta</p>
                            <p className="statistic-text-muted">in this month</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

TopStatistics.propTypes = {
    topStatistic : PropTypes.object.isRequired
};

export default TopStatistics;
