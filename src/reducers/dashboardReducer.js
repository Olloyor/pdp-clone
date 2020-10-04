import * as ACTION from "../actions/types";


const initialState = {
  mentors: {},
  topStatistic: {},
  commonIncome: {},
  dataMoney: {},
  dataSelling: {},
  pieStudents:{},
  pieBuyers:{},
  pieMoney:{},
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTION.GET_MENTORS:
      return {
        ...state,
        mentors: action.payload,
        loading: false
      };
    case ACTION.GET_STAT_TOP:
      return {
        ...state,
        topStatistic: action.payload.topStatistic,
        commonIncome: action.payload.commonIncome,
        loading: false
      };
    case ACTION.GET_STAT_LINE:
      return {
        ...state,
        dataMoney: action.payload.dataMoney,
        dataSelling: action.payload.dataSelling,
        loading: false
      };
    case ACTION.GET_STAT_PIE:
      return {
        ...state,
        pieStudents: action.payload.pieStudents,
        pieBuyers: action.payload.pieBuyers,
        pieMoney: action.payload.pieMoney,
        loading: false
      };
    case ACTION.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
