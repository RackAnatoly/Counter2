import React, {ChangeEvent, useEffect, useState} from 'react';

import './App.css';
import Button from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Store/store";
import {ChangeTypeAC, incValueAC, MaxAC, SetValueAC, StartAC} from "./Store/counterReducer";

function AppWithRedux() {

    const value = useSelector<AppStateType,number>(state=>state.counter.value)
    const start = useSelector<AppStateType,number>(state=>state.counter.start)
    const max = useSelector<AppStateType,number>(state=>state.counter.max)
    // const changed = useSelector<AppStateType,boolean>(state=>state.counter.changed)


    const dispatch = useDispatch()

    // const [max, setMax] = useState<number>(1);
    // const [start, setStart] = useState<number>(0);
    // const [value, setValue] = useState<number>(start);
    const [changed, setChanged] = useState<boolean>(false);

    // useEffect(() => {
    //     let valueAtString = localStorage.getItem('counterMax')
    //     if (valueAtString) {
    //         let newValue = JSON.parse(valueAtString)
    //         setMax(newValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     let valueAtString = localStorage.getItem('counterStart')
    //     if (valueAtString) {
    //         let newValue = JSON.parse(valueAtString)
    //         setStart(newValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('counterMax', JSON.stringify(max))
    // }, [max])
    // useEffect(() => {
    //     localStorage.setItem('counterStart', JSON.stringify(start))
    // }, [start])

    let set = () => {
        dispatch(SetValueAC(start))
    }
    const inc = () => {
        if (value < max) {
            dispatch(incValueAC())
        }
    };
    const reset = () => dispatch(SetValueAC(start))
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(MaxAC(+e.currentTarget.value))
        dispatch(ChangeTypeAC(true))
    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(StartAC(+e.currentTarget.value))
        dispatch(ChangeTypeAC(true))
    }
    const disableInc = start >= max || start < 0
    const disableReset = start >= max || start < 0
    const disableSet = start >= max || start < 0
    return (
        <div className="wrapper">
            <div className='Settings'>
                <div className='Value'>
                    <div className='Max-Value'>
                        <label htmlFor="n">max value:</label>
                        <input className={start < 0 || start >= max ? 'error-in' : ''} type='number' value={max}
                               onChange={maxValueHandler} id="n"/>
                    </div>
                    <div className='Start-Value'>
                        <label htmlFor="n">start value:</label>
                        {/*<div className={`${style} counter`}>{data}</div>*/}
                        <input className={start < 0 || start >= max ? 'error-in' : ''} type='number' value={start}
                               onChange={startValueHandler} id="n"/>
                    </div>
                </div>
                <div className='btn'>
                    <Button callback={set} disable={disableSet} name={'set'}/>
                    {/*<button disabled={start >= max || start < 0} onClick={set}>set</button>*/}
                </div>

            </div>
            <div className='Display'>
                {/*<div  className={start<max?'Counter':'Error'}>{value}*/}
                <div className={
                    value === max ? 'max' : (start < max && start >= 0) ? 'Counter' : 'Error'
                }>
                    {changed && max <= start && 'bad'}
                    {changed && max > start && 'ok'}
                    {!changed && value}
                </div>

                <div className='Buttons'>
                    <Button name={'inc'} disable={disableInc} callback={inc}/>
                    <Button name={'reset'} disable={disableReset} callback={reset}/>

                </div>
            </div>
        </div>
    )
        ;
}

export default AppWithRedux;
