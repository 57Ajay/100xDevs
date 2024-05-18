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

/*

To fetch data form the backend using async function
export const notificationsAtom = ({
    key: "notifications",
    default: selector({
        key: "notificationsSelectors",
        get: async()=>{
            const res = await axios.get("https://server.com/notifications");
            return res.data;

        }
    });
});
Data model example from backend  ======>

{ 
    network: 102,
    jobs: 0,
    notifications: 12,
    messaging: 0
}


*/
