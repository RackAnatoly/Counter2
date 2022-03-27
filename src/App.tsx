import React, {useState} from 'react';

import './App.css';

function App() {

    const [max, setMax] = useState<number>(0);
    const [start, setStart] = useState<number>(0);
    const [value, setValue] = useState(0);
    const [error, setError] = useState<boolean>(false);

 let a='Incorrect value!'


    let set = () => {
        setValue(start)

    }
    const inc = () => {
        if (value < max) {
            setValue(value + 1)
        }
    };

    const reset = () => setValue(start)

    const style = value === max ? 'max' : '';
    return (
        <div className="wrapper">
            <div className='Settings'>
                <div className='Value'>
                    <div className='Max-Value'>
                        <label htmlFor="n">max value:</label>
                        <input className={start<0||start>=max?'error-in':''} type='number' value={max} onChange={(e) => {
                            setMax(+e.currentTarget.value)
                        }} id="n"/>
                    </div>
                    <div className='Start-Value'>
                        <label htmlFor="n">start value:</label>
                        {/*<div className={`${style} counter`}>{data}</div>*/}
                        <input className={start<0||start>=max?'error-in':''} type='number' value={start}
                               onChange={(e) => {
                            setStart(+e.currentTarget.value)
                        }} id="n"/>
                    </div>

                </div>
                <div className='btn'>
                    <button disabled={start>=max||start<0} onClick={set}>set</button>
                </div>

            </div>
            <div className='Display'>
                {/*<div  className={start<max?'Counter':'Error'}>{value}*/}
                <div  className={start<max&&start>=0?'Counter':'Error'}>
                    {
                //     if(max>start){
                //         return value
                // }else if{}
                    max>start&&start>=0?value:a
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
