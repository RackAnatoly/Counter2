import React, {ChangeEvent, useEffect, useState} from 'react';

import './App.css';
import Button from "./Button";

function App() {

    const [max, setMax] = useState<number>(1);
    const [start, setStart] = useState<number>(0);
    const [value, setValue] = useState<number>(start);
    const [changed, setChanged] = useState<boolean>(false);

    useEffect(() => {
        let valueAtString = localStorage.getItem('counterMax')
        if (valueAtString) {
            let newValue = JSON.parse(valueAtString)
            setMax(newValue)
        }
    }, [])
    useEffect(() => {
        let valueAtString = localStorage.getItem('counterStart')
        if (valueAtString) {
            let newValue = JSON.parse(valueAtString)
            setStart(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterMax', JSON.stringify(max))
    }, [max])
    useEffect(() => {
        localStorage.setItem('counterStart', JSON.stringify(start))
    }, [start])

    let set = () => {
        setValue(start)
        setChanged(false)
    }
    const inc = () => {
        if (value < max) {
            setValue(value + 1)
        }
    };
    const reset = () => setValue(start)
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value)
        setChanged(true);
    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(+e.currentTarget.value)
        setChanged(true)
    }
    const disableInc = start >= max || start < 0
    const disableReset = start >= max || start < 0
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
                    <button disabled={start >= max || start < 0} onClick={set}>set</button>
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
                    <Button disable={disableInc} callback={inc}/>
                    <Button disable={disableReset} callback={reset}/>
                    {/*<button disabled={start >= max || start < 0} onClick={inc}>inc</button>*/}
                    {/*<button disabled={start >= max || start < 0} onClick={reset}>reset</button>*/}
                </div>
            </div>
        </div>
    )
        ;
}

export default App;
