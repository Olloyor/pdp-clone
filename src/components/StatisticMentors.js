import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ButtonCalendar from "./ButtonCalendar";
import {IconPlus} from "./icons";

class StatisticMentors extends Component {


    render() {

        const {mentors,allMentorFooter, loading} = this.props;


        return (
            loading ? '':
            <div className="statistic">
                <div className="row mx-0 mb-4">
                    <div className="col-6 pl-2">
                        <h5 className="statistic-title">Mentor <br/>ishlab topgan pul</h5>
                    </div>
                    <div className="col pr-sm-0 float-sm-right align-self-center">
                        <span className="statistic-text-muted float-right">Sentabr.2020</span>
                    </div>
                    <div className="col-1">
                        <ButtonCalendar/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table ">
                            <thead className="">
                            <tr className="row mx-2">
                                <th className="col-6 col-sm-3 pl-0">Mentor Ismi</th>
                                <th className="col">O`quvchi</th>
                                <th className="col">Kurslar</th>
                                <th className="col">Daromad</th>
                                <th className="col">Berdi</th>
                                <th className="col">Qoldi</th>
                                <th className="col-1"/>
                            </tr>
                            </thead>
                            <tbody>
                            {mentors && mentors.map((mentor, index) => {
                                return (
                                    <MentorContent mentor={mentor} index={index} key={index}/>
                                )
                            })}

                            </tbody>
                        </table>
                    </div>
                </div>
                {allMentorFooter && MentorFooter(allMentorFooter)}
            </div>
        );
    }
}


class MentorContent extends Component {
    render() {
        const {mentor, index} = this.props;

        const id = 'mentor'+ index;
        return (
            <React.Fragment>
                <tr className="row mx-2 accordion-toggle collapsed" data-toggle="collapse"
                    data-target={"#"+id}>
                    <td className="col-6 col-sm-3 pl-0"><h5 className="statistic-title">{mentor.name}</h5>
                    </td>
                    <td className="col text-center">{mentor.allStudents} ta<p className="text-muted">this month
                        : <span className="text-green">+{mentor.studentsMonth}</span></p></td>
                    <td className="col">{mentor.coursesCount} ta</td>
                    <td className="col">{mentor.incomeAll}</td>
                    <td className="col text-green">{mentor.incomePaid}</td>
                    <td className="col text-red">{mentor.incomeDebt}</td>
                    <td className="col-1"><IconPlus/></td>
                </tr>

                <div className="collapse" id={id}>
                    {mentor.courses && mentor.courses.map((course,i)=>{
                        return MentorContentCourse(course, i)
                    })}
                </div>
            </React.Fragment>
        )
    }
}

function MentorContentCourse(course, index) {
    return (
        <div className="row accordion-body" key={index}>
            <div className="col-6 col-sm-3"><p className="title">{course.name}</p><span
                className="title-sub">{course.moduleCount} ta modul  |  {course.lessonCount} ta dars</span></div>
            <div className="col text-center">{course.studentsCount} ta<p className="text-muted">this month
                : <span className="text-green">+{course.studentsCountMonth}</span></p></div>
            <div className="col"/>
            <div className="col">{course.income}</div>
            <div className="col text-green">{course.paid}</div>
            <div className="col text-red">{course.debt}</div>
            <div className="col-0 col-sm-1"/>
        </div>
    )
}

function MentorFooter(all) {
    return (
        <div className="row mx-0 mt-4 align-items-center">
            <div className="col col-sm-3 pl-2">
                <h5 className="statistic-title">JAMI SUMMA: </h5>
            </div>
            <div className="col">
                <p className="statistic-text text-bg">{all.students}</p>
            </div>
            <div className="col">
                <p className="statistic-text text-bg">{all.courses}</p>
            </div>
            <div className="col">
                <p className="statistic-text text-bg">{all.allIncome}</p>
            </div>
            <div className="col">
                <p className="statistic-text text-bg text-green">{all.allPaid}</p>
            </div>
            <div className="col">
                <p className="statistic-text text-bg text-red">{all.allDebt}</p>
            </div>
            <div className="col-sm-1"/>
        </div>
    )
}

StatisticMentors.propTypes = {
    mentors : PropTypes.arrayOf(Object),
    allMentorFooter : PropTypes.object
};

export default StatisticMentors;

