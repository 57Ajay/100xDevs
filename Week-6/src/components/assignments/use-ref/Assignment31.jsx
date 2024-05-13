import { Fragment, useRef, useEffect } from 'react'

const  Assignment31=()=> {
  const inputRef = useRef();
  useEffect(()=>{
    inputRef.current.focus();
  }, [inputRef]);
    const handleClick =()=>{
        inputRef.current.style.color = 'white';
        inputRef.current.style.fontWeight = 'bold';
        inputRef.current.style.backgroundColor = 'black';
        inputRef.current.focus();
    };
  return (
    <Fragment>
        <h1>Assignment31</h1>
        <input ref={inputRef} id='input' type='text' placeholder='Enter Text' />
        <button onClick={handleClick}>Highlight Input</button>
        <div id='output'></div>
    </Fragment>
  )
}

export default Assignment31;
