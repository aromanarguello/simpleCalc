import * as ActionTypes from '../actiontypes/ActionTypes'
import prices from '../components/PriceEstimate'
import data from '../data/data'


const initialState = []



export default function Action( state = initialState, action ) {
    switch(action.type) {
       
        case ActionTypes.DATA_NAME:
            return [
                {
                    name: state
                }
            ]
        case ActionTypes.ADD_PRICES:
            return state.concat({ name: action.name, price: action.price })
        
        case ActionTypes.CLEAR_TOTAL:
            return state.filter(exam => exam.price === action.price)
            
        case ActionTypes.REMOVE_EXAMS:
           return state.filter(exam => exam.name === action.name)

        case ActionTypes.REMOVE_INDVIDUAL_EXAM:
        // returns [[0, upToIndex], [fromIndex ]] -> everything from 0 up to index of item and everything after the index item. Excludes the indexed item
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]
        default: {return state};
    }   
} 
