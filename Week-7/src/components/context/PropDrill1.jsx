import { Fragment, useState, useContext } from 'react';
import ContextAPI from './ContextAPI';

const Buttons = () => {
    const { setCount } = useContext(ContextAPI);

    const increaseCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decreaseCount = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <Fragment>
            <button onClick={increaseCount}
            style={{marginRight: '10px',
            padding: '10px 15px',
            border: '1px solid #000',
            borderRadius: '5px',
            backgroundColor: '#fff',
            cursor: 'pointer'}}>Increase
            </button>
            <button onClick={decreaseCount}
            style={{marginRight: '10px',
            padding: '10px 15px',
            border: '1px solid #000',
            borderRadius: '5px',
            backgroundColor: '#fff',
            cursor: 'pointer'}}>Decrease
            </button>
        </Fragment>
    );
};

const Count = () => {
    const { count } = useContext(ContextAPI);

    return (
        <Fragment>
            <div>Count: {count}</div>
            <Buttons />
        </Fragment>
    );
};

const PropDrill1 = () => {
    const [count, setCount] = useState(0);

    return (
        <Fragment>
            <ContextAPI.Provider value={{ count, setCount }}>
                <Count />
            </ContextAPI.Provider>
        </Fragment>
    );
};

export default PropDrill1;
