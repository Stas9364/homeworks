type InitStateType = {
    theme: string
}
type ChangeThemeType = {
    type: ActionType
    value: string
}
type ActionType = 'CHANGE_THEME';

const initState: InitStateType = {
    theme: ''
};

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeType): InitStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {
                ...state,
                theme: action.value
            };
        }
        default:
            return state;
    }
};

export const changeThemeC = (value: string): ChangeThemeType => {
    return {
        type: 'CHANGE_THEME',
        value
    }
};