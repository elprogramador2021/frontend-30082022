import React, { useState } from "react"
import { Modal, Input, Typography, CryptoCards } from "web3uikit"

const niveles = [
    {
        nivel: "Nivel 1",
        estilo: "linear-gradient(113.54deg, rgba(60, 87, 140, 0.5) 14.91%, rgba(70, 86, 169, 0.5) 43.21%, rgba(125, 150, 217, 0.345) 44.27%, rgba(129, 161, 225, 0.185) 55.76%), linear-gradient(151.07deg, #141659 33.25%, #4152A7 98.24%)",
    },
    {
        nivel: "Nivel 2",
        estilo: "linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(10, 41, 255, 0.6) 42.57%, rgba(25, 105, 255, 0.336) 45.98%, rgba(25, 105, 255, 0.03) 55.76%), linear-gradient(160.75deg, #071AFF 41.37%, #45D4FF 98.29%)",
    },
    {
        nivel: "Nivel 3",
        estilo: "linear-gradient(113.54deg, rgba(119, 0, 1, 0.5) 14.91%, rgba(216, 43, 44, 0.5) 43.21%, rgba(255, 130, 130, 0.345) 44.27%, rgba(220, 96, 97, 0.185) 55.76%), linear-gradient(151.07deg, #8F0E0F 33.25%, #FA4A4B 98.24%)",
    },
    {
        nivel: "Nivel 4",
        estilo: "linear-gradient(113.54deg, rgba(103, 58, 194, 0.6) 14.91%, rgba(122, 74, 221, 0.498) 44.27%, rgba(170, 129, 255, 0.222) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #7A4ADD 41.37%, #D57BFF 98.29%)",
    },
    {
        nivel: "Nivel 5",
        estilo: "linear-gradient(113.54deg, rgba(217, 166, 54, 0.6) 14.91%, rgba(230, 166, 26, 0.6) 44.27%, rgba(207, 168, 28, 0) 45.98%, rgba(250, 228, 30, 0) 55.76%, rgba(245, 223, 30, 0) 55.76%), linear-gradient(147.17deg, #F5D116 48.73%, #CD9614 98.22%)",
    },
]

const MintVista = () => {
    const [tipoNFT, setTipoNFT] = useState(0)

    const modificarTipoNFT = (e) => {
        let valor = parseFloat(e.target.value)
        console.log(valor)

        if (valor < 100) {
            setTipoNFT(0)
            return
        }
        if (valor < 200) {
            setTipoNFT(1)
            return
        }
        if (valor < 300) {
            setTipoNFT(2)
            return
        }
        if (valor < 400) {
            setTipoNFT(3)
            return
        }
        if (valor < 500) {
            setTipoNFT(4)
            return
        }
    }

    return (
        <div>
            <div
                style={{
                    height: "90vh",
                    transform: "scale(1)",
                }}
            >
                <div>
                    <Modal
                        cancelText="Cancelar"
                        id="regular"
                        isVisible
                        okText="Mint"
                        onCancel={function noRefCheck() {}}
                        onCloseButtonPressed={function noRefCheck() {}}
                        onOk={function noRefCheck() {}}
                        title={
                            <div style={{ display: "flex", gap: 10 }}>
                                {/*<SvgEdit fill="#68738D" fontSize={28} />*/}
                                <Typography color="#68738D" variant="h3">
                                    Donar!
                                </Typography>
                            </div>
                        }
                    >
                        <div
                            style={{
                                padding: "20px 0 20px 0",
                            }}
                        >
                            <Input
                                label="ETH"
                                width="100%"
                                type="number"
                                onChange={modificarTipoNFT}
                            />
                            <div className="flex justify-center">
                                <CryptoCards
                                    bgColor={niveles[tipoNFT].estilo}
                                    btnText={`NFT de ${niveles[tipoNFT].nivel}`}
                                    chain="ethereum"
                                    chainType={niveles[tipoNFT].nivel}
                                    onClick={function noRefCheck() {}}
                                />
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MintVista
