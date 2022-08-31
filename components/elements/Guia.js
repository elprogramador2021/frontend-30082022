import React from "react"
import { Stepper } from "web3uikit"
import Image from "next/image"

const IMG_METAMASK = "/images/metamask.jpg"
const IMG_RINKEBY = "/images/rinkeby.jpg"

const Guia = () => {
    return (
        <div className="p-8">
            <div
                style={{
                    height: "1px",
                    minHeight: "250px",
                }}
            >
                <Stepper
                    onComplete={function noRefCheck() {}}
                    step={1}
                    stepData={[
                        {
                            content: (
                                <Image
                                    loader={() => IMG_METAMASK}
                                    src={IMG_METAMASK}
                                    height="140"
                                    width="340"
                                />
                            ),
                            title: "Descarga e Instala Metamask",
                        },
                        {
                            content: (
                                <Image
                                    loader={() => IMG_RINKEBY}
                                    src={IMG_RINKEBY}
                                    height="140"
                                    width="340"
                                />
                            ),
                            title: "Conecta tu Wallet con la Testnet de Rinkeby",
                        },
                        {
                            content: (
                                <div>
                                    <p>Tercer Paso</p>
                                </div>
                            ),
                            title: "Digita y Envía la cantidad de ETH a donar",
                        },
                        {
                            content: <p>Cuarto Paso</p>,
                            title: "Confirmar Transacción",
                        },
                        {
                            content: <p>Quinto Paso</p>,
                            title: "Visualizar tu NFT",
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default Guia
