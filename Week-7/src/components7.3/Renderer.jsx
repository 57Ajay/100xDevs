import { Fragment } from "react"
import './Renderer.css'
import {  useRecoilValue } from "recoil";
import { NetworkAtom, jobsAtom, messagingAtom, notificationsAtom } from "./atoms/atoms";
const  Renderer=()=> {
    const netoworkNotificationCount = useRecoilValue(NetworkAtom);
  return (
    <Fragment>
        <div className="full-recoil-container">
            <button>Home</button>

            <button>My Network</button>
            <button>Jobs</button>
            <button>Messaging</button>
            <button>Notifications</button>

            <button>Me</button>
        </div>
    </Fragment>
  );
};

export default Renderer;