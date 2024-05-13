import { Fragment, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import "./TopBar.css"
export const  TopBar=()=> {
    const navigate = useNavigate();

    const lanPage = useCallback(()=>{
        navigate("/");
        
    }, [navigate]);

    const dashboard = useCallback(()=>{
        navigate("/dashboard");
    }, [navigate]);

    const propDrill = useCallback(()=>{
        navigate('/prop-drill')
    }, [navigate]);

  return (
    <Fragment>
        <div className='Topbar'>
            <button onClick={lanPage}>Landing Page</button>
            <button onClick={dashboard}>Dashboard</button>
            <button onClick={propDrill}>Prop&ContextAPI</button>
        </div>
    </Fragment>
  )
}
