import "./Compra.css";
import { useState, useEffect } from "react";


const initialState = JSON.parse(localStorage.getItem("todos") || "[]");

const Compra = () => {

	const [productos] = useState(initialState);

	useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(productos));
    }, [productos])

	return (
		<>
            <h1 className="title">Carrito de compras</h1>               
			<section id="todo-list">	
				<section className="status">
					<img src="https://i.imgur.com/OMzIpyl.png" alt="checkedlist"/>
					<br></br><h2>Carrito de compras vacia</h2><br></br>
					<h3>Agrega los productos de compra</h3>
				</section>
			
            </section>
            <section id="bot">
            </section>
		</>
	);
}

export default Compra;