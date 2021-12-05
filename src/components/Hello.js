
import React from "react";

const Hello = () => {
    // *****  Using JSX ****//

    return(
    <div><h1>Hello Molu</h1></div>
    )

    // ******  without using JSX*****//
    
    // return React.createElement (
    //     'div',
    //     null,
    //     React.createElement ('h1',null,'hello Molu')

    // )
}

export default Hello;