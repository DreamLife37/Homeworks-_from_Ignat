import {UserType} from "../HW8";

type ActionType = {
    type: 'sort' | 'check';
    payload: 'up' | 'down' | 18
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            const newState = [...state].filter((i) => {
                return i.age > action.payload
            })
            return newState
        }
        default:
            return state
    }
}
