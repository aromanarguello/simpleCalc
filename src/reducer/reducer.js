import * as ActionTypes from '../actiontypes/ActionTypes'

const intialState = [
    {
        total: 0
    }
]

export default function Action(state=intialState, action ) {
    switch(action.type) {
        case ActionTypes.ADD_TO_ESTIMATOR:
            return [
                ...state,
                {
                    total: state
                }
            ]
    }
}