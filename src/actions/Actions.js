import * as ActionTypes from '../actiontypes/ActionTypes'

export const addPrices = price => {
    return {
        type: ActionTypes.ADD_TO_ESTIMATOR,
        price
    }
}