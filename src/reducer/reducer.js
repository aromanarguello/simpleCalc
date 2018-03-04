import * as ActionTypes from '../actiontypes/ActionTypes'
import prices from '../components/PriceEstimate'
import data from '../data/data'

const initialState = [
    {   
        name: 'Biometria',
        total: 0
    }
]

export default function Action( state=initialState, action ) {
    switch(action.type) {
        case ActionTypes.UPDATE_ESTIMATOR:
            return [
                ...state,
                {
                    total: state[0].total
                }
            ];
        case ActionTypes.CLEAR_TOTAL:
            return [
                {
                    total: 0
                }
            ]
        case ActionTypes.DATA_COMM:
            return [
                {
                    state
                }
            ]
        case ActionTypes.ADD_PRICES:
        return [
            ...state,
            {
                name: state[0].prices
            }
        ]
        
        default: {return state};
    }
}