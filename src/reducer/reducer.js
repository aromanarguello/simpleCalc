import * as ActionTypes from '../actiontypes/ActionTypes'

const intialState = [
    {
        name: '',
        total: 0
    }
]

export default function Action( state=intialState, action ) {
    switch(action.type) {
        case ActionTypes.CLEAR_TOTAL:
        this.state.total = 0
        case ActionTypes.UPDATE_ESTIMATOR:
        this.state.total = this.state.total + 2
        }


    }