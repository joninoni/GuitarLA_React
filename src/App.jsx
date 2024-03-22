import { useState } from "react"
import Guitar from "./Components/Guitar"
import Header from "./Components/Header"
import {db} from "./data/db.js"

function App() {

    const [data,setData] =useState(db)
    const [cart,setCart] = useState([])

    function addToCart(item){
        //verificar si una guitarra ya existe
        const itemExists=cart.findIndex( guitar => guitar.id === item.id)
        if(itemExists >=0){
            console.log("ya existe")
            const updateCart=[...cart]
            updateCart[itemExists].quantity++
            setCart(updateCart)
        }
        else{
            console.log("No existe... agregando al carrito")
            item.quantity = 1
            setCart([...cart,item])
            // setCart( prevCart => [...prevCart,item])
        }
    }

    return (
    <>
        <Header
            cart={cart}
        />
            

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map( guitar =>(
                           <Guitar
                                guitar={guitar}
                                key={guitar.id}
                                setCart={setCart}
                                addToCart={addToCart}
                           />
                    ))}
                 
                </div>
            </main>


            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
                </div>
            </footer>
        </>
    )
}

export default App