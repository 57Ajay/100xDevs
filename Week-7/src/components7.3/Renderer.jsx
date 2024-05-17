import { Fragment } from "react";
import './Renderer.css';
import { useRecoilValue } from "recoil";
import { notificationsAtom } from "./atoms/atoms";
import { totalNotificationsSelector } from "./atoms/selector";

import PropTypes from 'prop-types';

const Renderer = () => {
    const { network, jobs, messaging, notifications } = useRecoilValue(notificationsAtom);

    const ValueRenderer = ({ value }) => {
        const val = value >= 99 ? "99+" : value;
        return <span>{val}</span>;
    };

    ValueRenderer.propTypes = {
        value: PropTypes.number.isRequired,
    };

    const totalNotificationCount = useRecoilValue(totalNotificationsSelector);

    return (
        <Fragment>
            <div className="full-recoil-container">
                <button>Home</button>

                <button>My Network({<ValueRenderer value={network} />})</button>
                <button>Jobs({<ValueRenderer value={jobs} />})</button>
                <button>Messaging({<ValueRenderer value={messaging} />})</button>
                <button>Notifications({<ValueRenderer value={notifications} />})</button>
                <button>Me({<ValueRenderer value={totalNotificationCount} />})</button>
            </div>
        </Fragment>
    );
};

export default Renderer;
