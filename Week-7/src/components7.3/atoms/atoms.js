import { atom } from 'recoil';
export const notificationsAtom = atom({
    key: 'notifications',
    default: {
        network: 102,
        jobs: 0,
        notifications: 12,
        messaging: 0,
    },
})

