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
        state: { total: ''}
    }
}

export const dataCarry = (name) => {
    return {
        type: ActionTypes.DATA_NAME,
        name
    }
}

export const addPrices = (price, name) => {
    return{
        type: ActionTypes.ADD_PRICES,
        price,
        name
    }
}

export const removeExams = state => {
    return {
        type: ActionTypes.REMOVE_EXAMS,
        state
    }
}

