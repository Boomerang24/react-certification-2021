import {types} from '../types/types'

export const reducer = (state, action) => {

    switch (action.type) {
        case types.theme:
            return {
                ...state, theme: action.payload
            }
        default:
            return state
    }
}


