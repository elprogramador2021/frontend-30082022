import React from "react"
import { GiFruitTree } from "react-icons/gi"

import DropDown from "./DropDown"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 h-14 flex bg-lime-700 text-slate-50 pl-2 ">
            <div className="flex w-screen">
                <div className="flex justify-start items-center border-2 border-slate-50 rounded-lg my-1">
                    <GiFruitTree size={40} />
                    <div className="text-1xl hover:text-base pl-2">
                        Open
                        <span className="bg-slate-50 text-lime-700 p-1 mx-1 rounded-lg">
                            Help!
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-end items-center w-screen">
                {/*<ConnectButton moralisAuth={false} />*/}
                <DropDown />
            </div>
        </header>
    )
}

export default Header
