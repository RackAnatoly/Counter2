import React, {ChangeEvent, useState} from 'react';

import './App.css';

function App() {

    const [max, setMax] = useState<number>(0);
    const [start, setStart] = useState<number>(0);
    const [value, setValue] = useState<number>(start);
    const [error, setError] = useState<boolean>(false);

    let a = 'Incorrect value!'


    let set = () => {
        setValue(start)
        // localStorage.setItem('counterValue', JSON.stringify(value))
        let valueAtString = localStorage.getItem('counterValue')
        if (valueAtString) {
            let newValue = JSON.parse(valueAtString)
            setMax(newValue)
        }

    }
    const inc = () => {
        if (value < max) {
            setValue(value + 1)
        }
    };
    const reset = () => setValue(start)
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value)
        localStorage.setItem('counterValue', JSON.stringify(max))
    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(+e.currentTarget.value)
    }

    // const style = value === max ? 'max' : '';
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
                <div className={start < max && start >= 0 ? 'Counter' : 'Error'}>
                    {
                        //     if(max>start){
                        //         return value
                        // }else if{}
                        max > start && start >= 0 ? value : a
                    }
                </div>

                <div className='Buttons'>
                    <button disabled={value === max} onClick={inc}>inc</button>
                    {/*<button onClick={inc}>inc</button>*/}
                    <button disabled={value === start} onClick={reset}>reset</button>
                </div>
            </div>
        </div>
    )
        ;
}

export default App;
