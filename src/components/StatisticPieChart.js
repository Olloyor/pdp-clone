import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {IconCalendar} from "./icons";
import {VictoryPie, VictoryTheme} from "victory";
import ButtonCalendar from "./ButtonCalendar";
import {Spinner} from "./Spinner";

class StatisticPieChart extends Component {


    render() {

        const {data, loading} = this.props;

        return (
            <div className="statistic statistic-pie">
                {loading ?
                    <div className="d-flex align-self-center w-100 h-100">
                        <Spinner/>
                    </div>
                    :
                    <React.Fragment>
                        <div className="row statistic-pie-content">
                            <div className="col-9">
                                <p className="statistic-title">{data.title}</p>
                            </div>
                            <div className="col-3">
                                <ButtonCalendar/>
                            </div>
                        </div>
                        <svg width='100%' height="100%" viewBox="0 0 350 250">

                            <VictoryPie
                                standalone={false}
                                labelPosition={({index}) => index ? "centroid" : "endAngle"}
                                style={{
                                    data: {
                                        strokeWidth: 0
                                    },
                                    labels: {
                                        fontFamily: "SFProDisplay-Light",
                                        fontSize: 14,
                                        fill: "rgba(0,0,0,0.97)",
                                        padding: 20
                                    }
                                }}
                                startAngle={90}
                                endAngle={-90}
                                data={data.data}
                                sortKey="x"
                                sortOrder="descending"
                                colorScale={["#00B533", "#FFB436", "#FF6279", "#21E2E9", "lightgreen"]}
                                // labels={({datum}) => (`${datum.x} - ${datum.y}`)}
                                innerRadius={85}
                                theme={VictoryTheme.material}
                            />
                        </svg>
                        <div className="common">
                            <h5 className={this.props.smallText ? "common-text-sm" : ""}>{data.all}</h5>
                            <p>{data.allText}</p>
                        </div>
                    </React.Fragment>}
            </div>
        );
    }
}

StatisticPieChart.propTypes = {
    data: PropTypes.object.isRequired,
    smallText: PropTypes.bool || false
};

export default StatisticPieChart;
