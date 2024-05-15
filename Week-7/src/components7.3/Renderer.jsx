import { Fragment } from "react"
import './Renderer.css'
import {  useRecoilValue } from "recoil";
import { NetworkAtom, jobsAtom, messagingAtom, notificationsAtom } from "./atoms/atoms";
import PropTypes from 'prop-types';

const  Renderer=()=> {
    const networkNotificationCount = useRecoilValue(NetworkAtom);
    const jobsNotificationCount = useRecoilValue(jobsAtom);
    const messagingNotificationCount = useRecoilValue(messagingAtom);
    const notificationsNotificationCount = useRecoilValue(notificationsAtom);

    const ValueRenderer = ({value})=>{
        const val = value>=99 ? "99+" : value; 
        return <span>{val}</span>
    };
    ValueRenderer.propTypes = {
        value: PropTypes.number.isRequired,
    };
    
  return (
    <Fragment>
        <div className="full-recoil-container">
            <button>Home</button>

            <button>My Network({<ValueRenderer value={networkNotificationCount}/>})</button>
            <button>Jobs({<ValueRenderer value={jobsNotificationCount}/>})</button>
            <button>Messaging({<ValueRenderer value={messagingNotificationCount}/>})</button>
            <button>Notifications({<ValueRenderer value={notificationsNotificationCount} />})</button>

            <button>Me</button>
        </div>
    </Fragment>
  );
};

export default Renderer;