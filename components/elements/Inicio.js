import React from "react"
import Image from "next/image"
import { Button } from "web3uikit"

const Inicio = () => {
    return (
        <div className="relative text-center bg-white fondo">
            <div
                className="absolute w-4/5 "
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            >
                <div className="text-white sm:text-md md:text-4xl font-bold py-2">
                    Compra un NFT y ayuda al <span>planeta</span>
                </div>
                <div className="flex justify-center py-2 px-6">
                    <div className="text-white text-xs md:text-sm text-justify ">
                        and receive virtual rights to 1 dedicated hectare of mature forest land (1
                        hectare is 2.47 acres). This includes rights to pay-to-preserve carbon
                        removal but no physical rights to the land or trees.
                    </div>
                </div>
                <div className="flex justify-center text-white py-2">
                    Join our wait list for the private pre-sale.
                </div>
                <div className="flex justify-center py-2">
                    <Button onClick={function noRefCheck() {}} text="Mint NFT" theme="outline" />
                </div>
            </div>
        </div>
    )
}

export default Inicio
