import * as ActionTypes from '../actiontypes/ActionTypes'
import Data from '../components/PriceEstimate'


export const updateEstimator = (total) => {
    return {
        type: ActionTypes.UPDATE_ESTIMATOR,
    }
}

export const clearTotal = state => {
    return {
        type: ActionTypes.CLEAR_TOTAL,
        state: { total: 0 }
    }
}

export const dataCarry = (price) => {
    return {
        type: ActionTypes.DATA_COMM,
        state: {
            payload: price
        }
    }
}

export const addPrices = price => {
    console.log(price)
    return{
        type: ActionTypes.ADD_PRICES,
    }
}
