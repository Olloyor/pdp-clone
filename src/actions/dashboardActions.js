import axios from "axios";


import * as ACTION from "./types";


export const getStatisticMentor = () => dispatch => {
    dispatch({type: ACTION.SET_LOADING})
    axios
        .get("/api/mentors")
        .then(res => {
            console.log(res);
            // Set current user
            dispatch({
                type: ACTION.GET_MENTORS,
                payload: res.data
            });

        })
        .catch(err =>
            dispatch({
                type: ACTION.GET_ERRORS,
                payload: err.message
            })
        );
};

// Login - get user token
export const getStatistic = () => dispatch => {
    dispatch({type: ACTION.SET_LOADING})
    axios
        .get("/api/stat")
        .then(res => {
            console.log(res);

            dispatch({
                type: ACTION.GET_STAT_TOP,
                payload: res.data
            });
        })
        .catch(err => {

            dispatch({
                type: ACTION.GET_ERRORS,
                payload: err.message
            })
        }
        );
};


export const getStatisticLine = () => dispatch => {
    dispatch({type: ACTION.SET_LOADING})
    axios.get("/api/stat/line").then(res => {
        console.log(res);

        dispatch({
            type: ACTION.GET_STAT_LINE,
            payload: res.data
        });
    }).catch(err => {
        dispatch({
            type: ACTION.GET_ERRORS,
            payload: err.message
        })
    })
};


export const getStatisticPie = () => dispatch => {
    dispatch({type: ACTION.SET_LOADING})
    axios.get("/api/stat/pie").then(res => {
        console.log(res);

        dispatch({
            type: ACTION.GET_STAT_PIE,
            payload: res.data
        });

    }).catch(err => {
        dispatch({
            type: ACTION.GET_ERRORS,
            payload: err.message
        })
    })
};
