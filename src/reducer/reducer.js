import * as ActionTypes from '../actiontypes/ActionTypes'
import prices from '../components/PriceEstimate'
import data from '../data/data'


const initialState = [
    {   
        name: '',
        total: ''
    }
]



export default function Action( state= initialState, action ) {

    switch(action.type) {
        case ActionTypes.UPDATE_ESTIMATOR:
            return [
                ...state,
                {
                    
                }
            ];
        case ActionTypes.CLEAR_TOTAL:
            return [
                {
                    ...state[0],
                    total: state[0].total
                }
            ]
        case ActionTypes.DATA_COMM:
            return [
                {
                    name: state[0].name
                }
            ]
        case ActionTypes.ADD_PRICES:
            return [
                { 
                    ...state[0],
                    total: Number(state[0].total) + (action.price),
                    name: action.name
                }
            ]
        case ActionTypes.REMOVE_EXAMS:
            return [
                ...state[0].name.slice(0, action.index),
                ...state[0].name.slice(action.index, + 1)
            ]
        default: {return state};
    }
} 