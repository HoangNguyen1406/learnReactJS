import React from 'react';
import { Child01 } from './ChildComponents/Child01';

class Example01 extends React.Component{

    render(){

        const first = "Nguyen";
        const last ="A";

        return(
            <>
                <Child01 first={first} last={last}/>
            </>
        )
    }
}

export {Example01};