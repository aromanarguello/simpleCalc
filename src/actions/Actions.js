import * as ActionTypes from '../actiontypes/ActionTypes'

export const updateEstimator = total => {
    return {
        type: ActionTypes.UPDATE_ESTIMATOR,
        total
    }
}

export const clearTotal = () => {
    return {
        type: ActionTypes.CLEAR_TOTAL
    }
}