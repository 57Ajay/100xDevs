import { atom /*,selector*/ } from 'recoil';
const countAtom = atom({
    key: "countAtom",
    default: 0
});

export default countAtom;
// Another ay of creating EvenSelector;
// export const EvenSelector = selector({
//     key: "EvenSelector",
//     get: ({ get }) => {
//         const count = get(countAtom);
//         return count % 2 === 0;
//     }
// });
