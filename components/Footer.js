import React from "react"
import { FaVoteYea } from "react-icons/fa"
import { IoMdFlower } from "react-icons/io"
import { GiFruitTree } from "react-icons/gi"

const Footer = () => {
    return (
        <div className="px-2 bg-lime-700 text-slate-50">
            <footer className="p-1 ">
                <div className="flex items-center">
                    <div className="flex justify-start items-center border-2 border-slate-50 rounded-lg my-1">
                        <GiFruitTree size={30} />
                        <div className="text-1xl hover:text-base pl-2 my-1">
                            Open
                            <span className="bg-slate-50 text-lime-700 p-1 mx-1 rounded-lg">
                                Help!
                            </span>
                        </div>
                    </div>
                    <span className="pl-2"> - 2022</span>
                </div>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-slate-200 dark:text-slate-200 sm:mt-0">
                    <li>
                        <a></a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer
