import * as ActionTypes from '../actiontypes/ActionTypes'
import prices from '../components/PriceEstimate'
import data from '../data/data'


const initialState = [
    {   
        name: '',
        total: []
    },
    {
        add: ''
    }
]



export default function Action( state=initialState, action ) {
    

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
            {
                ...state[0],
                total: action.price
            },
        ]

        
        default: {return state};
    }
}   