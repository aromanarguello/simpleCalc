import * as ActionTypes from '../actiontypes/ActionTypes'
import prices from '../components/PriceEstimate'

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
                {
                    total: 60
                }
            ];
        case ActionTypes.CLEAR_TOTAL:
            return [
                {
                    total: 0
                }
            ]
        
        default: {return state};
    }
}