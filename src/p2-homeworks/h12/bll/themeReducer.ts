type ThemeInitStateType = typeof initState;

const initState = {
    theme: 'some'
};

export const themeReducer = (state: ThemeInitStateType = initState, action: changeThemeCType): ThemeInitStateType => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export type changeThemeCType = {
    type: "CHANGE-THEME"
    theme: string
}

export const changeThemeC = (theme: string): changeThemeCType => {
    return {type: "CHANGE-THEME", theme} as const
};