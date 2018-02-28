import * as ActionTypes from '../actiontypes/ActionTypes'

export const updateEstimator = total => {
    return {
        type: ActionTypes.UPDATE_ESTIMATOR
    }
}

export const clearTotal = state => {
    return {
        type: ActionTypes.CLEAR_TOTAL,
        state: { total: 0 }
    }
}