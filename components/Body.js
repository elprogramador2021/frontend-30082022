import React from "react"
//import Tarjeton from "./Tarjeton"
import { Dropdown } from "web3uikit"

const Body = (props) => {
    return (
        <div className="bg-slate-50 bg-repeat h-full overflow-auto w-full">
            <div>{props.children}</div>
        </div>
    )
}

export default Body
