import ButtonCalendar from "./ButtonCalendar";
import PropTypes from 'prop-types';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip} from "victory";
import React, {Component} from "react";

export default class StatisticLineForSelling extends Component {
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

        const {dataSelling} = this.props;

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
                fill: "#f1f1f1"
            }}
        />


        return (
            <div className="statistic statistic-line">
                <div className="row statistic-content">
                    <div className="col-sm-12 col-md-4 col-lg-5">
                        <p className="statistic-title">Sotib olgan va ro’yxatdan o’tganlar nisbati</p>
                    </div>
                    <div className="col statistic-text-wrap">
                        <p className="statistic-text"><span className="dot-green"/> Sotib olgan</p>

                        <p className="statistic-text"><span className="dot-yellow"/> Ro'yxtdan o'tgan</p>
                    </div>
                    <div className="col statistic-text-wrap">

                        <p className="statistic-text float-right">Sentabr.2020</p>

                        <ButtonCalendar/>
                    </div>
                </div>
                <VictoryChart
                    height={300}
                    width={600}

                    theme={VictoryTheme.material}>
                    <VictoryLine
                        events={lineChartMouseEvent}
                        style={{
                            data: {stroke: "#FFB436", strokeWidth: 3, cursor: 'pointer'},
                            parent: {border: "4px solid #000"},
                            labels: {fill: "#FFB436"}
                        }}
                        labelComponent={labelComponent}
                        labels={({datum}) => (`${datum.y} ta`)}
                        data={dataSelling.registered}
                    />
                    <VictoryLine
                        events={lineChartMouseEvent}
                        style={{
                            data: {stroke: "#00B533", strokeWidth: 3, cursor: 'pointer'},
                            parent: {border: "4px solid #000"},
                            labels: {fill: "#00B533"}
                        }}
                        labelComponent={labelComponent}
                        labels={({datum}) => (`${datum.y} ta`)}
                        data={dataSelling.bought}
                    />
                </VictoryChart>
            </div>
        )
    }
}
StatisticLineForSelling.propTypes = {
    dataSelling: PropTypes.object.isRequired
}

