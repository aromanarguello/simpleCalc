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
                    total: ''
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
        default: {return state};
    }
} 