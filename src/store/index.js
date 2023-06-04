//you can think of this as react Context
//whatever be difined in here you'll be able 
//utellise in your entire application

import { proxy } from "valtio";

const state = proxy({
    //default color
    color: {
        value: '#25bb92',
    },
    // default background color
    bgColor: {
        value:'#1e1e1e'
    },
    //for the initial logo before we upload any logo
    logoDecal: './react.png',
    // logo positions
    position: {
        left: false,
        middle: true,
        right: false
    }
})

export default state;