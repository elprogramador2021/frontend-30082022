import React from "react"
import { Card } from "web3uikit"
import Image from "next/image"

const TOKEN_IMG =
    "https://st2.depositphotos.com/1526816/5687/v/950/depositphotos_56876431-stock-illustration-tree.jpg"

const NftCard = () => {
    return (
        <div className="p-2">
            <div
                style={{
                    width: "250px",
                }}
            >
                <Card
                    description="Click to create a dApp"
                    onClick={function noRefCheck() {}}
                    setIsSelected={function noRefCheck() {}}
                    title="dApp"
                    tooltipText={
                        <span style={{ width: 200 }}>
                            'Lorem Ipsum Dole met sai souni lokomit anici trenicid'
                        </span>
                    }
                >
                    <div>
                        <Image loader={() => TOKEN_IMG} src={TOKEN_IMG} height="200" width="200" />
                        {/*<Illustration height="180px" logo="servers" width="100%" />*/}
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default NftCard
