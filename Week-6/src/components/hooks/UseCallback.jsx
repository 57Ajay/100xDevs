import  { Fragment, useCallback, useState, memo } from "react";

const UseCallback=memo(()=> {
    
    const [count, setCount]= useState(0);
    const handler = useCallback(()=>{
        setCount(()=>count+1)
    }, [count]);
  return (
    <Fragment>
        <button onClick={handler}>Increase{count}</button>
    </Fragment>
  )
});
UseCallback.displayName = 'UseCallback';

export default UseCallback;
