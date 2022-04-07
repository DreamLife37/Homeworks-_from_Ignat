const initState = {
    isLoading: false
}

type LoadingActionType = {
    type: 'CHANGE-STATUS-LOADING',
    isLoading: boolean
}

export type loadingType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: any): any => { // fix any

    switch (action.type) {
        case 'CHANGE-STATUS-LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return ({type: 'CHANGE-STATUS-LOADING', isLoading}) // fix any
}