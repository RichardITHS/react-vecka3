import React from 'react'
import { Link } from 'react-router-dom'

interface HomeProps {
    firstname: string
    counter: number
}
/* type HomeProps = {
    firstname: string
    counter: number
}
 */
function Home(props: HomeProps) {
    return (
        <div>
            <h1>Välkommen till vår e-shop</h1>
            <h2>{props.firstname}</h2>
            <h2>{props.counter + 1}</h2>

            <p>Nyfiken? Kika på någon utav våra produkter nedan:</p>
            <Link to="/products/1">Produkt 1</Link>
            <Link to="/products/2">Produkt 2</Link>
        </div>
    )
}

export default Home
