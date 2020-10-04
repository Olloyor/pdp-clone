import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ButtonCalendar from "./ButtonCalendar";

import {VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip} from "victory"

class StatisticLineForIncome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    setIsActive = (isActive) => {
        this.setState({isActive})
    }


    render() {

        const dataMoney = this.props.dataMoney;


        const lineChartMouseEvent = [{
            target: "data",
            eventHandlers: {
                onMouseOver: () => {
                    this.setIsActive(true)
                },
                onMouseOut: () => {
                    this.setIsActive(false)
                }
            }
        }]

        const labelComponent = <VictoryTooltip
            active={this.state.isActive}
            cornerRadius={1}
            pointerLength={4}
            flyoutStyle={{
                stroke: "none",
                fill: "#f1f1f1",
                shadow: "0px 2px 40px rgba(218, 218, 218, 0.76)"
            }}
        />


        return (
            <div className="statistic statistic-line">
                <div className="row statistic-content">
                    <div className="col-sm-12 col-md-3 col-xl-5">
                        <p className="statistic-title">Tushumlar kategoriyalar bo’yicha</p>
                    </div>
                    <div className="col statistic-text-wrap d-flex flex-column">
                        <p className="statistic-text"><span className="dot-green"/> Real Pul</p>
                        <p className="statistic-text-muted">Payme, Yandex</p>
                    </div>
                    <div className="col statistic-text-wrap flex-column">
                        <p className="statistic-text"><span className="dot-yellow"/> No Real Pul</p>
                        <p className="statistic-text-muted">Voucher, Cashback</p>
                    </div>
                    <div className="col statistic-text-wrap">
                        <p className="statistic-text float-right pr-1">Sentabr.2020</p>
                        <ButtonCalendar/>
                    </div>
                </div>
                <VictoryChart
                    height={300}
                    width={600}
                    theme={VictoryTheme.material}>

                    <VictoryLine
                        // y={(d) => (`${d.label.substring(0,d.label.indexOf("."))}M` )}
                        events={lineChartMouseEvent}
                        style={{
                            data: {stroke: "#FFB436", strokeWidth: 3, cursor: 'pointer'},
                            parent: {border: "4px solid #000"},
                            labels: {fill: "#FFB436"}
                        }}
                        labelComponent={labelComponent}
                        // labels={({datum}) => (`${datum.y} UZS`)}
                        data={dataMoney.moneyNoReal}
                    />
                    <VictoryLine
                        // y={(d) => (`${d.label.substring(0,d.label.indexOf("."))}M` )}
                        events={lineChartMouseEvent}
                        style={{
                            data: {stroke: "#00B533", strokeWidth: 3, cursor: 'pointer'},
                            parent: {border: "4px solid #000"},
                            labels: {fill: "#00B533"}
                        }}
                        labelComponent={labelComponent}
                        // labels={({datum}) => (`${datum.y} UZS`)}
                        data={dataMoney.moneyReal}
                    />
                </VictoryChart>
            </div>
        )
    }
}
StatisticLineForIncome.propTypes = {
    dataMoney: PropTypes.object.isRequired

};
export default StatisticLineForIncome;
