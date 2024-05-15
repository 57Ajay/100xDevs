import { selector } from "recoil";
import  countAtom  from './Count.js'

const EvenSelector = selector({
    key: "EvenSelector",
    get: ({ get }) =>{
        const count = get(countAtom);
        return count % 2 === 0 ? true : false;
    }
});

export default EvenSelector;
