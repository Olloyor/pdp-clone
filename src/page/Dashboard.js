import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from "reactstrap";

import {connect} from "react-redux";
import {getStatisticMentor, getStatistic, getStatisticLine, getStatisticPie} from "../actions/dashboardActions";

import TopStatistics from "../components/TopStatistics";
import AllIncome from "../components/AllIncome";
import StatisticPieChart from "../components/StatisticPieChart";
import StatisticLineForIncome from "../components/StatisticLineForIncome";
import StatisticLineForSelling from "../components/StatisticLineForSelling";
import StatisticMentors from "../components/StatisticMentors";
import Loader from "../components/Loader";


class Dashboard extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {
        const {loading, mentors, topStatistic, commonIncome, dataMoney, dataSelling, pieStudents, pieBuyers, pieMoney} = this.props.dash;
        if (this.isEmpty(topStatistic) || this.isEmpty(commonIncome)) {
            console.log('call getStat')
            this.props.getStatistic()
        }
        if (this.isEmpty(dataMoney) || this.isEmpty(dataSelling)) {
            console.log('call getStatLine')
            this.props.getStatisticLine()
        }
        if (this.isEmpty(pieBuyers) || this.isEmpty(pieMoney) || this.isEmpty(pieStudents)) {
            console.log("call getStatPie")
            this.props.getStatisticPie()
        }
        if (this.isEmpty(mentors)) {
            console.log('call mentors')
            this.props.getStatisticMentor()
        }

    }

    isEmpty=(data)=>{
        return Object.keys(data).length === 0 ||data === {} || data === undefined || data === null
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }


    render() {

        const {loading, mentors, topStatistic, commonIncome, dataMoney, dataSelling, pieStudents, pieBuyers, pieMoney} = this.props.dash;


        return (
            loading ? <Loader/> :
                <Container className="mx-sm-0 mx-2">
                    <Row>
                        <Col className="pb-2 pl-sm-0">
                            <h1 className="page-title"> Direktor Dashboard </h1>
                        </Col>
                    </Row>
                    <TopStatistics loading={loading} topStatistic={topStatistic}/>
                    <Row>
                        <Col xs={12} md={8} className="p-0">
                            <Row>
                                <Col xs={12}>
                                    <AllIncome loading={loading} commonIncome={commonIncome}/>
                                </Col>
                                <Col xs={12}>
                                    <StatisticLineForIncome loading={loading} dataMoney={dataMoney}/>
                                </Col>
                                <Col xs={12}>
                                    <StatisticLineForSelling loading={loading} dataSelling={dataSelling}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={4} className="p-0">
                            <Row>
                                <Col>
                                    <StatisticPieChart loading={loading} data={pieBuyers}/>
                                </Col>
                                <Col>
                                    <StatisticPieChart loading={loading} smallText={true} data={pieMoney}/>
                                </Col>
                                <Col>
                                    <StatisticPieChart loading={loading} data={pieStudents}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-0">
                            <StatisticMentors loading={loading} mentors={mentors.mentors}
                                              allMentorFooter={mentors.allMentorFooter}/>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

Dashboard.propTypes = {
    getStatisticMentor: PropTypes.func.isRequired,
    getStatistic: PropTypes.func.isRequired,
    dash: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    dash: state.dash
});

export default connect(
    mapStateToProps,
    {getStatisticMentor, getStatistic, getStatisticLine, getStatisticPie}
)(Dashboard);
