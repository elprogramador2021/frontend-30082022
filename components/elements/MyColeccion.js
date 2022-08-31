import React from "react"
import NftCard from "./NftCard"
const MyColeccion = () => {
    return (
        <div>
            <div className="p-4 flex justify-center">
                <div className="flex flex-wrap justify-center ">
                    {[0, 1, 2, 3].map((t) => {
                        return <NftCard key={t} id={t} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default MyColeccion
