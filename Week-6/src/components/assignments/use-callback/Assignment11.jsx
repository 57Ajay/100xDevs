import { Fragment, memo, useCallback, useState } from 'react'
import PropTypes from 'prop-types';
const CounterButtons = memo(({onIncrement, onDecrement})=>{
    
    return (
        <Fragment>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </Fragment>
    );
});
CounterButtons.displayName = "CounterButtons";
CounterButtons.propTypes = {
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};
const Assignment11=()=> {
    const [count, setCount] = useState(0);
    
    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount((prevCount) => prevCount - 1);
    }, []);


  return (
    <Fragment>
        <h1>Assignment11</h1>
        Count: {count}
        <CounterButtons onIncrement={increment} onDecrement={decrement} />
    </Fragment>
  );
};

export default Assignment11;
