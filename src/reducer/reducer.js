import * as ActionTypes from '../actiontypes/ActionTypes'
import prices from '../components/PriceEstimate'
import data from '../data/data'


const initialState = []



export default function Action( state = initialState, action ) {

    switch(action.type) {

        case ActionTypes.CLEAR_TOTAL:
            return [
                {
                    
                    total: state[0].total
                }
            ]
        case ActionTypes.DATA_NAME:
            return [
                {
                    name: state
                }
            ]
        case ActionTypes.ADD_PRICES:
            return state.concat({ name: action.name, price: action.price })
            
        case ActionTypes.REMOVE_EXAMS:
           return state.filter(exam => exam.name === action.name)
        default: {return state};
    }
} 