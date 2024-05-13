import {useRef, Fragment, useCallback, useState} from 'react'
const Assignment32=()=> {
    const [,forceRenderer] = useState(0);
    const numberOfReRenderes = useRef(0);
    const handleReRenderer = useCallback(() => {
        forceRenderer(Math.random());
    }, []);
    numberOfReRenderes.current += 1;
  return (
    <Fragment>
        <p>This component has {numberOfReRenderes.current} renders</p>
        <button onClick={handleReRenderer}>Force Re-render</button>
    </Fragment>
  );
};


export default Assignment32;