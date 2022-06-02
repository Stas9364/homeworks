import {UserType} from "../HW8";

type ActionType = {
    type: 'sort' | 'check'
    payload: 'up' | 'down' | 18
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case 'up': {
                    return [...state.sort((a, b) => a.age > b.age ? 1 : -1)];
                }
                case 'down': {
                    return [...state.sort((a, b) => a.age > b.age ? -1 : 1)];
                }
            }
            return state;
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload);
        }
        default:
            return state;
    }
};