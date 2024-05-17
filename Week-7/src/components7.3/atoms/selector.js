import { selector } from 'recoil';
import { NetworkAtom, jobsAtom, notificationsAtom, messagingAtom } from './atoms';

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get})=>{

        const networkAtomValue = get(NetworkAtom);
        const jobsAtomValue = get(jobsAtom);
        const notificationsAtomValue = get(notificationsAtom);
        const messagingAtomValue = get(messagingAtom);

        return networkAtomValue + jobsAtomValue + notificationsAtomValue + messagingAtomValue;
    }
});
