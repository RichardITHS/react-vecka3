import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {UserInfo} from '../UserInfo'
function Products() {
    const { id } = useParams()
    const msg = useContext(UserInfo)


    return (
        <div>
            <h1>Produktsidan</h1>
            <h4>
                Här kan du läsa om följande produkt <span>{id} till {msg}</span>
            </h4>
        </div>
    )
}

export default Products
