import * as ActionTypes from '../actiontypes/ActionTypes'
import Data from '../components/PriceEstimate'


export const updateEstimator = (total) => {
    return {
        type: ActionTypes.UPDATE_ESTIMATOR,
        total
    }
}

export const clearTotal = state => {
    return {
        type: ActionTypes.CLEAR_TOTAL,
        state: { total: 0 }
    }
}

export const dataCarry = (name, price) => {
    return {
        type: ActionTypes.DATA_COMM,
        state: {
            name: name,
            price: price
        }
    }
}

export const addPrices = state => {
    return{
        type: ActionTypes.ADD_PRICES,
    }
}