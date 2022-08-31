import React from "react"
import Image from "next/image"
const IMG_METAMASK =
    "https://carboncollectiblenfts.com/static/media/collab-9.dd636227a3a304facaf3.png"

const Colaboraciones = () => {
    return (
        <div className="tecnologias" id="Tecnologias">
            <div className="tecnologias__container">
                <h2 className="text-3xl text-bold">Colaboraciones</h2>
                <div className="tecnologias__row">
                    <div className="tecnologias__tarjeta">
                        <Image
                            loader={() => IMG_METAMASK}
                            src={IMG_METAMASK}
                            height="340"
                            width="340"
                        />
                    </div>
                    <div className="tecnologias__tarjeta">
                        <Image
                            loader={() => IMG_METAMASK}
                            src={IMG_METAMASK}
                            height="340"
                            width="340"
                        />
                    </div>
                    <div className="tecnologias__tarjeta">
                        <Image
                            loader={() => IMG_METAMASK}
                            src={IMG_METAMASK}
                            height="340"
                            width="340"
                        />
                    </div>
                    <div className="tecnologias__tarjeta">
                        <Image
                            loader={() => IMG_METAMASK}
                            src={IMG_METAMASK}
                            height="340"
                            width="340"
                        />
                    </div>
                    <div className="tecnologias__tarjeta">
                        <Image
                            loader={() => IMG_METAMASK}
                            src={IMG_METAMASK}
                            height="340"
                            width="340"
                        />
                    </div>
                    <div className="tecnologias__tarjeta">
                        <Image
                            loader={() => IMG_METAMASK}
                            src={IMG_METAMASK}
                            height="340"
                            width="340"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Colaboraciones
