import { Fragment } from "react"
import './Renderer.css'
import {   useRecoilValue } from "recoil";
import { NetworkAtom, jobsAtom, messagingAtom, notificationsAtom } from "./atoms/atoms";
import { totalNotificationSelector } from "./atoms/selector";

import PropTypes from 'prop-types';

const  Renderer=()=> {
    const networkNotificationCount = useRecoilValue(NetworkAtom);
    const jobsAtomCount = useRecoilValue(jobsAtom);
    const messagingAtomCount = useRecoilValue(messagingAtom);
    const notificationsAtomCount = useRecoilValue(notificationsAtom);

    const ValueRenderer = ({value})=>{
        const val = value>=99 ? "99+" : value; 
        return <span>{val}</span>
    };
    ValueRenderer.propTypes = {
        value: PropTypes.number.isRequired,
    };
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);
    
  return (
    <Fragment>
        <div className="full-recoil-container">
            <button>Home</button>

            <button>My Network({<ValueRenderer value={networkNotificationCount}/>})</button>
            <button>Jobs({<ValueRenderer value={jobsAtomCount}/>})</button>
            <button>Messaging({<ValueRenderer value={messagingAtomCount}/>})</button>
            <button>Notifications({<ValueRenderer value={notificationsAtomCount} />})</button>
            <button>Me({<ValueRenderer value={totalNotificationCount}/>})</button>
        </div>
    </Fragment>
  );
};


export default Renderer;
