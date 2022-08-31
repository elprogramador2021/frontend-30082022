import React, { useState } from "react"
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io"
import { AiFillWallet } from "react-icons/ai"
import { ConnectButton, Button } from "web3uikit"
import Link from "next/link"

const DropDown = () => {
    const [mostrar, setMostrar] = useState(false)
    return (
        <div className="absolute ">
            <div className="flex justify-end ">
                <div className="flex">
                    <div className="pr-6">
                        <ConnectButton moralisAuth={false} />
                    </div>

                    <div className="absolute right-0 ">
                        {mostrar ? (
                            <IoIosArrowDropupCircle
                                size={40}
                                onClick={() => setMostrar(!mostrar)}
                            />
                        ) : (
                            <IoIosArrowDropdownCircle
                                size={40}
                                onClick={() => setMostrar(!mostrar)}
                            />
                        )}
                    </div>
                </div>
            </div>
            {mostrar && (
                <div className="absolute bg-white rounded divide-y divide-gray-100 shadow dark:bg-lime-600 dark:divide-lime-700 mt-2 w-44 right-2">
                    <div className="pr-2">
                        <ul
                            class="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownDividerButton"
                        >
                            <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <Link href="/">Inicio</Link>
                            </li>

                            <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <Link href="/Donaciones">Adquirir NFT</Link>
                            </li>

                            <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <Link href="/Coleccion">Mi Colección</Link>
                            </li>
                        </ul>
                        <div class="py-3 px-4 text-sm text-gray-900 dark:text-white flex">
                            <AiFillWallet size="20" />
                            <div class="font-medium truncate"> Desconectar</div>
                        </div>
                        <div class="block py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropDown
