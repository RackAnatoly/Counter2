const initialState = {
    value: 0,
    start: 0,
    max: 1,
    changed: false
}

export type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case "INC-VALUE":
            return {...state, value: state.value + 1}
        case "SET-VALUE":
            return {...state, value: action.value}
        case "START":
            return {...state, start: action.value}
        case "MAX":
            return {...state, max: action.value}
        case "CHANGE":
            return {...state, changed: action.IsTrue}
        default:
            return state;
    }
}


export const incValueAC = (): incValueACType => {
    return {type: 'INC-VALUE'}
}
export const SetValueAC = (value: number): setValueACType => {
    return {
        type: 'SET-VALUE',
        value: value
    }
}
export const StartAC = (value: number): StartType => {
    return {
        type: 'START',
        value: value
    }
}
export const MaxAC = (value: number): MaxType => {
    return {
        type: 'MAX',
        value: value
    }
}
export const ChangeTypeAC = (IsTrue: boolean): ChangeType => {
    return {
        type: 'CHANGE',
        IsTrue
    }
}


export type ActionType = incValueACType | setValueACType | StartType | MaxType | ChangeType
export type incValueACType = {
    type: 'INC-VALUE'
}
export type setValueACType = {
    type: 'SET-VALUE',
    value: number
}
export type StartType = {
    type: 'START',
    value: number
}

export type MaxType = {
    type: 'MAX',
    value: number
}
export type ChangeType = {
    type: 'CHANGE',
    IsTrue: boolean
}