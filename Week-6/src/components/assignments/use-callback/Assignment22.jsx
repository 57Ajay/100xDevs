import {useCallback, Fragment, useState} from 'react'


const Assignment22=()=> {
    const [inputText, setInputText] = useState("");
    const showAlert = useCallback(()=>{
        alert(inputText);
    }, [inputText]);
  return (
    <Fragment>
        <h1>Assignment22</h1>
        <input type="text" value={inputText} onChange={(e)=>setInputText(()=>e.target.value)} />
        <button onClick={showAlert}>Show Alert</button>
    </Fragment>
  );
};


export default Assignment22;
