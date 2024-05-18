import { selector } from 'recoil';
import { notificationsAtom } from './atoms';

export const totalNotificationsSelector = selector({
    key: 'totalNotifications',
    get: ({ get }) => {
        const notifications = get(notificationsAtom);
        return notifications.network + notifications.jobs + notifications.notifications + notifications.messaging;
    },
});
