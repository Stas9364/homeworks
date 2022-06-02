type InitialStateType = {
    isLoading: boolean
}
type IsLoadingActionType = {
    type: 'IS-LOADING'
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state: InitialStateType = initState, action: IsLoadingActionType): InitialStateType => {
    switch (action.type) {
        case 'IS-LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): IsLoadingActionType => {
    return {
        type: "IS-LOADING",
        isLoading
    }
}