import { Fragment } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import countAtom from './Store/Atoms/Count';
import EvenSelector from "./Store/Atoms/EvenSelector";
const Count = () => {
    return (
        <Fragment>
            <CountRenderer /><br />
            <Buttons /><br /><br />
            <Even />
        </Fragment>
    );
};

const CountRenderer = () => {
    const count = useRecoilValue(countAtom);
    return (
        <Fragment>
            <h2><b>{count}</b></h2>
        </Fragment>
    );
};

const Buttons = () => {
    const [count, setCount] = useRecoilState(countAtom);

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);

    return (
        <Fragment>
            <button onClick={increaseCount}
            style={{marginRight: '10px',
            padding: '10px 15px',
            border: '1px solid #000',
            borderRadius: '5px',
            backgroundColor: '#fff',
            cursor: 'pointer'}}>RecoilUp
            </button>
            <button onClick={decreaseCount}
            style={{marginRight: '10px',
            padding: '10px 15px',
            border: '1px solid #000',
            borderRadius: '5px',
            backgroundColor: '#fff',
            cursor: 'pointer'}}>RecoilDown
            </button>
        </Fragment>
    );
};

const Even=()=>{
    const count = useRecoilValue(EvenSelector);
    return count ? "It is Even" : "It is Odd"
};

const CounterApp = () => {
    return (
        <Fragment>
            <Count />
        </Fragment>
    );
};

export default CounterApp;
